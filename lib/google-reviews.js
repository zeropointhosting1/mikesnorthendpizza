// Pulls reviews from the Google Places API (New) at build time.
// The site is a static export, so this runs during `next build` and the
// results are baked into the HTML. Rebuild the site to refresh them.
//
// Env vars (set locally in .env.local, or as CI secrets):
//   GOOGLE_PLACES_API_KEY  required; without it the fallback reviews are used
//   GOOGLE_PLACE_ID        optional; if unset, the place is looked up by name

import { business, reviews as fallbackReviews, reviewSummary } from '@/lib/site-config';

const API = 'https://places.googleapis.com/v1';
const MIN_RATING = 4;
const MAX_REVIEWS = 3;

async function findPlaceId(apiKey) {
  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({
      textQuery: `${business.name}, ${business.addressLine1}, ${business.addressLine2}`,
    }),
  });
  if (!res.ok) throw new Error(`searchText ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.places?.[0]?.id;
}

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const fallback = { reviews: fallbackReviews, ...reviewSummary, source: 'fallback' };
  if (!apiKey) return fallback;

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(apiKey));
    if (!placeId) throw new Error('place not found');

    const res = await fetch(`${API}/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
    });
    if (!res.ok) throw new Error(`place details ${res.status}: ${await res.text()}`);
    const place = await res.json();

    const reviews = (place.reviews ?? [])
      .filter((r) => r.rating >= MIN_RATING && r.text?.text)
      .slice(0, MAX_REVIEWS)
      .map((r) => ({
        quote: r.text.text,
        name: r.authorAttribution?.displayName ?? 'Google user',
        rating: r.rating,
        authorUrl: r.authorAttribution?.uri,
        when: r.relativePublishTimeDescription,
      }));

    if (reviews.length === 0) return fallback;

    return {
      reviews,
      rating: place.rating,
      count: place.userRatingCount,
      mapsUrl: place.googleMapsUri,
      source: 'google',
    };
  } catch (err) {
    console.warn(`[google-reviews] using fallback reviews: ${err.message}`);
    return fallback;
  }
}

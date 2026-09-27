import { business, SITE_URL, TOAST_ORDER_URL } from '@/lib/site-config';
import { weeklyHours } from '@/lib/hours';

export const DEFAULT_TITLE = `${business.name} | Narragansett, RI`;

// 1200x630 link-preview image: hero pizza photo with the logo (public/share-image-logo.jpg).
export const SHARE_IMAGE = {
  url: '/share-image-logo.jpg',
  width: 1200,
  height: 630,
  alt: `The ${business.name} logo over a freshly baked pizza`,
};

// Per-page metadata: title, description, canonical URL, and matching Open
// Graph / Twitter tags, all sharing the same image. shareTitle overrides the
// title shown in link previews (iMessage drops the part matching siteName).
export function pageMetadata({ title, shareTitle, description, path }) {
  const fullTitle = title ? `${title} | ${business.name}` : DEFAULT_TITLE;
  const previewTitle = shareTitle || fullTitle;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: business.name, locale: 'en_US', url: path, title: previewTitle, description, images: [SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title: previewTitle, description, images: [SHARE_IMAGE] },
  };
}

const SCHEMA_DAYS = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

// Groups days that share the same hours into one OpeningHoursSpecification.
function openingHoursSpecification() {
  const groups = new Map();
  for (const { short, open, close } of weeklyHours) {
    if (!open) continue;
    const key = `${open}-${close}`;
    if (!groups.has(key)) groups.set(key, { '@type': 'OpeningHoursSpecification', dayOfWeek: [], opens: open, closes: close });
    groups.get(key).dayOfWeek.push(`https://schema.org/${SCHEMA_DAYS[short]}`);
  }
  return [...groups.values()];
}

export function restaurantJsonLd() {
  const [locality, stateZip] = business.addressLine2.split(', ');
  const [region, postalCode] = stateZip.split(' ');
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: business.name,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${SHARE_IMAGE.url}`,
    logo: `${SITE_URL}/assets/mikes-north-end-logo-wave.png`,
    telephone: business.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.addressLine1,
      addressLocality: locality,
      addressRegion: region,
      postalCode,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', ...business.geo },
    openingHoursSpecification: openingHoursSpecification(),
    servesCuisine: 'Pizza',
    priceRange: '$$',
    hasMenu: `${SITE_URL}/menu/`,
    sameAs: [business.instagramUrl, business.facebookUrl],
    potentialAction: {
      '@type': 'OrderAction',
      target: { '@type': 'EntryPoint', urlTemplate: TOAST_ORDER_URL, actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'] },
      deliveryMethod: 'https://schema.org/OnSitePickup',
    },
  };
}

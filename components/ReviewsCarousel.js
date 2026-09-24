'use client';

import { useEffect, useRef, useState } from 'react';

// Horizontal scroll-snap track: swipe on touch, arrow buttons on desktop.
export default function ReviewsCarousel({ reviews }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    update();
    // Card widths change with the viewport and when web fonts load.
    const resize = new ResizeObserver(update);
    resize.observe(track);
    if (track.firstElementChild) resize.observe(track.firstElementChild);
    track.addEventListener('scroll', update, { passive: true });
    return () => {
      resize.disconnect();
      track.removeEventListener('scroll', update);
    };
  }, []);

  // Move by one "page" of visible cards.
  const scroll = (direction) => {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="reviews-carousel" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
      <ul className="reviews-track" ref={trackRef} tabIndex={0}>
        {reviews.map((review, i) => (
          <li key={review.name} aria-label={`Review ${i + 1} of ${reviews.length}`}>
            <figure className="review-card">
              {review.rating && <div className="stars">{'★'.repeat(review.rating)}</div>}
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="review-name">
                &mdash;{' '}
                {review.authorUrl ? (
                  <a href={review.authorUrl} target="_blank" rel="noopener">{review.name}</a>
                ) : (
                  review.name
                )}
                {review.when && <span className="review-when"> · {review.when}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="reviews-controls" hidden={atStart && atEnd}>
        <button type="button" className="reviews-arrow" onClick={() => scroll(-1)} disabled={atStart} aria-label="Previous reviews">
          &larr;
        </button>
        <button type="button" className="reviews-arrow" onClick={() => scroll(1)} disabled={atEnd} aria-label="Next reviews">
          &rarr;
        </button>
      </div>
    </div>
  );
}

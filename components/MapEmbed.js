import { preconnect } from 'react-dom';
import { business } from '@/lib/site-config';

// Google's keyless embed always draws a place card in the top-left corner
// (blank until it loads). The iframe is taller than its frame and shifted up
// so that card is cropped off; Google's logo and terms stay visible below.
// Pass eager when the map is above the fold so it isn't held back by lazy loading.
export default function MapEmbed({ className = '', eager = false }) {
  // Open the connection to Google while the page is still loading.
  preconnect('https://www.google.com');

  return (
    <div className={`map-embed ${className}`.trim()}>
      <iframe
        src={business.mapEmbedUrl}
        title={`Map showing ${business.name} at ${business.addressLine1}, ${business.addressLine2}`}
        loading={eager ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

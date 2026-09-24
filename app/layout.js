import { Abril_Fatface, Lora, Lobster } from 'next/font/google';
import { SITE_URL } from '@/lib/site-config';
import { DEFAULT_TITLE, SHARE_IMAGE, restaurantJsonLd } from '@/lib/seo';
import './globals.css';

const displayFont = Abril_Fatface({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
});

const bodyFont = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const scriptFont = Lobster({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '400',
  display: 'swap',
});

// Site-wide defaults; each page adds its own title, description and canonical
// URL through pageMetadata() in lib/seo.js.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | Mike's North End Pizza Co." },
  openGraph: { type: 'website', siteName: "Mike's North End Pizza Co.", locale: 'en_US', images: [SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', images: [SHARE_IMAGE] },
  // The GitHub Pages demo sets this so search engines don't index a copy of the site.
  ...(process.env.NEXT_PUBLIC_NOINDEX === '1' && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <script
          type="application/ld+json"
          // JSON.stringify output is safe here except for "<", which could close the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}

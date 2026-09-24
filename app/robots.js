import { SITE_URL } from '@/lib/site-config';

// Prerendered to /robots.txt by the static export.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import { SITE_URL } from '@/lib/site-config';

// Prerendered to /sitemap.xml by the static export.
export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/menu/', priority: 0.9 },
  { path: '/order/', priority: 0.8 },
  { path: '/visit/', priority: 0.8 },
  { path: '/about/', priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}

// Subfolder the site is served from ('' on a custom domain, '/<repo>' on the
// GitHub Pages demo). next/link adds it to links automatically; image and
// other static file paths need asset() because next/image does not.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const asset = (path) => `${BASE_PATH}${path}`;

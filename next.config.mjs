/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the build output (the `out/` folder) can be served
  // directly by GitHub Pages, with no Node server required.
  output: 'export',
  // GitHub Pages serves plain files, so every route needs its own
  // index.html inside a matching folder.
  trailingSlash: true,
  // Lets phones on the local network load dev scripts from `next dev`.
  allowedDevOrigins: ['192.168.0.130'],
  images: {
    // No image optimization server exists on static hosting.
    unoptimized: true,
  },
  // Set when the site is served from a subfolder, e.g. the GitHub Pages demo
  // at https://<user>.github.io/<repo>/ (see .github/workflows/deploy.yml).
  // Empty on a custom domain. Image paths add it via asset() in lib/base-path.js.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;

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
  // If this ends up deployed to https://<user>.github.io/<repo>/ instead of
  // a custom domain, uncomment and set both to '/<repo>'.
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` creates an `out/` folder you can upload to Cloudflare.
  output: "export",
  trailingSlash: true,
};
export default nextConfig;

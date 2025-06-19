// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ disables ALL type errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint too
  },
};

module.exports = nextConfig;

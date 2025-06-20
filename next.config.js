/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS image domains
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP image domains (not recommended in production)
      },
      {
        protocol: 'https',
        hostname: 'u5zl6ktajk.ufs.sh',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;

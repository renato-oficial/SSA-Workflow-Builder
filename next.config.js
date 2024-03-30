/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        hostname: 'ui.aceternity.com',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['medex.designercrunch.net'],
  },
};

module.exports = nextConfig;

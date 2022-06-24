/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'robohash.org',
      'static-cdn.jtvnw.net',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

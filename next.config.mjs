/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.rawg.io',
      },
    ],
  },
};

export default nextConfig;

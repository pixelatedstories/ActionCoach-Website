import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/programs/strategic-planning',
        destination: '/programs/growth-club',
        permanent: true,
      },
      {
        source: '/resources/videos',
        destination: '/client-stories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

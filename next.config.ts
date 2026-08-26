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
        destination: '/coaching-videos',
        permanent: true,
      },
      {
        source: '/what-is-the-price-for-business-coaching',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/event/:slug*',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/epicworkbook',
        destination: '/downloads/epic-workbook.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/uploads/**',
      },
    ],
  },

  async redirects() {
    return [
      
      {
        source: '/:year(\\d{4})/:month(\\d{1,2})/:day(\\d{1,2})/:slug',
        destination: '/news/:slug', 
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
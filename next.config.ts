import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/research',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

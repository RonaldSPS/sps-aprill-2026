import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kontorikoristus",
        destination: "/koristusteenus/kontori-koristus",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

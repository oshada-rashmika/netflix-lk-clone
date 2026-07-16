import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
      },
      {
        protocol: "https",
        hostname: "occ.a.nflxso.net",
      },
      {
        protocol: "https",
        hostname: "occ-0-6516-64.1.nflxso.net",
      },
    ],
  },
};

export default nextConfig;

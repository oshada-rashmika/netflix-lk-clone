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
    ],
  },
};

export default nextConfig;

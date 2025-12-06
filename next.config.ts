import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phawat-portfolio-assets.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

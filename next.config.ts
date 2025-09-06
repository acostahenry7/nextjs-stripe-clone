import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // ignore type errors
  },
  eslint: {
    ignoreDuringBuilds: true, // ignore eslint errors
  },
};

export default nextConfig;

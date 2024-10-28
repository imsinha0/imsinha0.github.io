import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/imsinha0.github.io/',
  basePath: '/imsinha0.github.io',
  output: 'export'
};

export default nextConfig;

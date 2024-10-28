import type { NextConfig } from "next";

//This is a test

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'build',
  trailingSlash: false,
  images: {unoptimized: true}
};

export default nextConfig;

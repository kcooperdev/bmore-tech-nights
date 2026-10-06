import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.MTC_DIST || ".next",
  devIndicators: false,
};

export default nextConfig;

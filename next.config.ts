import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/remin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

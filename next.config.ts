import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static0.polygonimages.com" },
      { protocol: "https", hostname: "cdn.mos.cms.futurecdn.net" },
      { protocol: "https", hostname: "kotaku.com" },
      { protocol: "https", hostname: "assetsio.gnwcdn.com" },
      { protocol: "https", hostname: "images.nintendolife.com" },
    ],
  },
};

export default nextConfig;

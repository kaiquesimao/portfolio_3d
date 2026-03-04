import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
  async headers() {
    const staticAssetCacheHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, stale-while-revalidate=86400",
      },
    ];

    return [
      {
        source: "/desktop_pc/:path*",
        headers: staticAssetCacheHeaders,
      },
      {
        source: "/planet/:path*",
        headers: staticAssetCacheHeaders,
      },
      {
        source: "/assets/:path*",
        headers: staticAssetCacheHeaders,
      },
    ];
  },
};

export default nextConfig;

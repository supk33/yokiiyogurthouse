import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Menu images uploaded in the CMS (www.sk109.com admin).
    remotePatterns: [
      { protocol: "https", hostname: "sk109.com" },
      { protocol: "https", hostname: "**.sk109.com" },
      // CMS image uploads are stored on Vercel Blob.
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BANDSINTOWN_API_KEY: process.env.BANDSINTOWN_API_KEY, // ✅ Ensure the API key is accessible
  },
};

export default nextConfig;

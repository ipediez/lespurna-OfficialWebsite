import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BANDSINTOWN_API_KEY: process.env.BANDSINTOWN_API_KEY, // ✅ Ensure the API key is accessible
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Language",
            value: "ca", // ✅ Set language to Catalan or your default
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  i18n: {
    defaultLocale: "ca",
    locales: ["ca"],
  },
};

export default nextConfig;

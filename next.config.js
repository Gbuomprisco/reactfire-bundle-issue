const withBundleAnalyzer = require("@next/bundle-analyzer");

const analyzeBundleEnabled = process.env.ANALYZE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer({
  enabled: analyzeBundleEnabled
})(nextConfig);

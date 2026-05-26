/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Enable compression
  compress: true,
  // Power header removal for security
  poweredByHeader: false,
}

module.exports = nextConfig

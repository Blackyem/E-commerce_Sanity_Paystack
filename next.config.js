/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },

  eslint: {
    ignoreDuringBuilds: false,
  },
  
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    ignoreDuringBuilds: true
  },

    
}

module.exports = nextConfig

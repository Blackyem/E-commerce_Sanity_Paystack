/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },

  eslint: {

    ignoreDuringBuilds: true,
  },
  
}

module.exports = nextConfig



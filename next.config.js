/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co'
        }
      ]
    }
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  watchers: {
    webpack: {
      poll: true
    }
  }
}

module.exports = nextConfig

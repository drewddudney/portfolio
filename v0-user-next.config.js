/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/book-now",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig


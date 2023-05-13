/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lcrslivizqahvyelkkmf.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/photos/**',
      },
    ],
  },
}

module.exports = nextConfig

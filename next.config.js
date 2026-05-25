/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Allows loading images from any domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizePackageImports: [
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
  },
};

module.exports = nextConfig;
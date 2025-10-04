/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Required for static hosting
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // because Hostinger doesn't support Next.js image optimizer
  },
}

export default nextConfig

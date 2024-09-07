/** @type {import('next').NextConfig} */
const isExport = true

const nextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

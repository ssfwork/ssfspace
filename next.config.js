/** @type {import('next').NextConfig} */
const isExport = true
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
  basePath: isProd ? "/ssfspace" : "",
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

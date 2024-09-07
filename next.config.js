/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "true"

const nextConfig = {
  output: isExport ? "export" : undefined,
  trailingSlash: true,
  basePath: isExport ? "/ssfspace" : undefined,
  experimental: {
    esmExternals: true,
  },
}

module.exports = nextConfig

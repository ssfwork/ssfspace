/** @type {import('next').NextConfig} */
const isExport = false

const nextConfig = {
  output: isExport ? "export" : undefined,
  trailingSlash: true,
  basePath: isExport ? "/ssfspace" : undefined,
}

module.exports = nextConfig

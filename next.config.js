/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
  basePath: isProd ? "/ssfspace" : "",
  output: isProd ? "export" : "",
}

module.exports = nextConfig

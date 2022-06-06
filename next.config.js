/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: 'http://localhost:3000',
    JSON_SERVER_HOST: 'http://localhost:8000',
    CLIENT_SECRET: 'abcdefghijklmnopqrestuvwxyzabcdef111000222333',
    COOKIE_NAME: 'auth-app-cookie-session'
  }
}

module.exports = nextConfig

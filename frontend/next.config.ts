/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],   // ✅ Agregado para permitir imágenes de perfil de Google
  },
};

module.exports = nextConfig;
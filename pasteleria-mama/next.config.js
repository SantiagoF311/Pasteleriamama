/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // styledComponents: true, // Descomentar si usas styled-components
  },
  webpack: (config, { isServer }) => {
    // Puedes añadir configuraciones personalizadas de Webpack aquí
    return config;
  },
};

module.exports = nextConfig; 
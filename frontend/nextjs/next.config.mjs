/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', /** Para el caso de que se genere un contenedor por cada servicio, con gcloud build, usar output export. En caso contrario eliminarla */
  images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
      {
        hostname: 'www.google-analytics.com',
      }
    ],
  },
};

export default nextConfig;

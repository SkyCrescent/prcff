import type { NextConfig } from "next";

const nextConfig: NextConfig = {

output: 'export', // Permet d'exporter un site statique
   images: {
          unoptimized: true,
      }

};

export default nextConfig;

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'IMC Calc',
    name: 'IMC Calc - Calculadora de IMC',
    icons: [
      {
        src: 'icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },

      {
        src: 'icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },

      {
        src: 'icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    start_url: '/',
    display: 'standalone',
    theme_color: '#111827',
    background_color: '#111827',
    scope: '/',
    orientation: 'portrait',
  };
}

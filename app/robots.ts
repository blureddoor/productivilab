// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const site = 'https://productivilab.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // rutas que no quieres indexar (ajusta si procede)
          '/api/',
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}

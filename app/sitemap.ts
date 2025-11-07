// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { products } from '@/content/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = 'https://productivilab.com';
  const now = new Date().toISOString();

  const core: MetadataRoute.Sitemap = [
    { url: `${site}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${site}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = (products || []).map((p) => ({
    url: `${site}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...core, ...productPages];
}

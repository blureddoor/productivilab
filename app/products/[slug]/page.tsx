import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/content/products';
import ProductClient from './ProductClient';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = products.find(x => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name.es} — ProductiviLab`,
    description: p.tagline.es,
    openGraph: {
      title: `${p.name.es} — ProductiviLab`,
      description: p.tagline.es,
      images: [{ url: p.image }],
      type: 'website',
    },
    alternates: {
      canonical: `https://productivilab.com/products/${p.slug}`
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = products.find(x => x.slug === params.slug);
  if (!p) return null;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name.es,
    description: p.tagline.es,
    image: `https://productivilab.com${p.image}`,
    brand: { '@type': 'Brand', name: 'ProductiviLab' }
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link href="/products" className="text-sm text-slate-500 hover:text-slate-700">← Volver a productos</Link>
      </div>
      <ProductClient slug={params.slug} />
      <Script type="application/ld+json" id="product-jsonld">{JSON.stringify(productJsonLd)}</Script>
    </main>
  );
}

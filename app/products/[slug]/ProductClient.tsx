'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import CtaLink from '@/components/CtaLink';
import { pushDL } from '@/lib/gtm';
import useScrollDepth from '@/lib/useScrollDepth';

const SITE = 'https://productivilab.com';

function toEmbed(url?: string) {
  if (!url) return '';
  let u = url;
  if (u.includes('watch?v=')) u = u.replace('watch?v=', 'embed/');
  if (u.includes('youtu.be/')) u = u.replace('youtu.be/', 'www.youtube.com/embed/');
  try {
    const abs = u.startsWith('http') ? u : `https://${u}`;
    const uri = new URL(abs);
    uri.searchParams.set('enablejsapi', '1');
    if (typeof window !== 'undefined') uri.searchParams.set('origin', window.location.origin);
    uri.searchParams.set('rel', '0');
    uri.searchParams.set('modestbranding', '1');
    return uri.toString();
  } catch {
    return u;
  }
}

function parsePriceToNumber(txt?: string): number | undefined {
  if (!txt) return undefined;
  const m = txt.replace(/\s/g, '').match(/(\d+[.,]?\d*)/);
  if (!m) return undefined;
  return Number(m[1].replace(',', '.'));
}

export default function ProductClient({ slug }: { slug: string }) {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const stored =
      (typeof window !== 'undefined' && (localStorage.getItem('lang') as Locale)) || 'es';
    setLocale(stored || 'es');
  }, []);

  const p = products.find((x) => x.slug === slug);
  if (!p) return null;

  const name = p.name[locale];
  const tagline = p.tagline[locale];
  const priceFrom = p.priceFrom?.[locale];
  const priceNumber = parsePriceToNumber(priceFrom);
  const features = (p.features || []).map((f) => f[locale]);
  const includes = (p.includes || []).map((i) => i[locale]);
  const gumroad = p.gumroad?.[locale];
  const etsy = p.etsy?.[locale];
  const demo = p.demo?.[locale];
  const video = p.video?.[locale];

  const ctaLabel = locale === 'es' ? 'Comprar ahora' : 'Buy now';
  const demoLabel = locale === 'es' ? 'Probar demo' : 'Try demo';

  const buyBtn =
    'rounded-xl bg-[#FF5733] text-white px-6 py-3 font-semibold hover:brightness-95';
  const secondaryBtn =
    'rounded-xl border border-slate-300 text-slate-700 px-6 py-3 font-medium hover:bg-white';
  const demoBtn =
    'rounded-xl border border-slate-800 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50';
  const videoBtn =
    'rounded-xl border border-slate-800 text-slate-800 px-4 py-2 font-medium hover:bg-slate-50';

  // GA4: view_item al cargar la ficha
  useEffect(() => {
    pushDL('view_item', {
      items: [
        {
          item_id: slug,
          item_name: name,
          price: priceNumber ?? undefined,
          currency: 'EUR',
        },
      ],
      product_slug: slug,
      locale,
    });
  }, [slug, name, priceNumber, locale]);

  // Scroll depth 25/50/75%
  useScrollDepth({ thresholds: [25, 50, 75], productSlug: slug, locale });

  // JSON-LD (sin useMemo para evitar paréntesis extra)
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: tagline,
    sku: slug,
    brand: { '@type': 'Brand', name: 'ProductiviLab' },
    image: [`${SITE}/og-image.png`],
    offers: {
      '@type': 'Offer',
      price: String(priceNumber ?? 19),
      pri

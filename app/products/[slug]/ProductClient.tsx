'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import CtaLink from '@/components/CtaLink';
import { pushDL } from '@/lib/gtm';

const SITE = 'https://productivilab.com';

function toEmbed(url?: string) {
  if (!url) return '';
  let u = url;
  if (u.includes('watch?v=')) u = u.replace('watch?v=', 'embed/');
  if (u.includes('youtu.be/')) u = u.replace('youtu.be/', 'www.youtube.com/embed/');
  try {
    const abs = u.startsWith('http') ? u : `https://${u}`;
    const uri = new URL(abs);
    // Obligatorio para que el trigger de YouTube funcione
    uri.searchParams.set('enablejsapi', '1');
    // Usa el origin real del navegador (ej: https://www.productivilab.com) para evitar desajustes
    if (typeof window !== 'undefined') {
      uri.searchParams.set('origin', window.location.origin);
    } else {
      uri.searchParams.delete('origin');
    }
    // Opcionales de UX
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

  const p = useMemo(() => products.find((x) => x.slug === slug), [slug]);
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

  // ---- GA4: view_item al cargar la ficha ----
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

  // ---- JSON-LD: Product + Breadcrumbs ----
  const productJsonLd = useMemo(
    () => ({
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
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${SITE}/products/${slug}`,
      },
    }),
    [name, tagline, slug, priceNumber]
  );

  const breadcrumbsJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'es' ? 'Productos' : 'Products',
          item: `${SITE}/products`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: `${SITE}/products/${slug}`,
        },
      ],
    }),
    [locale, name, slug]
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* JSON-LD específicos de la ficha */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <h1 className="text-3xl font-bold text-[#3A4861]">{name}</h1>
      <p className="text-slate-700 mt-2">{tagline}</p>
      {priceFrom && <p className="text-slate-500 mt-1">{priceFrom}</p>}

      {video && (
        <div className="mt-6">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              id={`yt-${slug}`}
              className="h-full w-full"
              src={toEmbed(video)}
              title={`${name} — video`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="mt-3">
            <CtaLink
              href={video}
              ctaType="video"
              ctaLocation="product_page_video"
              productSlug={slug}
              className={videoBtn}
            >
              {locale === 'es' ? 'Ver en YouTube' : 'Watch on YouTube'}
            </CtaLink>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {gumroad && (
          <CtaLink
            href={gumroad}
            ctaType="gumroad"
            ctaLocation="product_page_hero"
            productSlug={slug}
            className={buyBtn}
          >
            {ctaLabel}
          </CtaLink>
        )}
        {etsy && (
          <CtaLink
            href={etsy}
            ctaType="etsy"
            ctaLocation="product_page_hero"
            productSlug={slug}
            className={secondaryBtn}
          >
            Etsy
          </CtaLink>
        )}
        {demo && (
          <CtaLink
            href={demo}
            ctaType="demo"
            ctaLocation="product_page_hero"
            productSlug={slug}
            className={demoBtn}
          >
            {demoLabel}
          </CtaLink>
        )}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {features.length > 0 && (
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800">
              {locale === 'es' ? 'Qué puedes hacer' : 'What you can do'}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}
        {includes.length > 0 && (
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800">
              {locale === 'es' ? 'Incluye' : 'Includes'}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
              {includes.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import CtaLink from '@/components/CtaLink';
import { pushDL } from '@/lib/gtm';

type Props = {
  /** opcional; si no se pasa, intenta leer de localStorage y cae a 'es' */
  locale?: Locale;
  /** nombre del listado para analytics */
  itemListName?: string;
  /** cuántos productos enseñar (por defecto todos) */
  limit?: number;
};

function getLocaleFromStorage(): Locale {
  if (typeof window === 'undefined') return 'es';
  const l = (localStorage.getItem('lang') as Locale) || 'es';
  return (l === 'en' ? 'en' : 'es');
}

export default function ProductsGrid({ locale: localeProp, itemListName = 'home_grid', limit }: Props) {
  const [browserLocale, setBrowserLocale] = useState<Locale>('es');

  useEffect(() => {
    setBrowserLocale(getLocaleFromStorage());
  }, []);

  const locale = (localeProp || browserLocale || 'es') as Locale;

  // Productos a mostrar
  const items = useMemo(() => {
    const base = products.slice(0, limit || products.length);
    return base.map(p => ({
      slug: p.slug,
      name: p.name[locale],
      tagline: p.tagline[locale],
      priceFrom: p.priceFrom?.[locale],
      gumroad: p.gumroad?.[locale],
      etsy: p.etsy?.[locale],
      cover: (p as any).cover || '/og-image.png', // fallback seguro
      badges: [
        (p as any).excel ?? 'Excel + Google Sheets',
        (p as any).bilingual ?? 'ES/EN',
        (p as any).euReady ?? 'EU-ready'
      ],
    }));
  }, [locale, limit]);

  // view_item_list al cargar
  useEffect(() => {
    if (!items.length) return;
    pushDL('view_item_list', {
      item_list_name: itemListName,
      items: items.map((i, index) => ({
        item_id: i.slug,
        item_name: i.name,
        index,
      })),
      locale,
    });
  }, [items, itemListName, locale]);

  const t = {
    moreInfo: locale === 'es' ? 'Más info' : 'More info',
    buy: locale === 'es' ? 'Comprar' : 'Buy',
  };

  const onSelect = (slug: string, name: string) => {
    pushDL('select_item', {
      item_list_name: itemListName,
      items: [{ item_id: slug, item_name: name }],
      product_slug: slug,
      locale,
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((p) => (
        <article key={p.slug} className="rounded-2xl border bg-white p-4 hover:shadow-sm transition-shadow">
          <Link
            href={`/products/${p.slug}`}
            onClick={() => onSelect(p.slug, p.name)}
            className="block"
          >
            <div className="overflow-hidden rounded-xl border">
              {/* Si tienes next/image, puedes cambiar a <Image … fill /> con un contenedor relative */}
              <img
                src={p.cover}
                alt={p.name}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
          </Link>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[17px] font-semibold text-slate-900">{p.name}</h3>
              {p.priceFrom && <span className="text-sm text-slate-500">{p.priceFrom}</span>}
            </div>
            <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>

            {/* Badges simples (puedes mapear las reales si las tienes en el content) */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border px-2.5 py-1 text-xs text-slate-700">Excel + Google Sheets</span>
              <span className="rounded-full border px-2.5 py-1 text-xs text-slate-700">ES/EN</span>
              <span className="rounded-full border px-2.5 py-1 text-xs text-slate-700">EU-ready</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/products/${p.slug}`}
                onClick={() => onSelect(p.slug, p.name)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-white"
              >
                {t.moreInfo}
              </Link>

              {/* CTA de compra (prioriza Gumroad; si no hay, intenta Etsy; si no, oculta) */}
              {p.gumroad ? (
                <CtaLink
                  href={p.gumroad}
                  ctaType="gumroad"
                  ctaLocation={`${itemListName}_card`}
                  productSlug={p.slug}
                  className="rounded-xl bg-[#FF5733] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
                >
                  {t.buy}
                </CtaLink>
              ) : p.etsy ? (
                <CtaLink
                  href={p.etsy}
                  ctaType="etsy"
                  ctaLocation={`${itemListName}_card`}
                  productSlug={p.slug}
                  className="rounded-xl bg-[#FF5733] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
                >
                  {t.buy}
                </CtaLink>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

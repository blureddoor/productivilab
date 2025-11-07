'use client';

import Link from 'next/link';
import type { Locale } from '@/content/i18n';
import { pushDL } from '@/lib/gtm';

function currentLocale(): Locale {
  if (typeof document !== 'undefined') {
    const lang = document.documentElement.getAttribute('lang');
    if (lang === 'en') return 'en' as Locale;
  }
  return 'es' as Locale;
}

type Product = {
  slug: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  // añade aquí lo que ya uses (badges, priceFrom, etc.)
};

type Props = {
  product: Product;
  index?: number;
  locale?: Locale; // <-- opcional
};

export default function ProductCard({ product, index = 1, locale }: Props) {
  const loc = locale ?? currentLocale();

  const onClick = () => {
    // select_item para GA4
    pushDL('select_item', {
      item_list_id: 'home_featured',
      item_list_name: 'Home — Más herramientas',
      items: [
        {
          item_id: product.slug,
          item_name: product.name[loc],
          index,
        },
      ],
      product_slug: product.slug,
      locale: loc,
    });
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      onClick={onClick}
      className="block rounded-xl border bg-white p-4 hover:shadow-sm"
    >
      <div className="text-base font-semibold text-slate-900">
        {product.name[loc]}
      </div>
      <div className="mt-1 text-sm text-slate-600">
        {product.tagline[loc]}
      </div>
      <div className="mt-3 text-sm font-medium text-[#FF5733]">
        {loc === 'es' ? 'Más info' : 'More info'}
      </div>
    </Link>
  );
}

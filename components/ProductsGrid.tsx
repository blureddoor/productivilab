'use client';

import { useEffect } from 'react';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import { pushDL } from '@/lib/gtm';
import ProductCard from '@/components/ProductCard';

function currentLocale(): Locale {
  if (typeof document !== 'undefined') {
    const lang = document.documentElement.getAttribute('lang');
    if (lang === 'en') return 'en' as Locale;
  }
  return 'es' as Locale;
}

type Props = {
  locale?: Locale;                 // <-- ahora opcional
  itemListId?: string;
  itemListName?: string;
};

export default function ProductsGrid({
  locale,
  itemListId = 'home_featured',
  itemListName = 'Home — Más herramientas',
}: Props) {
  const loc = locale ?? currentLocale();

  // view_item_list para GA4
  useEffect(() => {
    try {
      const items = products.map((p, idx) => ({
        item_id: p.slug,
        item_name: p.name[loc],
        index: idx + 1,
      }));
      pushDL('view_item_list', {
        item_list_id: itemListId,
        item_list_name: itemListName,
        items,
        locale: loc,
      });
    } catch {}
  }, [loc, itemListId, itemListName]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i + 1} locale={loc} />
      ))}
    </div>
  );
}

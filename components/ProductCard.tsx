'use client';

import Link from 'next/link';
import type { Locale } from '@/content/i18n';
import { pushDL } from '@/lib/gtm';

type Product = {
  slug: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  // Puedes añadir aquí props extra si las usas (imágenes, badges, etc.)
};

type Props = {
  product: Product;
  locale: Locale;
  /** Para GA4: de qué listado proviene el clic */
  listId?: string;
  listName?: string;
};

export default function ProductCard({
  product,
  locale,
  listId = 'home_products',
  listName = 'Home – Más herramientas',
}: Props) {
  const title = product.name?.[locale] ?? product.slug;
  const subtitle = product.tagline?.[locale] ?? '';

  const href = `/products/${product.slug}`;

  const onClick = () => {
    // GA4: select_item cuando el usuario hace clic en la card
    pushDL('select_item', {
      item_list_id: listId,
      item_list_name: listName,
      items: [{ item_id: product.slug, item_name: title }],
      product_slug: product.slug,
      locale,
    });
  };

  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow transition">
      <Link href={href} onClick={onClick} className="block">
        {/* Si tienes imagen, colócala aquí con next/image */}
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="mt-1 text-slate-600 text-sm">{subtitle}</p>}
        </div>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-800">
          <span>{locale === 'es' ? 'Más info' : 'Learn more'}</span>
          <span aria-hidden>→</span>
        </div>
      </Link>
    </article>
  );
}

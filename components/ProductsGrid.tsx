'use client';

import { useEffect } from 'react';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import ProductCard from '@/components/ProductCard';
import { pushDL } from '@/lib/gtm';

type Props = {
  locale: Locale;
  /** Identificador del listado para GA4 (home/products, etc.) */
  listId?: string;
  /** Nombre legible del listado para GA4 */
  listName?: string;
  className?: string;
};

/**
 * Grid reutilizable de productos.
 * Emite GA4 `view_item_list` con los items visibles.
 */
export default function ProductsGrid({
  locale,
  listId = 'home_products',
  listName = 'Home – Más herramientas',
  className = '',
}: Props) {
  // dispara view_item_list al montar (y cuando cambie el locale)
  useEffect(() => {
    try {
      pushDL('view_item_list', {
        item_list_id: listId,
        item_list_name: listName,
        items: products.map((p) => ({
          item_id: p.slug,
          item_name: p.name?.[locale] ?? p.slug,
        })),
      });
    } catch {
      /* no-op */
    }
  }, [locale, listId, listName]);

  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            product={p as any}
            locale={locale}
            listId={listId}
            listName={listName}
          />
        ))}
      </div>
    </div>
  );
}

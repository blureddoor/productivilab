'use client';
import { useEffect, useState } from 'react';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsGrid() {
  const [locale, setLocale] = useState<Locale>('es');
  useEffect(() => {
    const stored = (typeof window !== 'undefined' && (localStorage.getItem('lang') as Locale)) || 'es';
    setLocale(stored);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map(p => <ProductCard key={p.slug} p={p} locale={locale} />)}
    </div>
  );
}

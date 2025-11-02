'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [locale, setLocale] = useState<'es' | 'en'>('es');

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero principal */}
      <Hero locale={locale} />

      {/* Features existentes */}
      <Features locale={locale} />

      {/* 🔽 Bloque del nuevo producto */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-4">
          {locale === 'es' ? 'Nuevos productos' : 'New products'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/inventory-reorder-pro"
            className="group bg-white border border-slate-100 rounded-2xl p-4 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/mockup_1_v1.5.2.png"  // pon el mockup en /public
                alt="Inventory & Reorder PRO"
                width={160}
                height={100}
                className="rounded-md border border-slate-100"
              />
              <div>
                <div className="font-bold text-slate-800 group-hover:underline">
                  Inventory & Reorder PRO
                </div>
                <div className="text-slate-500 text-sm">
                  {locale === 'es'
                    ? 'Control de stock, ROP, multi-almacén, KPIs'
                    : 'Stock control, ROP, multi-warehouse, KPIs'}
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

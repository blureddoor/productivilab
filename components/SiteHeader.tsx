'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Locale = 'es' | 'en';

function getLocale(): Locale {
  try {
    const stored = (localStorage.getItem('lang') as Locale) || 'es';
    return stored === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

export default function SiteHeader() {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => setLocale(getLocale()), []);

  const gumroad =
    (locale === 'es'
      ? process.env.NEXT_PUBLIC_GUMROAD_ES
      : process.env.NEXT_PUBLIC_GUMROAD_EN) || '#';

  const switchLang = (l: Locale) => {
    try {
      localStorage.setItem('lang', l);
    } catch {}
    setLocale(l);
    // Refresca textos que dependan del localStorage
    location.reload();
  };

  const t = {
    products: locale === 'es' ? 'Productos' : 'Products',
    how: locale === 'es' ? 'Cómo funciona' : 'How it works',
    reviews: locale === 'es' ? 'Reseñas' : 'Reviews',
    faq: 'FAQ',
    support: locale === 'es' ? 'Soporte' : 'Support',
    buy: locale === 'es' ? 'Comprar en Gumroad' : 'Buy on Gumroad',
    freebie: locale === 'es' ? 'Calculadora ROAS gratis' : 'Free ROAS calculator',
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" aria-label="Home">
            <img
              src="/logo-productivilab.png"
              alt="ProductiviLab"
              className="h-7 w-auto"
            />
          </Link>
        </div>

        {/* Nav SIEMPRE visible */}
        <nav className="flex items-center gap-6 text-sm flex-1">
          <Link href="/products" className="text-slate-700 hover:text-slate-900">
            {t.products}
          </Link>
          <Link href="/#how" className="text-slate-700 hover:text-slate-900">
            {t.how}
          </Link>
          <Link href="/#reviews" className="text-slate-700 hover:text-slate-900">
            {t.reviews}
          </Link>
          <Link href="/#faq" className="text-slate-700 hover:text-slate-900">
            {t.faq}
          </Link>
          <Link href="/#support" className="text-slate-700 hover:text-slate-900">
            {t.support}
          </Link>

          {/* Nuevo enlace al freebie ROAS */}
          <Link
            href="/freebies/roas-calculator"
            className="text-slate-700 hover:text-slate-900 font-semibold"
          >
            {t.freebie}
          </Link>
        </nav>

        {/* Idioma + CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="rounded-full border p-0.5">
            <button
              onClick={() => switchLang('es')}
              className={`px-2 py-1 text-sm rounded-full ${
                locale === 'es' ? 'bg-slate-900 text-white' : 'text-slate-700'
              }`}
              aria-pressed={locale === 'es'}
            >
              ES
            </button>
            <button
              onClick={() => switchLang('en')}
              className={`px-2 py-1 text-sm rounded-full ${
                locale === 'en' ? 'bg-slate-900 text-white' : 'text-slate-700'
              }`}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
          </div>

          <a
            href={gumroad}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#FF5733] px-3 py-2 text-sm font-semibold text-white hover:brightness-95"
          >
            {t.buy}
          </a>
        </div>
      </div>
    </header>
  );
}

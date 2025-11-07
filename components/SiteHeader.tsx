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

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Home">
            <img
              src="/logo-productivilab.png"
              alt="ProductiviLab"
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/products" className="text-sm text-slate-700 hover:text-slate-900">
              {locale === 'es' ? 'Productos' : 'Products'}
            </Link>
            <a href="/#how" className="text-sm text-slate-700 hover:text-slate-900">
              {locale === 'es' ? 'Cómo funciona' : 'How it works'}
            </a>
            <Link href="/reviews" className="text-sm text-slate-700 hover:text-slate-900">
              {locale === 'es' ? 'Reseñas' : 'Reviews'}
            </Link>
            <Link href="/faq" className="text-sm text-slate-700 hover:text-slate-900">
              FAQ
            </Link>
            <Link href="/support" className="text-sm text-slate-700 hover:text-slate-900">
              {locale === 'es' ? 'Soporte' : 'Support'}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full border p-0.5">
            <button
              onClick={() => switchLang('es')}
              className={`px-2 py-1 text-sm rounded-full ${locale === 'es' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}
            >
              ES
            </button>
            <button
              onClick={() => switchLang('en')}
              className={`px-2 py-1 text-sm rounded-full ${locale === 'en' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}
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
            {locale === 'es' ? 'Comprar en Gumroad' : 'Buy on Gumroad'}
          </a>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Locale = 'es' | 'en';

function detectLocale(): Locale {
  if (typeof document !== 'undefined') {
    const lang = document.documentElement.lang?.toLowerCase() || '';
    if (lang.startsWith('en')) return 'en';
  }
  try {
    const l = (localStorage.getItem('lang') as Locale) || 'es';
    return l === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

export default function Header() {
  const [locale, setLocale] = useState<Locale>('es');
  useEffect(() => setLocale(detectLocale()), []);

  const gumroadUrl =
    (locale === 'es'
      ? process.env.NEXT_PUBLIC_GUMROAD_ES
      : process.env.NEXT_PUBLIC_GUMROAD_EN) || '#';

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Ir a inicio">
          <img
            src="/logo-productivilab.png"
            alt="ProductiviLab"
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/products" className="text-sm text-slate-700 hover:text-slate-900">
            {locale === 'es' ? 'Productos' : 'Products'}
          </Link>
          <a href="/#how" className="text-sm text-slate-700 hover:text-slate-900">
            {locale === 'es' ? 'Cómo funciona' : 'How it works'}
          </a>
          <Link href="/faq" className="text-sm text-slate-700 hover:text-slate-900">
            FAQ
          </Link>
          <Link href="/support" className="text-sm text-slate-700 hover:text-slate-900">
            {locale === 'es' ? 'Soporte' : 'Support'}
          </Link>
        </nav>

        <a
          href={gumroadUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-[#FF5733] px-3 py-2 text-sm font-semibold text-white hover:brightness-95"
        >
          {locale === 'es' ? 'Comprar en Gumroad' : 'Buy on Gumroad'}
        </a>
      </div>
    </header>
  );
}

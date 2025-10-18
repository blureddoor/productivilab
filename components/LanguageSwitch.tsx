'use client';
import { useEffect, useState } from 'react';
import type { Locale } from '@/content/i18n';

export default function LanguageSwitch({ onChange }: { onChange: (l: Locale) => void }) {
  const [lang, setLang] = useState<Locale>(() =>
    (typeof window !== 'undefined' && (localStorage.getItem('lang') as Locale)) || 'es'
  );
  useEffect(() => { onChange(lang); localStorage.setItem('lang', lang); }, [lang, onChange]);

  const btn = (active: boolean) =>
    `px-3 py-1 rounded-full border text-sm ${active ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`;

  return (
    <div className="flex gap-2">
      <button aria-pressed={lang==='es'} className={btn(lang==='es')} onClick={() => setLang('es')}>ES</button>
      <button aria-pressed={lang==='en'} className={btn(lang==='en')} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}
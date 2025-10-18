'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/content/i18n';
import { dictionaries } from '@/content/i18n';
import { linksFor } from '@/lib/links';
import LanguageSwitch from '@/components/LanguageSwitch';

function BrandHeader() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
      <div className="flex items-center gap-3">
        <Image src="/logo-productivilab.png" alt="ProductiviLab" width={480} height={112} className="h-8 w-auto md:h-12 lg:h-14" priority />
      </div>
    </div>
  );
}

function toEmbed(url?: string) {
  if (!url) return '';
  if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/');
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'www.youtube.com/embed/');
  return url;
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>(() => (typeof window !== 'undefined' && (localStorage.getItem('lang') as Locale)) || 'es');
  const t = useMemo(() => dictionaries[locale], [locale]);
  const L = useMemo(() => linksFor(locale), [locale]);

  const gumroadBtn = "rounded-xl border border-slate-800 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50";

  return (
    <main className="mx-auto max-w-6xl px-6 pb-16">
      <BrandHeader />

      {/* Hero */}
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">{t.heroH1}</h1>
          <p className="mt-4 text-lg text-slate-600">{t.heroP}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {L.demo && (
              <a href={L.demo} target="_blank" className="rounded-xl bg-[#FF5733] text-white px-6 py-3 font-semibold hover:brightness-95">
                {t.ctas.demo}
              </a>
            )}
            {L.etsy && (
              <a href={L.etsy} target="_blank" className="rounded-xl bg-slate-800 text-white px-6 py-3 font-semibold hover:brightness-95">
                {t.ctas.etsy}
              </a>
            )}
            {L.gumroad && (
              <a href={L.gumroad} target="_blank" className={gumroadBtn}>
                {t.ctas.gumroad}
              </a>
            )}
          </div>
        </div>

        <LanguageSwitch onChange={(l)=>setLocale(l)} />
      </div>

      {/* Video Tour por idioma */}
      {L.tourYT && (
        <section className="mt-12">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              className="h-full w-full"
              src={toEmbed(L.tourYT)}
              title="ProductiviLab Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Storytelling (pain -> solution -> outcome) */}
      <section className="mt-14 rounded-2xl border bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-800">{(t as any).story?.title}</h2>
        <p className="mt-2 text-slate-700">{(t as any).story?.lead}</p>
        <ul className="mt-4 space-y-2 text-slate-700">
          {((t as any).story?.bullets || []).map((line: string, i: number) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Qué puedes hacer */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.featuresTitle}</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
          {t.features.map((f, i) => <li key={i} className="leading-relaxed">• {f}</li>)}
        </ul>
      </section>

      {/* Cómo funciona */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.howItWorks}</h2>
        <ol className="mt-6 grid md:grid-cols-3 gap-4 text-slate-700">
          {t.how.map((step, i) => (
            <li key={i} className="rounded-xl border p-4 bg-white">{i+1}. {step}</li>
          ))}
        </ol>
      </section>

      {/* Qué incluye */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.insideTitle}</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
          {t.inside.map((f, i) => <li key={i}>• {f}</li>)}
        </ul>
      </section>

      {/* CTA final */}
      <section className="mt-16 rounded-2xl border p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-slate-800 font-semibold">
          {locale === 'es' ? 'Empieza a controlar tu rentabilidad hoy mismo' : 'Start tracking your real profitability today'}
        </div>
        <div className="flex gap-3">
          {L.gumroad && (
            <a href={L.gumroad} target="_blank" className="rounded-xl bg-[#FF5733] text-white px-6 py-3 font-semibold hover:brightness-95">
              {locale === 'es' ? 'Comprar ahora' : 'Buy now'}
            </a>
          )}
          {L.demo && (
            <a href={L.demo} target="_blank" className={gumroadBtn}>
              {locale === 'es' ? 'Probar demo' : 'Try demo'}
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
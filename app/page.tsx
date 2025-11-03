'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/content/i18n';
import { dictionaries } from '@/content/i18n';
import { linksFor } from '@/lib/links';
import LanguageSwitch from '@/components/LanguageSwitch';
import ProductsGrid from '@/components/ProductsGrid';

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

  const ctaPrimary = L.gumroad || L.etsy;
  const demoBtn = "rounded-xl border border-slate-800 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50";
  const buyBtn = "rounded-xl bg-[#FF5733] text-white px-6 py-3 font-semibold hover:brightness-95";
  const etsyBtn = "rounded-xl bg-slate-800 text-white px-6 py-3 font-semibold hover:brightness-110";

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* Header nav */}
      <div className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-productivilab.png" alt="ProductiviLab" width={240} height={60} className="h-8 w-auto md:h-10" priority />
            <span className="hidden md:inline text-sm text-slate-600">Herramientas para e‑commerce</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="/products" className="hover:text-slate-900">{t.nav.products}</a>
            <a href="#how-it-works" className="hover:text-slate-900">{t.nav.how}</a>
            <a href="#reviews" className="hover:text-slate-900">{t.nav.reviews}</a>
            <a href="#faq" className="hover:text-slate-900">{t.nav.faq}</a>
            <a href="mailto:soporte@productivilab.com" className="hover:text-slate-900">{t.nav.support}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitch onChange={(l)=>setLocale(l)} />
            {ctaPrimary && <a href={ctaPrimary} target="_blank" className={buyBtn}>{t.ctas.gumroad}</a>}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">{t.heroH1}</h1>
            <p className="mt-4 text-lg text-slate-600">{t.heroP}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {L.demo && <a href={L.demo} target="_blank" className={demoBtn}>{t.ctas.demo}</a>}
              {L.gumroad && <a href={L.gumroad} target="_blank" className={buyBtn}>{t.ctas.gumroad}</a>}
              {!L.gumroad && L.etsy && <a href={L.etsy} target="_blank" className={etsyBtn}>{t.ctas.etsy}</a>}
            </div>
            <div className="mt-3 text-sm text-slate-500 flex flex-wrap gap-3">
              <span>⭐⭐⭐⭐⭐</span>
              <span>+ Descargas</span>
              <span>Actualizaciones menores incluidas</span>
              <span>Soporte 24/48h</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-sm bg-white p-2">
            <Image src="/hero-dashboard.png" alt="ProductiviLab Dashboard" width={1280} height={720} className="rounded-xl w-full h-auto" />
          </div>
        </div>

        {/* Products strip */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-800">{t.productsTitle}</h2>
            <a href="/products" className="text-sm text-slate-600 hover:text-slate-800">{t.ctas.seeAll}</a>
          </div>
          <ProductsGrid />
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-16 rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-800">{t.howTitle}</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {(t.howSteps as any[]).map((s, i) => (
              <div key={i} className="rounded-xl border p-4">
                <div className="text-sm text-slate-500">{String(i+1).padStart(2,'0')}</div>
                <div className="text-lg font-semibold text-slate-800">{s.title}</div>
                <p className="text-slate-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          {L.tourYT && (
            <div className="mt-6">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
                <iframe className="h-full w-full" src={toEmbed(L.tourYT)} title="ProductiviLab Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          )}
        </section>

        {/* For whom */}
        <section className="mt-16 rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-800">{t.forWhomTitle}</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {(t.forWhom as string[]).map((line, i) => <li key={i}>• {line}</li>)}
          </ul>
        </section>

        {/* Outcomes */}
        <section className="mt-16 rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-800">{t.outcomesTitle}</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {(t.outcomes as string[]).map((line, i) => <li key={i}>• {line}</li>)}
          </ul>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800">{t.reviewsTitle}</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {(t.reviews as any[]).map((r, i) => (
              <figure key={i} className="rounded-2xl border bg-white p-6">
                <div className="text-slate-700">“{r.text}”</div>
                <figcaption className="mt-3 text-sm text-slate-500">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800">{t.faqTitle}</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {(t.faq as any[]).map((f, i) => (
              <details key={i} className="rounded-2xl border bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-800">{f.q}</summary>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 rounded-2xl border bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">{t.heroH1}</h2>
          <p className="mt-2 text-slate-600">{t.heroP}</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {L.demo && <a href={L.demo} target="_blank" className={demoBtn}>{t.ctas.demo}</a>}
            {L.gumroad && <a href={L.gumroad} target="_blank" className={buyBtn}>{t.ctas.buyNow}</a>}
            {!L.gumroad && L.etsy && <a href={L.etsy} target="_blank" className={etsyBtn}>{t.ctas.buyNow}</a>}
          </div>
        </section>

      </div>
    </main>
  );
}

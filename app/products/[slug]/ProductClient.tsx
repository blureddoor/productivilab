'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/content/i18n';
import { products } from '@/content/products';

function toEmbed(url?: string) {
  if (!url) return '';
  if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/');
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'www.youtube.com/embed/');
  return url;
}

type Step = { title: string; desc: string };
type Review = { name: string; text: string };
type QA = { q: string; a: string };

export default function ProductClient({ slug }: { slug: string }) {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && (localStorage.getItem('lang') as Locale)) || 'es';
    setLocale(stored || 'es');
  }, []);

  const p = useMemo(() => products.find((x) => x.slug === slug), [slug]);
  if (!p) return null;

  const name = p.name[locale];
  const tagline = p.tagline[locale];
  const priceFrom = p.priceFrom?.[locale];
  const features = (p.features || []).map((f) => f[locale]);
  const includes = (p.includes || []).map((i) => i[locale]);

  const gumroad = p.gumroad?.[locale];
  const etsy = p.etsy?.[locale];
  const demo = p.demo?.[locale];
  const video = p.video?.[locale];

  const ctaLabelPrimary = locale === 'es' ? 'Comprar ahora' : 'Buy now';
  const demoLabel = locale === 'es' ? 'Probar demo' : 'Try demo';
  const etsyLabel = locale === 'es' ? 'Etsy' : 'Etsy';

  const demoBtn = 'rounded-xl border border-slate-800 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50';
  const buyBtn = 'rounded-xl bg-[#FF5733] text-white px-6 py-3 font-semibold hover:brightness-95';
  const secondaryBtn = 'rounded-xl border border-slate-300 text-slate-700 px-6 py-3 font-medium hover:bg-white';

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3A4861]">{name}</h1>
      <p className="text-slate-700 mt-2">{tagline}</p>
      {priceFrom && <p className="text-slate-500 mt-1">{priceFrom}</p>}

      {video && (
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
          <iframe
            className="h-full w-full"
            src={toEmbed(video)}
            title={`${name} — video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {gumroad && (
          <a href={gumroad} target="_blank" className={buyBtn}>
            {ctaLabelPrimary}
          </a>
        )}
        {etsy && (
          <a href={etsy} target="_blank" className={secondaryBtn}>
            {etsyLabel}
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" className={demoBtn}>
            {demoLabel}
          </a>
        )}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {features.length > 0 && (
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800">{locale === 'es' ? 'Qué puedes hacer' : 'What you can do'}</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}
        {includes.length > 0 && (
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-800">{locale === 'es' ? 'Incluye' : 'Includes'}</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
              {includes.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

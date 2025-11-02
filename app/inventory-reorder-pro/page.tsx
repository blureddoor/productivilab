'use client';

import Image from 'next/image';
import { useState } from 'react';
import LanguageSwitch from '@/components/LanguageSwitch';

function toEmbed(url?: string) {
  if (!url) return '';
  if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/');
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'www.youtube.com/embed/');
  return url;
}

export default function InventoryReorderProPage() {
  const [locale, setLocale] = useState<'es' | 'en'>('es');

  const t = {
    title: 'Inventory & Reorder PRO (ES/EN)',
    subtitle:
      locale === 'es'
        ? 'Gestión de inventario inteligente y sencilla · Excel + Google Sheets'
        : 'Smart inventory management made simple · Excel + Google Sheets',
    bullets:
      locale === 'es'
        ? [
            'Seguimiento multi-almacén y transferencias',
            'Sugerencias automáticas de reorden (ROP & Lead Time)',
            'KPIs visuales y alertas',
            'Incluye Quick Start Guide (ES/EN) · Plug & Play',
          ]
        : [
            'Multi-warehouse tracking & transfers',
            'Automatic reorder suggestions (ROP & Lead Time)',
            'Visual KPIs & alerts',
            'Includes Quick Start Guide (ES/EN) · Plug & Play',
          ],
    ctaBuy: locale === 'es' ? 'Comprar en Gumroad' : 'Buy on Gumroad',
    ctaEtsy: locale === 'es' ? 'Ver en Etsy' : 'View on Etsy',
    ctaDemo: locale === 'es' ? 'Ver demo' : 'Watch demo',
    includeTitle: locale === 'es' ? 'Incluye' : 'Includes',
    includes:
      locale === 'es'
        ? ['Quick Start Guide (ES/EN)', 'Versión Google Sheets', 'Archivo Excel editable (sin macros)']
        : ['Quick Start Guide (ES/EN)', 'Google Sheets version', 'Editable Excel (no macros)'],
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Header + language switch */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image src="/logo-productivilab.png" alt="ProductiviLab" width={140} height={40} />
          <span className="font-extrabold text-slate-700">ProductiviLab</span>
        </div>
        <LanguageSwitch onChange={(lng) => setLocale(lng as 'es' | 'en')} />
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-8 items-center bg-white border border-slate-100 rounded-2xl p-6 shadow-md">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight">{t.title}</h1>
          <p className="text-slate-500 mt-2">{t.subtitle}</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            {t.bullets.map((b) => (
              <li key={b} className="flex gap-2 items-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#F35C2C]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="https://productivilab.gumroad.com/l/inventory-reorder-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:brightness-95"
            >
              {t.ctaBuy}
            </a>
            <a
              href="https://www.etsy.com/es/listing/4396840248/inventory-reorder-pro-esen-plantilla"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#F35C2C] text-white font-semibold hover:brightness-95"
            >
              {t.ctaEtsy}
            </a>
            <a
              href="https://youtu.be/T4-PUlrhZL0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-slate-200 bg-white font-semibold hover:bg-slate-50"
            >
              {t.ctaDemo}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow">
          <Image
            src="/mockup_1_v1.5.2.png"  // pon este PNG en /public
            alt="Inventory & Reorder PRO mockup"
            width={1200}
            height={800}
            className="rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Video */}
      <section className="mt-10">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
          <iframe
            className="h-full w-full"
            src={toEmbed('https://youtu.be/T4-PUlrhZL0')}
            title="Inventory & Reorder PRO – Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Includes */}
      <section className="mt-8 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-3">{t.includeTitle}</h2>
        <ul className="grid md:grid-cols-3 gap-3 text-slate-700">
          {t.includes.map((x) => (
            <li key={x} className="bg-white rounded-xl border border-slate-100 p-4 shadow">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 rounded-2xl bg-[#F35C2C] text-white p-6 flex items-center justify-between flex-wrap gap-3 shadow">
        <div className="font-extrabold text-xl">Download & Start Today</div>
        <a
          href="https://productivilab.gumroad.com/l/inventory-reorder-pro"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-white text-slate-800 font-semibold"
        >
          {t.ctaBuy}
        </a>
      </section>
    </main>
  );
}

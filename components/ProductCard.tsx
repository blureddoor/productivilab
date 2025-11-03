import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/content/i18n';
import type { Product } from '@/content/products';

export default function ProductCard({ p, locale }: { p: Product; locale: Locale }) {
  const name = p.name[locale];
  const tagline = p.tagline[locale];
  const price = p.priceFrom?.[locale];
  const gumroad = p.gumroad?.[locale];
  const etsy = p.etsy?.[locale];

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
      <Link href={`/products/${p.slug}`} className="block">
        <div className="aspect-video relative">
          <Image src={p.image} alt={name} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
        <p className="text-slate-600 mt-1">{tagline}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border px-2 py-1 text-slate-600">Excel + Google Sheets</span>
          <span className="rounded-full border px-2 py-1 text-slate-600">ES/EN</span>
          <span className="rounded-full border px-2 py-1 text-slate-600">EU-ready</span>
        </div>

        {price && <div className="mt-3 text-slate-700 font-medium">{price}</div>}

        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/products/${p.slug}`} className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-white">
            {locale === 'es' ? 'Más info' : 'More info'}
          </Link>
          {gumroad && (
            <a href={gumroad} target="_blank" className="rounded-xl bg-[#FF5733] text-white px-4 py-2 font-semibold hover:brightness-95">
              {locale === 'es' ? 'Comprar' : 'Buy'}
            </a>
          )}
          {!gumroad && etsy && (
            <a href={etsy} target="_blank" className="rounded-xl bg-slate-800 text-white px-4 py-2 font-semibold hover:brightness-110">
              {locale === 'es' ? 'Comprar' : 'Buy'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

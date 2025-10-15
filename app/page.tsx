export default function Page(){
  const ETSY=process.env.NEXT_PUBLIC_ETSY_URL||"#";
  const GUMROAD=process.env.NEXT_PUBLIC_GUMROAD_URL||"#";
  return(<main className="min-h-screen">
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand)]">
          Controla tu rentabilidad real en Excel y Google Sheets
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#374151]">
          Mide <strong>margen</strong>, <strong>ROAS</strong>, <strong>CPA</strong> y <strong>break‑even</strong> por canal y campaña.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#" className="rounded-xl bg-[var(--brand)] text-white px-6 py-3 font-semibold hover:brightness-95 text-center">
            Probar demo en Google Sheets
          </a>
          <div className="flex gap-3">
            <a href={ETSY} className="rounded-xl bg-[var(--accent)] text-white px-5 py-3 font-semibold hover:brightness-95">Comprar en Etsy</a>
            <a href={GUMROAD} className="rounded-xl border border-[var(--brand)] px-5 py-3 font-semibold hover:bg-white">Gumroad</a>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-[#6b7280]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1">ES/EN</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1">Excel + Google Sheets</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1">EU VAT ready</span>
        </div>
      </div>
      <div className="rounded-2xl bg-white shadow-xl border p-4">
        <img src="/hero-dashboard.png" alt="Dashboard" className="rounded-lg w-full h-auto" />
      </div>
    </section>
  </main>);
}
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
{/* Sección: Cómo funciona en 3 pasos */}
<section className="bg-white/60 border-t">
  <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-xl font-bold text-[var(--brand)]">1) Configura</h3>
      <p className="text-[#374151] mt-2">Moneda, IVA, comisiones de pasarela y fees por canal en <strong>SETTINGS</strong>.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-[var(--brand)]">2) Pega tus datos</h3>
      <p className="text-[#374151] mt-2">Pedidos en <strong>SALES_RAW</strong> y campañas en <strong>ADS</strong> (gasto, conversiones y ventas atribuidas).</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-[var(--brand)]">3) Decide</h3>
      <p className="text-[#374151] mt-2">Mira <strong>DASHBOARD</strong>: margen, ROAS, <strong>CPA vs BE</strong> y Top SKUs.</p>
    </div>
  </div>
</section>

{/* Sección: Qué incluye */}
<section className="max-w-6xl mx-auto px-4 py-14">
  <h2 className="text-3xl font-bold text-[var(--brand)]">Qué incluye</h2>
  <ul className="mt-6 grid md:grid-cols-2 gap-4 text-[#374151]">
    <li>✔️ Excel y Google Sheets (ES/EN)</li>
    <li>✔️ KPIs clave: Margen, ROAS, CPA y Break-even</li>
    <li>✔️ Escenarios de promo y alertas de margen</li>
    <li>✔️ Demo /copy + Guía rápida PDF</li>
  </ul>
</section>

{/* Sección: FAQ corta */}
<section className="bg-white/60 border-t">
  <div className="max-w-6xl mx-auto px-4 py-14">
    <h2 className="text-3xl font-bold text-[var(--brand)]">Preguntas frecuentes</h2>
    <div className="mt-6 grid md:grid-cols-2 gap-6 text-[#374151]">
      <div>
        <h3 className="font-semibold">¿Funciona con Excel y Google Sheets?</h3>
        <p>Sí, entregamos ambas versiones y están sincronizadas.</p>
      </div>
      <div>
        <h3 className="font-semibold">¿Cómo calculáis el CPA?</h3>
        <p>CPA clásico por conversión y CPA real por ventas atribuidas (económico). Verás ambos en <strong>ADS</strong> y el total en <strong>CALCULATIONS</strong>.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA final */}
<section className="max-w-6xl mx-auto px-4 py-14 text-center">
  <h2 className="text-3xl font-bold text-[var(--brand)]">Empieza hoy</h2>
  <p className="text-[#374151] mt-2">Toma decisiones con datos reales en menos de 10 minutos.</p>
  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
    <a href={process.env.NEXT_PUBLIC_DEMO_URL || "#"} className="rounded-xl bg-[var(--brand)] text-white px-6 py-3 font-semibold hover:brightness-95">Probar demo</a>
    <a href={process.env.NEXT_PUBLIC_GUMROAD_URL || "#"} className="rounded-xl border border-[var(--brand)] px-6 py-3 font-semibold hover:bg-white">Comprar</a>
  </div>
</section>

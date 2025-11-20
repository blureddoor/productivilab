// app/freebies/roas-calculator/page.tsx
// Landing del freebie: Calculadora CPA máximo & ROAS objetivo

export default function RoasCalculatorFreebiePage() {
  return (
    <main className="min-h-screen bg-[#F2EFE9] text-slate-900">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-16 lg:py-20">
        {/* Hero */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F35C2C]" />
            Freebie ProductiviLab · E-commerce & Ads
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#2F3B57] sm:text-4xl lg:text-5xl">
                Descubre tu CPA máximo & ROAS objetivo en menos de 10 minutos
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-800">
                Calculadora gratuita en Excel para saber cuánto puedes pagar por pedido y qué ROAS necesitas
                para no quemar dinero en anuncios. Sin fórmulas raras, solo tus números reales.
              </p>

              <ul className="mt-6 space-y-2 text-sm sm:text-base text-slate-800">
                <li>✅ Deja de fijarte solo en el ROAS que te enseñan Meta/Google sin contexto.</li>
                <li>✅ Ponle números claros a tu <strong>CPA máximo permitido</strong>.</li>
                <li>✅ Define tu <strong>ROAS mínimo</strong> para no perder dinero y tu <strong>ROAS objetivo</strong> realista.</li>
              </ul>

              {/* Bloque formulario principal */}
              <div className="mt-8 rounded-2xl bg-white/80 p-4 shadow-sm sm:p-5">
                <p className="text-sm font-medium text-[#2F3B57]">
                  Déjame tu email y te envío la calculadora + una mini guía para rellenarla.
                </p>

                {/* FORMULARIO MailerLite */}
                <form
                  className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
                  method="post"
                  action="https://assets.mailerlite.com/jsonp/1923447/forms/171442513324803171/subscribe"
                  target="_blank"
                >
                  <input
                    type="email"
                    name="fields[email]"
                    required
                    placeholder="tuemail@ejemplo.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#F35C2C] focus:ring-1 focus:ring-[#F35C2C]"
                  />

                  {/* Ocultos necesarios para MailerLite */}
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#F35C2C] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d54d22] sm:w-auto"
                  >
                    Quiero la calculadora gratis
                  </button>
                </form>

                <p className="mt-2 text-xs text-slate-600">
                  Recibirás un enlace de descarga inmediata + la mini guía en tu email. Puedes darte de baja cuando quieras.
                </p>
              </div>
            </div>

            {/* Columna lateral: tarjeta visual del Excel */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm rounded-3xl bg-white p-6 shadow-lg">
                <div className="mb-3 h-3 w-16 rounded-full bg-slate-200" />
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[11px] font-medium text-slate-500">
                    <span>Input</span>
                    <span>Ejemplo</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#F2EFE9] px-3 py-2">
                    <span>Pedidos (30 días)</span>
                    <span className="font-semibold text-slate-800">400</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#F2EFE9] px-3 py-2">
                    <span>Ventas sin IVA</span>
                    <span className="font-semibold text-slate-800">30.000 €</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#F2EFE9] px-3 py-2">
                    <span>Margen bruto estimado</span>
                    <span className="font-semibold text-slate-800">55%</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#F2EFE9] px-3 py-2">
                    <span>Margen neto objetivo</span>
                    <span className="font-semibold text-slate-800">15%</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs">
                  <p className="font-semibold text-[#2F3B57]">Resultados clave (ejemplo):</p>
                  <ul className="mt-1 space-y-1 text-[11px] text-slate-700">
                    <li>• CPA máx. permitido: <strong>17,50 €</strong></li>
                    <li>• ROAS mínimo para no perder dinero: <strong>2,2x</strong></li>
                    <li>• ROAS objetivo con margen 15%: <strong>2,8x</strong></li>
                  </ul>
                </div>
                <div className="mt-3 rounded-xl bg-[#2F3B57] px-3 py-2 text-[11px] text-white">
                  Deja de optimizar solo por ROAS “bonito” y empieza a optimizar por beneficio real.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Qué vas a conseguir */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#2F3B57] sm:text-2xl">
            ¿Qué vas a conseguir con esta calculadora?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-800">
            En menos de 10 minutos tendrás claro:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">
                1) Ticket medio & CPA máximo
              </h3>
              <p className="mt-2 text-sm text-slate-800">
                A partir de tus ventas reales, verás cuál es tu ticket medio y cuánto puedes pagar
                como máximo en publicidad por cada pedido sin destruir tu margen.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">
                2) ROAS mínimo & ROAS objetivo
              </h3>
              <p className="mt-2 text-sm text-slate-800">
                La hoja calcula tu ROAS mínimo para no perder dinero y el ROAS objetivo que deberías
                buscar si quieres mantener el margen neto que te has marcado.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Cómo funciona */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#2F3B57] sm:text-2xl">
            Cómo funciona (en 3 pasos)
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <div className="mb-2 text-xs font-semibold uppercase text-[#F35C2C]">Paso 1</div>
              <h3 className="text-sm font-semibold text-[#2F3B57]">Descarga y abre la hoja</h3>
              <p className="mt-2 text-sm text-slate-800">
                Solo necesitas las ventas sin IVA, nº de pedidos y una estimación de tu margen bruto
                y costes variables. Nada más.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <div className="mb-2 text-xs font-semibold uppercase text-[#F35C2C]">Paso 2</div>
              <h3 className="text-sm font-semibold text-[#2F3B57]">Rellena 4–5 campos</h3>
              <p className="mt-2 text-sm text-slate-800">
                Introduces tus datos en las celdas amarillas. La calculadora se encarga del resto:
                CPA máximo, ROAS mínimo y ROAS objetivo.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <div className="mb-2 text-xs font-semibold uppercase text-[#F35C2C]">Paso 3</div>
              <h3 className="text-sm font-semibold text-[#2F3B57]">Compara con tus campañas</h3>
              <p className="mt-2 text-sm text-slate-800">
                Miras el CPA y el ROAS que ves en Meta/Google y los comparas con tus números
                de referencia para saber si vas bien o vas en rojo.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Para quién es */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#2F3B57] sm:text-2xl">
            ¿Para quién es esta calculadora?
          </h2>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">Perfecta para ti si…</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                <li>• Tienes una tienda online pequeña o mediana (Shopify, WooCommerce, Amazon, Etsy…).</li>
                <li>• Inviertes en Meta Ads, Google Ads u otras plataformas de pago.</li>
                <li>• Quieres tomar decisiones con números, no solo con “sensaciones”.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/40 p-4 border border-dashed border-slate-300">
              <h3 className="text-sm font-semibold text-[#2F3B57]">No es para ti si…</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                <li>• Todavía no has hecho ninguna venta.</li>
                <li>• Buscas una “fórmula mágica” sin mirar márgenes ni estructura de costes.</li>
                <li>• No estás dispuesto a dedicar 10 minutos a entender los números de tu negocio.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección: Qué incluye */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#2F3B57] sm:text-2xl">
            Qué te llevas al dejar tu email
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">Plantilla en Excel</h3>
              <p className="mt-2 text-sm text-slate-800">
                Una hoja simple y directa para calcular CPA máximo, ROAS mínimo y ROAS objetivo
                con tus datos reales.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">Mini guía PDF (1–2 páginas)</h3>
              <p className="mt-2 text-sm text-slate-800">
                Explicación de dónde sacar cada dato (Shopify, Woo, gestoría…) y cómo interpretar
                los resultados sin ser controller financiero.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">Emails con ejemplos</h3>
              <p className="mt-2 text-sm text-slate-800">
                Un par de emails con casos reales y cómo usar estos números junto con el
                E-commerce Profit & Ads Planner.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#2F3B57] sm:text-2xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">
                ¿Necesito saber contabilidad o ser pro de Excel?
              </h3>
              <p className="mt-2 text-sm text-slate-800">
                No. Solo tienes que rellenar 4–5 números en celdas amarillas. Todo lo demás está
                calculado y explicado en lenguaje de negocio, no contable.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">
                ¿Funciona si vendo en Amazon, Etsy o marketplaces?
              </h3>
              <p className="mt-2 text-sm text-slate-800">
                Sí. Solo necesitas tus ventas sin IVA, tu margen estimado y una idea de tus
                comisiones/costes por pedido, sea Amazon, Etsy u otra plataforma.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2F3B57]">
                ¿Es totalmente gratis? ¿Hay letra pequeña?
              </h3>
              <p className="mt-2 text-sm text-slate-800">
                Es 100% gratis. Solo te pedimos el email para enviarte la plantilla, la mini guía
                y algunos ejemplos útiles. Si en algún momento no te interesa, puedes darte de baja
                con un clic.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mb-8 rounded-3xl bg-[#2F3B57] px-6 py-8 text-white sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                Empieza a decidir tus campañas con números, no con intuición
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-100">
                Descarga la calculadora gratuita y pon orden en tu CPA máximo y tu ROAS objetivo
                antes de seguir subiendo presupuesto.
              </p>
            </div>

            {/* Formulario duplicado en el CTA final */}
            <form
              className="mt-3 flex flex-col gap-2 sm:mt-0 sm:flex-row"
              method="post"
              action="https://assets.mailerlite.com/jsonp/1923447/forms/171442513324803171/subscribe"
              target="_blank"
            >
              <input
                type="email"
                name="fields[email]"
                required
                placeholder="tuemail@ejemplo.com"
                autoComplete="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-[#F35C2C] focus:ring-1 focus:ring-[#F35C2C] sm:w-64"
              />

              {/* Ocultos necesarios para MailerLite */}
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-[#F35C2C] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d54d22]"
              >
                Envíame la calculadora
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

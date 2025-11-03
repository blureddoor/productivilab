export type Locale = 'es' | 'en';

export const dictionaries = {
  es: {
    nav: { products: 'Productos', how: 'Cómo funciona', reviews: 'Reseñas', faq: 'FAQ', support: 'Soporte' },
    heroH1: 'Plantillas en Excel & Google Sheets para decidir con datos',
    heroP: 'Mide margen real, ROAS y stock crítico. Sin macros. EU VAT‑ready.',
    ctas: { demo: 'Probar demo', gumroad: 'Comprar en Gumroad', etsy: 'Ver en Etsy', buyNow: 'Comprar ahora', seeAll: 'Ver todos →' },
    badges: ['Excel + Google Sheets', 'ES/EN', 'EU‑ready'],
    productsTitle: 'Más herramientas',
    featuresTitle: 'Qué puedes hacer',
    howTitle: 'Cómo funciona',
    howSteps: [
      { title: 'Descarga', desc: 'Obtén la plantilla en Excel o abre la versión de Google Sheets.' },
      { title: 'Configura', desc: 'Define IVA, comisiones, canales y datos base en minutos.' },
      { title: 'Decide', desc: 'Mira los indicadores y toma decisiones claras: escalar, pausar o reponer.' }
    ],
    video35: 'Ver vídeo (35 s)',
    forWhomTitle: '¿Para quién es?',
    forWhom: [
      'Tiendas DTC: ROAS “bonito” vs rentabilidad real.',
      'Gestores de ads: CPA clásico vs CPA económico (ventas atribuidas).',
      'Operaciones/Compras: puntos de pedido y reposición sin roturas.'
    ],
    outcomesTitle: 'Resultados que puedes esperar',
    outcomes: [
      '+ Visibilidad de margen por canal/campaña',
      '– Errores en precios y promos',
      '– Roturas por falta de stock',
      '+ Velocidad para decidir (dashboard claro)'
    ],
    reviewsTitle: 'Reseñas',
    reviews: [
      { name: 'Ana — Tienda DTC', text: 'Por fin vemos el margen real con todos los costes. Evitamos promos que nos dejaban en pérdida.' },
      { name: 'Carlos — Paid Media', text: 'El CPA económico cambió nuestras decisiones de escalado. Mucho más preciso.' }
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: '¿Incluye IVA y tarifas?', a: 'Sí. Puedes configurar IVA, comisiones de pasarela y fees de marketplace en SETTINGS.' },
      { q: '¿Hay demo?', a: 'Sí. Abre la demo en Google Sheets (ES/EN) con enlace /copy.' },
      { q: '¿Necesita macros?', a: 'No. 100% editable sin macros.' },
      { q: '¿Actualizaciones?', a: 'Incluimos actualizaciones menores. Te avisamos por email.' },
      { q: '¿Idiomas?', a: 'ES y EN. Puedes cambiar de idioma en la web y en los documentos.' },
      { q: '¿Soporte?', a: 'Soporte por email 24/48 h: soporte@productivilab.com' }
    ]
  },
  en: {
    nav: { products: 'Products', how: 'How it works', reviews: 'Reviews', faq: 'FAQ', support: 'Support' },
    heroH1: 'Excel & Google Sheets templates to make data‑driven decisions',
    heroP: 'Track true margin, ROAS and critical stock. No macros. EU VAT‑ready.',
    ctas: { demo: 'Try demo', gumroad: 'Buy on Gumroad', etsy: 'See on Etsy', buyNow: 'Buy now', seeAll: 'See all →' },
    badges: ['Excel + Google Sheets', 'ES/EN', 'EU‑ready'],
    productsTitle: 'More tools',
    featuresTitle: 'What you can do',
    howTitle: 'How it works',
    howSteps: [
      { title: 'Download', desc: 'Get the Excel file or open the Google Sheets version.' },
      { title: 'Configure', desc: 'Set VAT, payment gateway fees, channels and base data in minutes.' },
      { title: 'Decide', desc: 'Read the metrics and make clear decisions: scale, pause or restock.' }
    ],
    video35: 'Watch video (35 s)',
    forWhomTitle: 'Who is it for?',
    forWhom: [
      'DTC stores: “nice” ROAS vs true profitability.',
      'Ad managers: classic vs economic CPA (attributed sales).',
      'Ops/Purchasing: reorder points and restock without stockouts.'
    ],
    outcomesTitle: 'Outcomes you can expect',
    outcomes: [
      '+ Visibility of margin by channel/campaign',
      '– Pricing/promo mistakes',
      '– Stockouts from lack of visibility',
      '+ Faster decisions (clear dashboard)'
    ],
    reviewsTitle: 'Reviews',
    reviews: [
      { name: 'Anna — DTC Store', text: 'Finally we see true margin with every cost. We stopped loss‑making promos.' },
      { name: 'Charles — Paid Media', text: 'Economic CPA changed our scaling decisions. Way more accurate.' }
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Do you include VAT and fees?', a: 'Yes. Set VAT, gateways and marketplace fees in SETTINGS.' },
      { q: 'Is there a demo?', a: 'Yes. Open the Google Sheets demo (ES/EN) via /copy link.' },
      { q: 'Any macros?', a: 'No. 100% editable, no macros.' },
      { q: 'Updates?', a: 'We include minor updates. We will notify you by email.' },
      { q: 'Languages?', a: 'ES and EN. You can switch language on the site and in the documents.' },
      { q: 'Support?', a: 'Support within 24/48h: soporte@productivilab.com' }
    ]
  }
} as const;

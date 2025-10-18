export type Locale = 'es' | 'en';

export const dictionaries = {
  es: {
    heroH1: 'Controla tu rentabilidad real en Excel y Google Sheets',
    heroP: 'Mide margen, ROAS, CPA clásico vs económico y punto de equilibrio por canal y campaña.',
    ctas: { demo: 'Probar demo en Google Sheets', etsy: 'Comprar en Etsy', gumroad: 'Ver en Gumroad' },
    featuresTitle: 'Qué puedes hacer',
    features: [
      'Calcular margen real, ROAS y CPA por canal y campaña',
      'Comparar CPA clásico vs CPA económico (ventas atribuidas)',
      'Alertas de productos en pérdida y Top SKUs',
      'Simular promos, envío gratis y cambios de fees',
      'EU VAT ready · ES/EN · 100% editable (sin macros)',
    ],
    howItWorks: 'Cómo funciona',
    how: [
      'Configura moneda, IVA y fees por canal en SETTINGS',
      'Pega ventas en SALES_RAW y campañas en ADS',
      'Analiza en CALCULATIONS y el DASHBOARD',
    ],
    insideTitle: 'Qué incluye el pack',
    inside: [
      'Excel (CLEAN + DEMO)',
      'Google Sheets (CLEAN + DEMO /copy)',
      'Guía rápida PDF (ES/EN)',
      '2 vídeos: Tour + Caso práctico (ES/EN)',
      'Actualizaciones menores incluidas',
    ],
    faqTitle: 'Preguntas frecuentes',
    story: {
    title: '¿Por qué este planner?',
    lead: 'Muchos e-commerce invierten en anuncios sin saber si realmente ganan dinero.',
    bullets: [
    '• Pain: ver ROAS “bonitos” pero márgenes erosionados por IVA, pasarela y fees.',
    '• Solución: calcula margen real, ROAS y CPA clásico vs económico (ventas atribuidas).',
    '• Resultado: decisiones claras — qué escalar, qué pausar y a qué precio ser rentable.'
  ]
},
  en: {
    heroH1: 'Track your real profitability in Excel and Google Sheets',
    heroP: 'Measure margin, ROAS, classic vs economic CPA, and break-even by channel and campaign.',
    ctas: { demo: 'Try demo in Google Sheets', etsy: 'Buy on Etsy', gumroad: 'View on Gumroad' },
    featuresTitle: 'What you can do',
    features: [
      'Calculate real margin, ROAS and CPA by channel and campaign',
      'Compare classic vs economic CPA (attributed sales)',
      'Loss alerts and Top SKUs',
      'Simulate promos, free shipping and fee changes',
      'EU VAT ready · ES/EN · 100% editable (no macros)',
    ],
    howItWorks: 'How it works',
    how: [
      'Set currency, VAT and channel fees in SETTINGS',
      'Paste sales into SALES_RAW and campaigns into ADS',
      'Analyze in CALCULATIONS and the DASHBOARD',
    ],
    insideTitle: 'What’s included',
    inside: [
      'Excel (CLEAN + DEMO)',
      'Google Sheets (CLEAN + DEMO /copy)',
      'Quick Guide PDF (EN/ES)',
      '2 videos: Tour + Case Study (EN/ES)',
      'Minor updates included',
    ],
    faqTitle: 'FAQ',
    story: {
  title: 'Why this planner?',
  lead: 'Many e-commerce stores spend on ads without knowing if they truly profit.',
  bullets: [
    '• Pain: “nice” ROAS while margins get eaten by VAT, gateways and platform fees.',
    '• Solution: compute real margin, ROAS, and classic vs economic CPA (attributed sales).',
    '• Outcome: clear decisions — what to scale, what to pause, and at which price you’re profitable.'
  ]
}
  },
} as const;

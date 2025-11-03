export type Localized = { es: string; en: string };

export type Product = {
  slug: string;
  name: Localized;
  tagline: Localized;
  image: string;        // ruta pública (en /public)
  priceFrom?: Localized;
  features?: Localized[];
  includes?: Localized[];
  gumroad?: { es?: string; en?: string };
  etsy?: { es?: string; en?: string };
  demo?: { es?: string; en?: string };
  video?: { es?: string; en?: string }; // YouTube URL
};

export const products: Product[] = [
  {
    slug: "ecommerce-profit-ads-planner",
    name: {
      es: "E-commerce Profit & Ads Planner",
      en: "E-commerce Profit & Ads Planner",
    },
    tagline: {
      es: "Controla margen, ROAS y CPA real por canal/campaña",
      en: "Track margin, ROAS & true CPA per channel/campaign",
    },
    image: "/hero-dashboard.png",
    priceFrom: { es: "Desde 29 €", en: "From €29" },
    features: [
      { es: "Margen real, ROAS y CPA por canal/campaña", en: "Real margin, ROAS & CPA per channel/campaign" },
      { es: "CPA clásico vs CPA económico (ventas atribuidas)", en: "Classic vs economic CPA (attributed sales)" },
      { es: "Alertas de productos en pérdida y Top SKUs", en: "Loss alerts and Top SKUs" },
      { es: "Simulador de promos, envío gratis y fees", en: "Simulator for promos, free shipping & fees" },
    ],
    includes: [
      { es: "Plantilla Excel + Google Sheets", en: "Excel + Google Sheets template" },
      { es: "Guía rápida PDF (ES/EN)", en: "Quick guide PDF (ES/EN)" },
      { es: "Actualizaciones menores incluidas", en: "Minor updates included" },
    ],
    // Usa las mismas variables públicas que ya usas en home:
    gumroad: { es: process.env.NEXT_PUBLIC_GUMROAD_ES, en: process.env.NEXT_PUBLIC_GUMROAD_EN },
    etsy:    { es: process.env.NEXT_PUBLIC_ETSY_ES,   en: process.env.NEXT_PUBLIC_ETSY_EN },
    demo:    { es: process.env.NEXT_PUBLIC_DEMO_ES,   en: process.env.NEXT_PUBLIC_DEMO_EN },
    video:   { es: process.env.NEXT_PUBLIC_YT_TOUR_ES, en: process.env.NEXT_PUBLIC_YT_TOUR_EN },
  },
  {
    slug: "inventory-reorder-pro",
    name: {
      es: "Inventory & Reorder Pro",
      en: "Inventory & Reorder Pro",
    },
    tagline: {
      es: "Control de inventario, ROP/EOQ y órdenes de compra en 1 clic",
      en: "Inventory control, ROP/EOQ & one-click purchase orders",
    },
    image: "/inventory/hero-1600x900.png",
    priceFrom: { es: "Desde 19 €", en: "From €19" },
    features: [
      { es: "Panel con stock total, SKUs en riesgo y sugeridos", en: "Dashboard: total stock, at-risk SKUs, suggested qty" },
      { es: "ROP + EOQ con Avg30d, lead time y MOQ", en: "ROP + EOQ using Avg30d, lead time and MOQ" },
      { es: "Multi-almacén y traspasos", en: "Multi-warehouse and transfers" },
      { es: "Órdenes de compra en 1 clic y exportar a PDF", en: "One-click purchase orders and export to PDF" },
      { es: "Bilingüe ES/EN, sin macros, EU/VAT-ready", en: "Bilingual ES/EN, no macros, EU/VAT-ready" },
    ],
    includes: [
      { es: "Plantilla Excel + Google Sheets", en: "Excel + Google Sheets template" },
      { es: "Notas ES/EN y guía rápida", en: "ES/EN notes and quick guide" },
      { es: "Actualizaciones menores incluidas", en: "Minor updates included" },
    ],
    gumroad: {
      es: "https://productivilab.gumroad.com/l/inventory-reorder-pro?utm_source=website&utm_medium=cta&utm_campaign=inventory_product_page&utm_content=hero_buy_gumroad_es",
      en: "https://productivilab.gumroad.com/l/inventory-reorder-pro?utm_source=website&utm_medium=cta&utm_campaign=inventory_product_page&utm_content=hero_buy_gumroad_en",
    },
    etsy: {
      es: "https://www.etsy.com/es/listing/4396840248/inventory-reorder-pro-esen-plantilla?utm_source=website&utm_medium=cta&utm_campaign=inventory_product_page&utm_content=hero_view_etsy_es",
      en: "https://www.etsy.com/es/listing/4396840248/inventory-reorder-pro-esen-plantilla?utm_source=website&utm_medium=cta&utm_campaign=inventory_product_page&utm_content=hero_view_etsy_en",
    },
    video: {
      es: "https://youtu.be/T4-PUlrhZL0",
      en: "https://youtu.be/T4-PUlrhZL0",
    },
  },
];

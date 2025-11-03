export type Localized = { es: string; en: string };
export type Product = {
  slug: string;
  name: Localized;
  tagline: Localized;
  image: string; // path under /public
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
      en: "E-commerce Profit & Ads Planner"
    },
    tagline: {
      es: "Controla margen, ROAS y CPA real por canal/campaña",
      en: "Track margin, ROAS & true CPA per channel/campaign"
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
      { es: "Actualizaciones menores incluidas", en: "Minor updates included" }
    ],
    gumroad: { es: process.env.NEXT_PUBLIC_GUMROAD_ES, en: process.env.NEXT_PUBLIC_GUMROAD_EN },
    etsy: { es: process.env.NEXT_PUBLIC_ETSY_ES, en: process.env.NEXT_PUBLIC_ETSY_EN },
    demo: { es: process.env.NEXT_PUBLIC_DEMO_ES, en: process.env.NEXT_PUBLIC_DEMO_EN },
    video: { es: process.env.NEXT_PUBLIC_YT_TOUR_ES, en: process.env.NEXT_PUBLIC_YT_TOUR_EN }
  },
  {
    slug: "inventory-reorder-pro",
    name: {
      es: "Inventory & Reorder Pro",
      en: "Inventory & Reorder Pro"
    },
    tagline: {
      es: "Control de inventario, punto de pedido y alertas de reposición",
      en: "Inventory control, reorder points & restock alerts"
    },
    image: "/og-image.png",
    priceFrom: { es: "Desde 19 €", en: "From €19" },
    features: [
      { es: "Stock en tiempo real y valor del inventario", en: "Real-time stock and inventory value" },
      { es: "Cálculo de punto de pedido (ROP) y EOQ", en: "Reorder point (ROP) & EOQ calculations" },
      { es: "Alertas de reposición y previsión simple", en: "Restock alerts & simple forecasting" }
    ],
    includes: [
      { es: "Plantilla Excel + Google Sheets", en: "Excel + Google Sheets template" },
      { es: "Guía rápida PDF (ES/EN)", en: "Quick guide PDF (ES/EN)" }
    ]
  }
];

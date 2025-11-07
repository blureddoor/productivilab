import type { Metadata } from "next";
import Script from "next/script";
import "./styles/globals.css";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const SITE = "https://productivilab.com";

export const metadata: Metadata = {
  title: "E-commerce Profit & Ads Planner — ProductiviLab",
  description:
    "Controla tu rentabilidad real en Excel y Google Sheets: ROAS, CPA y Break-even EU-ready.",
  openGraph: {
    title: "E-commerce Profit & Ads Planner — ProductiviLab",
    description: "ROAS, CPA y Break-even en un dashboard limpio. Excel + Google Sheets.",
    url: SITE,
    siteName: "ProductiviLab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ProductiviLab" }],
    locale: "es_ES",
    type: "website",
  },
  alternates: { canonical: SITE, languages: { "es-ES": SITE, "x-default": SITE } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "E-commerce Profit & Ads Planner",
    image: [`${SITE}/og-image.png`],
    description:
      "Plantilla profesional para medir margen, ROAS, CPA y break-even en Excel + Google Sheets.",
    brand: { "@type": "Brand", name: "ProductiviLab" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "29.00",
      availability: "https://schema.org/InStock",
      url: SITE,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Funciona con Excel y Google Sheets?",
        acceptedAnswer: { "@type": "Answer", text: "Sí, incluye versiones para ambos." },
      },
      {
        "@type": "Question",
        name: "¿Incluye IVA y tarifas?",
        acceptedAnswer: { "@type": "Answer", text: "Puedes configurarlos en SETTINGS. Todo es editable." },
      },
      {
        "@type": "Question",
        name: "¿Hay demo gratuita?",
        acceptedAnswer: { "@type": "Answer", text: "Sí, puedes abrir la demo en Google Sheets vía enlace /copy." },
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        {/* Consent por defecto */}
        <Script id="cm-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent','default',{
            ad_storage:'denied',
            analytics_storage:'denied',
            ad_user_data:'denied',
            ad_personalization:'denied'
          });
        `}</Script>

        {/* GA4 (si está configurado) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}</Script>
          </>
        )}

        {/* JSON-LD */}
        <Script type="application/ld+json" id="product-jsonld" strategy="afterInteractive">
          {JSON.stringify(productJsonLd)}
        </Script>
        <Script type="application/ld+json" id="faq-jsonld" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      </head>
      <body>
        {/* Header único del sitio con: Productos / Cómo funciona / Reseñas / FAQ / Soporte */}
        <SiteHeader />

        {children}

        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}

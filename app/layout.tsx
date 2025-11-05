// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./styles/globals.css";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // p.ej. GTM-W5MHWXL5
const SITE = "https://productivilab.com";

export const metadata: Metadata = {
  title: "E-commerce Profit & Ads Planner — ProductiviLab",
  description:
    "Controla tu rentabilidad real en Excel y Google Sheets: ROAS, CPA y Break-even EU-ready.",
  openGraph: {
    title: "E-commerce Profit & Ads Planner — ProductiviLab",
    description:
      "ROAS, CPA y Break-even en un dashboard limpio. Excel + Google Sheets.",
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
  } as const;

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
  } as const;

  return (
    <html lang="es">
      <head>
        {/* Consent Mode por defecto: ANTES de GTM */}
        <Script id="cm-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent','default',{
              'ad_storage':'denied',
              'analytics_storage':'denied',
              'ad_user_data':'denied',
              'ad_personalization':'denied'
            });
          `}
        </Script>

        {/* Debug opcional: confirma que el ID llega en build */}
        <Script id="plab-gtm-debug" strategy="beforeInteractive">
          {`console.debug('[PLAB] NEXT_PUBLIC_GTM_ID:', '${GTM_ID ?? 'MISSING'}');`}
        </Script>

        {/* Google Tag Manager (script en <head>) */}
        {GTM_ID && (
          <Script id="gtm-init" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
        {/* End GTM */}

        {/* JSON-LD */}
        <Script type="application/ld+json" id="product-jsonld" strategy="afterInteractive">
          {JSON.stringify(productJsonLd)}
        </Script>
        <Script type="application/ld+json" id="faq-jsonld" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager (noscript) — justo tras <body> */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* End GTM noscript */}

        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}

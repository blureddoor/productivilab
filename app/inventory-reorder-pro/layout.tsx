import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory & Reorder PRO (ES/EN) | ProductiviLab',
  description:
    'Controla tu inventario, automatiza reorden (ROP) y gestiona múltiples almacenes con KPIs visuales. Incluye guía rápida ES/EN. Compatible con Excel y Google Sheets.',
  openGraph: {
    title: 'Inventory & Reorder PRO | ProductiviLab',
    description:
      'Stock control, reorder automation, multi-warehouse tracking, and KPIs dashboard. Excel + Google Sheets template.',
    url: 'https://productivilab.com/inventory-reorder-pro',
    siteName: 'ProductiviLab',
    images: [
      {
        url: '/ProductiviLab_Portada_v1.2_vertical.png',
        width: 1200,
        height: 630,
        alt: 'Inventory & Reorder PRO – ProductiviLab Template',
      },
    ],
    locale: 'es_ES',
    type: 'product',
  },
  alternates: {
    canonical: 'https://productivilab.com/inventory-reorder-pro',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

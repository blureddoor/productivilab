import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory & Reorder PRO (ES/EN) | ProductiviLab',
  description:
    'Control de stock, reorden automático (ROP), gestión multi-almacén y KPIs visuales. Incluye guía rápida ES/EN. Para Excel y Google Sheets.',
  openGraph: {
    title: 'Inventory & Reorder PRO | ProductiviLab',
    description:
      'Stock control, reorder automation, multi-warehouse tracking, and KPIs. Excel + Google Sheets template.',
    images: ['/ProductiviLab_Portada_v1.2_vertical.png'],
  },
  alternates: {
    canonical: 'https://productivilab.com/inventory-reorder-pro',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import ProductsGrid from '@/components/ProductsGrid';

export const metadata = {
  title: 'Productos — ProductiviLab',
  description: 'Plantillas y herramientas para e-commerce — ProductiviLab'
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#3A4861] mb-2">Productos</h1>
        <p className="text-slate-700 mb-6">Plantillas prácticas en Excel y Google Sheets para rentabilidad, inventario y operaciones.</p>
        <ProductsGrid />
      </div>
    </main>
  );
}

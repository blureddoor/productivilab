# ProductiviLab Landing

Landing hecha con Next.js 14 (App Router), TailwindCSS y TypeScript.

## Requisitos
- Node.js 20 LTS (recomendado) o superior
- PNPM/NPM/Yarn (cualquiera)

## Configuración
1. Copia `.env.example` a `.env.local` y rellena los valores:
   ```bash
   cp .env.example .env.local
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta en local:
   ```bash
   npm run dev
   ```

## Estructura
- `app/` — Rutas (App Router) y estilos globales.
- `components/` — Componentes UI (LanguageSwitch, Footer, CookieBanner, etc.).
- `content/` — Diccionarios i18n y productos.
- `lib/` — Utilidades (links, consentimiento).
- `public/` — Imágenes, favicon, robots, sitemap.

## Multilenguaje
El switch ES/EN se mantiene a nivel de cliente con `localStorage`. Por SEO, el `html[lang]` es `es`. En una futura iteración se puede migrar a rutas `/en` para i18n real.

## Añadir nuevos productos
1. Edita `content/products.ts` y añade tu producto.
2. Las rutas de producto están en `/products` (listado) y `/products/[slug]` (detalle).

## Scripts
- `npm run dev` — desarrollo
- `npm run build` — build producción
- `npm run start` — server producción

## Despliegue
Validado para Vercel. Asegúrate de definir todas las variables de entorno públicas en el dashboard de Vercel.

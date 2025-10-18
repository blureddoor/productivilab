# ProductiviLab – Overlay ES/EN para Next.js

Archivos para integrar bilingüe ES/EN, CTAs dinámicos y logo en header (no sticky).

## Contenido
- app/page.tsx
- components/LanguageSwitch.tsx
- content/i18n.ts
- lib/links.ts
- public/logo-productivilab.png
- README_MERGE.txt

## Variables (Vercel → Settings → Environment Variables)
NEXT_PUBLIC_GUMROAD_ES=https://productivilab.gumroad.com/l/ecommerce-profit-ads-planner-es
NEXT_PUBLIC_GUMROAD_EN=https://productivilab.gumroad.com/l/ecommerce-profit-ads-planner-en
NEXT_PUBLIC_ETSY_ES=https://www.etsy.com/es/listing/4387683351/e-commerce-profit-ads-planner-esen-excel
NEXT_PUBLIC_ETSY_EN=https://www.etsy.com/es/listing/4387683351/e-commerce-profit-ads-planner-esen-excel
NEXT_PUBLIC_DEMO_ES=https://docs.google.com/spreadsheets/d/1vyZhekA-jO7YQ11BNakQoX02A98jddHY/copy
NEXT_PUBLIC_DEMO_EN=https://docs.google.com/spreadsheets/d/1vyZhekA-jO7YQ11BNakQoX02A98jddHY/copy
NEXT_PUBLIC_YT_TOUR_ES=https://youtu.be/ev3hxuyRWKE
NEXT_PUBLIC_YT_TOUR_EN=https://youtu.be/O3k_UjlOzHA

## Pasos
1) Copia/mueve estas carpetas/archivos a tu repo (respetando rutas).
2) Confirma que Tailwind ya está configurado (no tocamos config).
3) Sube el logo a /public si no existe (incluido aquí).
4) Crea/actualiza las variables de entorno en Vercel.
5) `git add . && git commit -m "Overlay ES/EN + CTAs + logo header"`
6) `git push` → Vercel hará el redeploy.

Notas:
- No modifica páginas legales ni banner de cookies.
- Idioma por defecto: ES (persistente en localStorage).

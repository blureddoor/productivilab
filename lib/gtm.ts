// lib/gtm.ts
type CtaType = 'gumroad' | 'etsy' | 'demo' | 'video';
type Lang = 'es' | 'en';

function getLocaleSafe(): Lang {
  try {
    if (typeof window !== 'undefined') {
      const stored = (localStorage.getItem('lang') as Lang) || 'es';
      return stored === 'en' ? 'en' : 'es';
    }
  } catch {}
  return 'es';
}

/** Empuja un evento al dataLayer de GTM (seguro para SSR). */
export function pushDL(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event, ...params });
}

/** Traquea clics de CTA con un esquema estándar. */
export function trackCta(params: {
  cta_location: string;            // ej: 'home_hero' | 'products_grid' | 'product_page_hero' | 'footer'
  cta_type: CtaType;               // 'gumroad' | 'etsy' | 'demo' | 'video'
  product_slug?: string;           // ej: 'inventory-reorder-pro'
  locale?: Lang;                   // opcional, si no se pasa, lo resolvemos
}) {
  const locale = params.locale || getLocaleSafe();
  pushDL('cta_click', {
    cta_location: params.cta_location,
    cta_type: params.cta_type,
    product_slug: params.product_slug || undefined,
    locale,
  });
}

/**
 * Si NO abres en nueva pestaña:
 * llamas a trackCta, previenes navegación y navegas con un pequeño delay
 * para no perder el hit al salir de la página.
 */
export function navigateAfterTrack(href: string, delayMs = 120) {
  if (typeof window === 'undefined') return;
  setTimeout(() => {
    window.location.href = href;
  }, delayMs);
}

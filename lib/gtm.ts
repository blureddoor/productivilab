'use client';

// Simple helper para empujar al dataLayer
export function pushDL(event: string, params: Record<string, any> = {}) {
  try {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({ event, ...params });
  } catch {}
}

// ---- CTA tracking (ya lo estabas usando) ----
export function trackCta(params: {
  cta_type: 'gumroad' | 'etsy' | 'demo' | 'video';
  cta_location: string;
  product_slug?: string;
  locale?: string;
  href?: string;
}) {
  pushDL('cta_click', params);
}

// Si alguna vez necesitas retardar navegación en la misma pestaña
export function navigateAfterTrack(href: string, delayMs = 120) {
  try {
    setTimeout(() => {
      window.location.assign(href);
    }, delayMs);
  } catch {
    window.location.href = href;
  }
}

// ---- NUEVO: scroll depth helper (opcional) ----
export function trackScrollDepth(percent: number, extras: { product_slug?: string; locale?: string; page_path?: string } = {}) {
  pushDL('scroll_depth', { scroll_percent: percent, ...extras });
}

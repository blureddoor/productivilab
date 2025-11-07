'use client';

import { useEffect, useRef } from 'react';
import { pushDL } from '@/lib/gtm';

type Opts = {
  thresholds?: number[];         // % a medir
  productSlug?: string | null;
  locale?: string | null;
};

export default function useScrollDepth({ thresholds = [25, 50, 75], productSlug, locale }: Opts) {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const key = `sd-${window.location.pathname}`;
    // Recupera umbrales ya enviados en esta sesión
    try {
      const saved = sessionStorage.getItem(key);
      if (saved) firedRef.current = new Set(JSON.parse(saved));
    } catch {}

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
      const viewH = doc.clientHeight || window.innerHeight || 0;
      const fullH = doc.scrollHeight || 0;
      const scrollable = Math.max(fullH - viewH, 1);
      const pct = Math.floor((scrollTop / scrollable) * 100);

      for (const t of thresholds) {
        if (pct >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          // Persistimos para no duplicar en la misma sesión
          try { sessionStorage.setItem(key, JSON.stringify([...firedRef.current])); } catch {}

          pushDL('scroll_depth', {
            scroll_percent: t,
            product_slug: productSlug || undefined,
            locale: locale || undefined,
            page_path: window.location.pathname,
          });
        }
      }
    };

    // Primer cálculo por si la página carga desplazada
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [productSlug, locale, thresholds]);
}

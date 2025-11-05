// components/CookieBanner.tsx
'use client';

import { useEffect, useState } from 'react';

const LS_KEY = 'plab_cookie_consent'; // 'granted' | 'denied'

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag || ((...args: any[]) => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(args.length === 1 ? args[0] : args);
  });

  gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  try { localStorage.setItem(LS_KEY, granted ? 'granted' : 'denied'); } catch {}
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(LS_KEY);
      if (!v) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-4xl m-3 rounded-xl border bg-white shadow-lg p-4 flex flex-col md:flex-row md:items-center gap-3">
        <p className="text-sm text-slate-700 flex-1">
          Usamos cookies para analítica anónima (GA4). Puedes aceptar o rechazar. Siempre puedes cambiar tu elección desde el navegador.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => { updateConsent(false); setShow(false); }}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Rechazar
          </button>
          <button
            onClick={() => { updateConsent(true); setShow(false); }}
            className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:brightness-110"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

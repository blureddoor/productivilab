'use client';

import { useEffect, useState } from 'react';

type ConsentStatus = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer?: any[];                         // puede no existir aún
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('plab_consent');
    if (!saved) setVisible(true);
  }, []);

  const updateConsent = (status: ConsentStatus) => {
    if (typeof window === 'undefined') return;

    // 1) Asegura dataLayer antes de usarla
    window.dataLayer = window.dataLayer || [];

    // 2) Asegura gtag que empuje a dataLayer (forma estándar)
    window.gtag =
      window.gtag ||
      function () {
        // 'arguments' existe dentro de una function normal (no arrow)
        // y lo empujamos tras asegurar dataLayer.
        (window.dataLayer as any[]).push(arguments as any);
      };

    // 3) Actualiza consentimiento (Consent Mode v2)
    window.gtag('consent', 'update', {
      ad_storage: status,
      analytics_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });

    // 4) Guarda preferencia y cierra
    localStorage.setItem('plab_consent', status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 max-w-2xl rounded-xl border bg-white p-4 shadow-lg">
      <p className="text-sm text-slate-700">
        Usamos cookies analíticas para mejorar la experiencia. Puedes aceptarlas o rechazarlas.
      </p>
      <div className="mt-3 flex gap-3">
        <button
          className="rounded-lg bg-[#FF5733] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
          onClick={() => updateConsent('granted')}
        >
          Aceptar
        </button>
        <button
          className="rounded-lg border px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
          onClick={() => updateConsent('denied')}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}

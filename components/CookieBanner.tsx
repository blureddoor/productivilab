'use client';

import { useEffect, useState } from 'react';

type Consent = 'granted' | 'denied';

function updateConsent(status: Consent) {
  try {
    // GTM/GA4 Consent Mode v2
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('consent', 'update', {
      ad_storage: status,
      analytics_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
    // Evento informativo (útil en GTM para auditoría)
    // @ts-ignore
    window.dataLayer.push({ event: 'consent_update', consent_status: status });
  } catch { /* no-op */ }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('plab-consent') as Consent | null;
      if (!saved) setVisible(true);
      else updateConsent(saved);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem('plab-consent', 'granted'); } catch {}
    updateConsent('granted');
    setVisible(false);
  };

  const reject = () => {
    try { localStorage.setItem('plab-consent', 'denied'); } catch {}
    updateConsent('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl rounded-t-2xl border border-slate-200 bg-white p-4 shadow-lg">
        <p className="text-sm text-slate-700">
          Usamos cookies analíticas para mejorar el producto. Puedes aceptarlas o continuar solo con las esenciales.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={accept}
            className="rounded-lg bg-[#FF5733] px-4 py-2 text-white font-semibold hover:brightness-95"
          >
            Aceptar
          </button>
          <button
            onClick={reject}
            className="rounded-lg border px-4 py-2 font-medium text-slate-800 hover:bg-slate-50"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}

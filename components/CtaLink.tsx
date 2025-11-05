// components/CtaLink.tsx
'use client';

import React from 'react';
import { trackCta, navigateAfterTrack } from '@/lib/gtm';

type CtaType = 'gumroad' | 'etsy' | 'demo' | 'video';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  ctaType: CtaType;
  ctaLocation: string;
  productSlug?: string;
  locale?: 'es' | 'en';
  openInNewTab?: boolean; // por defecto true
  className?: string;
  children: React.ReactNode;
};

export default function CtaLink({
  href,
  ctaType,
  ctaLocation,
  productSlug,
  locale,
  openInNewTab = true,
  className,
  children,
  ...rest
}: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackCta({ cta_location: ctaLocation, cta_type: ctaType, product_slug: productSlug, locale });

    // Si NO abrimos en nueva pestaña, prevenimos navegación y navegamos tras un pequeño delay
    if (!openInNewTab) {
      e.preventDefault();
      navigateAfterTrack(href);
    }
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}

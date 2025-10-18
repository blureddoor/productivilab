import type { Locale } from '@/content/i18n';

export const linksFor = (locale: Locale) => ({
  gumroad: locale === 'es' ? process.env.NEXT_PUBLIC_GUMROAD_ES : process.env.NEXT_PUBLIC_GUMROAD_EN,
  etsy: locale === 'es' ? process.env.NEXT_PUBLIC_ETSY_ES : process.env.NEXT_PUBLIC_ETSY_EN,
  demo: locale === 'es' ? process.env.NEXT_PUBLIC_DEMO_ES : process.env.NEXT_PUBLIC_DEMO_EN,
  tourYT: locale === 'es' ? process.env.NEXT_PUBLIC_YT_TOUR_ES : process.env.NEXT_PUBLIC_YT_TOUR_EN,
});
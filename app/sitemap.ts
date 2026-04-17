import type { MetadataRoute } from 'next';

const BASE_URL = 'https://elevensixty.ca';

const STATIC_PATHS = [
  '/',
  '/lunch-menu/',
  '/dinner-menus/',
  '/desserts/',
  '/kids-menu/',
  '/drinks-menu/',
  '/daily-features/',
  '/birthday-club/',
  '/group-events/',
  '/contact-us/'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_PATHS.map((p) => ({
    url: `${BASE_URL}${p}`,
    lastModified: now,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : 0.7
  }));
}

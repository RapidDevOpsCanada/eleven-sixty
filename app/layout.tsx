import type { Metadata } from 'next';
import './globals.css';
import RestaurantJsonLd from '@/components/RestaurantJsonLd';

const SITE_URL = 'https://elevensixty.ca';
const TITLE = 'Eleven Sixty Bar & Grill — London & St Thomas';
const DESCRIPTION =
  'Premier bar & grill in London and St Thomas, Ontario. Known for sizzling steaks and fall-off-the-bone ribs. Open daily from 11:30am.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s'
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Eleven Sixty Bar & Grill',
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION
  },
  alternates: { canonical: SITE_URL }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300..800;1,300..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased">
        <RestaurantJsonLd />
        {children}
      </body>
    </html>
  );
}

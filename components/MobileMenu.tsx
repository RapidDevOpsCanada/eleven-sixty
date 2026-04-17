'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const SECTIONS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Menus',
    links: [
      { label: 'Lunch', href: '/lunch-menu/' },
      { label: 'Dinner', href: '/dinner-menus/' },
      { label: 'Desserts', href: '/desserts/' },
      { label: 'Kids', href: '/kids-menu/' },
      { label: 'Drinks', href: '/drinks-menu/' },
      { label: 'Daily Features', href: '/daily-features/' }
    ]
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Birthday Club', href: '/birthday-club/' },
      { label: 'Group Events', href: '/group-events/' },
      { label: 'Contact Us', href: '/contact-us/' },
      { label: 'Locations', href: '/#locations' }
    ]
  },
  {
    heading: 'More',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Field Notes', href: '/articles/' }
    ]
  }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="text-white/80 material-symbols-outlined text-2xl"
      >
        menu
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-xl overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
            <div className="flex items-center justify-between mb-16">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-xl font-headline font-bold tracking-tight text-white flex items-center gap-2"
              >
                <span className="w-8 h-8 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-xs font-black">
                  11
                </span>
                ELEVEN <span className="text-gold-luxe">SIXTY</span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-white/80 material-symbols-outlined text-3xl hover:text-gold-luxe transition-colors"
              >
                close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
              {SECTIONS.map((s) => (
                <div key={s.heading} className="flex flex-col gap-6">
                  <h3 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    {s.heading}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-headline text-2xl md:text-3xl font-bold text-white hover:text-gold-luxe transition-colors tracking-tight"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="tel:+15196812669"
                className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center"
              >
                Call London · 519-681-2669
              </a>
              <a
                href="tel:+15196318282"
                className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center"
              >
                Call St Thomas · 519-631-8282
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

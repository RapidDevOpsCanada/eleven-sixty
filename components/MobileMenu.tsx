'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';
import OpenStatus from './OpenStatus';

function normalise(path: string): string {
  if (!path) return '/';
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
}

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
  }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = normalise(usePathname() ?? '/');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const overlay = open ? (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        src="/images/interior-bar.jpg"
        className="fixed inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <div className="fixed inset-0 bg-navy-deep/90 backdrop-blur-xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xl font-headline font-bold tracking-tight text-white flex items-center gap-2"
          >
            <span className="px-2 py-1 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-[11px] font-black tracking-tight">
              1160
            </span>
            <span>ELEVEN<span className="text-gold-luxe">SIXTY</span></span>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white/80 material-symbols-outlined text-3xl hover:text-gold-luxe transition-colors"
          >
            close
          </button>
        </div>

        <div className="mb-12">
          <OpenStatus />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {SECTIONS.map((s) => (
            <div key={s.heading} className="flex flex-col gap-6">
              <h3 className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold">
                {s.heading}
              </h3>
              <div className="flex flex-col gap-4">
                {s.links.map((l) => {
                  const target = normalise(l.href.split('#')[0] ?? l.href);
                  const isActive = target !== '/' && pathname.startsWith(target);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`relative pl-4 font-headline text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? 'text-gold-luxe'
                          : 'text-white hover:text-gold-luxe'
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-gold-luxe"
                        />
                      )}
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col gap-6">
          <div>
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold mb-4 block">
              Reserve on OpenTable
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href={OPENTABLE_LONDON}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
              >
                Reserve London
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
              <a
                href={OPENTABLE_ST_THOMAS}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
              >
                Reserve St Thomas
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          </div>
          <div>
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold mb-4 block">
              Or call directly
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="tel:+15196812669"
                className="bg-transparent border border-white/10 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center"
              >
                London · 519-681-2669
              </a>
              <a
                href="tel:+15196318282"
                className="bg-transparent border border-white/10 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center"
              >
                St Thomas · 519-631-8282
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="text-white/80 material-symbols-outlined text-2xl pointer-events-auto cursor-pointer"
      >
        menu
      </button>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}

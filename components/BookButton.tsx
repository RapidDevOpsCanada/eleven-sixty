'use client';

import { useEffect, useRef, useState } from 'react';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';

export default function BookButton() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-base">event</span>
        Book
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-3 w-72 bg-navy-deep border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-white/5">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Reserve on OpenTable
            </span>
          </div>
          <a
            href={OPENTABLE_LONDON}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group block px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-headline text-lg font-bold text-white">London</div>
                <div className="font-body text-xs text-white/60">1160 Wellington Rd</div>
              </div>
              <span className="material-symbols-outlined text-gold-luxe text-base group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </div>
          </a>
          <a
            href={OPENTABLE_ST_THOMAS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group block px-5 py-4 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-headline text-lg font-bold text-white">St Thomas</div>
                <div className="font-body text-xs text-white/60">1093 Talbot St</div>
              </div>
              <span className="material-symbols-outlined text-gold-luxe text-base group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

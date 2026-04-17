'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop({ threshold = 600 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-5 bottom-24 md:bottom-8 z-40 w-11 h-11 rounded-full bg-gold-luxe text-navy-deep shadow-xl shadow-black/40 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-xl">arrow_upward</span>
    </button>
  );
}

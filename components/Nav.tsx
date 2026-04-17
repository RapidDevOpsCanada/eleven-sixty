import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pointer-events-auto bg-navy-deep/90 backdrop-blur-lg rounded-full pl-6 pr-3 py-3 border border-white/10 shadow-2xl shadow-black/40">
          <Link
            href="/"
            className="text-xl font-headline font-bold tracking-tight text-white flex items-center gap-2.5"
          >
            <span className="w-9 h-9 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-xs font-black">
              11
            </span>
            ELEVEN <span className="text-gold-luxe">SIXTY</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/dinner-menus/"
              className="font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/daily-features/"
              className="font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
            >
              Features
            </Link>
            <Link
              href="/group-events/"
              className="font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
            >
              Events
            </Link>
            <Link
              href="/birthday-club/"
              className="font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
            >
              Birthday Club
            </Link>
            <Link
              href="/contact-us/"
              className="font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+15196812669"
              className="hidden md:inline-flex bg-gold-luxe hover:bg-white text-navy-deep font-bold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full transition-all items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Book
            </a>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pointer-events-auto bg-navy-deep/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/5">
          <Link
            href="/"
            className="text-xl font-headline font-bold tracking-tight text-white flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-xs font-black">
              11
            </span>
            ELEVEN <span className="text-gold-luxe">SIXTY</span>
          </Link>
          <div className="hidden md:flex gap-7 items-center">
            <Link
              href="/dinner-menus/"
              className="font-label text-[11px] font-semibold uppercase tracking-wider text-white hover:text-gold-luxe transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/daily-features/"
              className="font-label text-[11px] font-semibold uppercase tracking-wider text-white/60 hover:text-gold-luxe transition-colors"
            >
              Features
            </Link>
            <Link
              href="/group-events/"
              className="font-label text-[11px] font-semibold uppercase tracking-wider text-white/60 hover:text-gold-luxe transition-colors"
            >
              Events
            </Link>
            <Link
              href="/birthday-club/"
              className="font-label text-[11px] font-semibold uppercase tracking-wider text-white/60 hover:text-gold-luxe transition-colors"
            >
              Birthday Club
            </Link>
            <Link
              href="/contact-us/"
              className="font-label text-[11px] font-semibold uppercase tracking-wider text-white/60 hover:text-gold-luxe transition-colors"
            >
              Contact
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

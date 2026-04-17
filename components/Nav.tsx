import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Nav({ showCommandBar = true }: { showCommandBar?: boolean }) {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
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

        {showCommandBar && (
          <div className="pointer-events-auto command-bar-blur rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto w-full shadow-2xl">
            <div className="flex-1 w-full grid grid-cols-2 gap-2 md:flex md:items-center">
              <Link
                href="/dinner-menus/"
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer group flex-1"
              >
                <span className="material-symbols-outlined text-gold-luxe">restaurant_menu</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-tighter text-white/40 font-bold">
                    Discover
                  </span>
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    View the Menu
                  </span>
                </div>
              </Link>
              <Link
                href="/group-events/"
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer group flex-1"
              >
                <span className="material-symbols-outlined text-gold-luxe">calendar_today</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-tighter text-white/40 font-bold">
                    Private Room
                  </span>
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    Book an Event
                  </span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10 mx-2" />
            <div className="w-full md:w-auto flex items-center gap-2">
              <a
                href="tel:+15196812669"
                className="flex-1 md:w-48 bg-navy-deep/50 rounded-full px-4 py-2 flex items-center justify-between border border-white/10 hover:border-gold-luxe/50 transition-colors"
              >
                <span className="text-xs text-white/70 font-medium">Call London</span>
                <span className="material-symbols-outlined text-sm text-gold-luxe">call</span>
              </a>
              <a
                href="tel:+15196812669"
                className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all shadow-lg shadow-gold-luxe/10"
              >
                Quick Book
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

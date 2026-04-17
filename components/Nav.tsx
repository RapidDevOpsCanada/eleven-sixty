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
          <div className="pointer-events-auto command-bar-blur rounded-full p-2 flex items-center gap-1 md:gap-2 max-w-2xl mx-auto w-full shadow-2xl">
            <Link
              href="/dinner-menus/"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 hover:bg-white/5 rounded-full transition-colors group flex-1"
            >
              <span className="material-symbols-outlined text-amber text-xl">restaurant_menu</span>
              <span className="font-label text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
                Menu
              </span>
            </Link>
            <div className="w-px h-8 bg-white/10" />
            <a
              href="tel:+15196812669"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 hover:bg-white/5 rounded-full transition-colors group flex-1"
            >
              <span className="material-symbols-outlined text-amber text-xl">call</span>
              <span className="font-label text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
                Book
              </span>
            </a>
            <div className="w-px h-8 bg-white/10" />
            <Link
              href="/#locations"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 hover:bg-white/5 rounded-full transition-colors group flex-1"
            >
              <span className="material-symbols-outlined text-amber text-xl">near_me</span>
              <span className="font-label text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
                Directions
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

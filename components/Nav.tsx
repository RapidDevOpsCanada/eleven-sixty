import Link from 'next/link';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';
import OpenStatus from './OpenStatus';
import BookButton from './BookButton';

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pointer-events-auto bg-navy-deep/90 backdrop-blur-lg rounded-full pl-6 pr-3 py-3 border border-white/10 shadow-2xl shadow-black/40">
          <Link
            href="/"
            className="text-xl font-headline font-bold tracking-tight text-white flex items-center gap-2.5 shrink-0"
          >
            <span className="px-2.5 py-1.5 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-[11px] font-black tracking-tight">
              1160
            </span>
            Eleven<span className="text-gold-luxe">Sixty</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="/dinner-menus/" matchPrefix="/dinner-menus">
              Menu
            </NavLink>
            <NavLink href="/daily-features/">Features</NavLink>
            <NavLink href="/group-events/">Events</NavLink>
            <NavLink href="/birthday-club/">Birthday Club</NavLink>
            <NavLink href="/contact-us/">Contact</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <OpenStatus className="hidden sm:inline-flex" />
            <div className="hidden md:block">
              <BookButton />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import { MENUS } from '@/lib/menuData';

export default function MenuTabs({ active }: { active?: string }) {
  return (
    <div className="relative border-b border-white/10">
      <div className="overflow-x-auto no-scrollbar">
        <nav className="flex gap-6 md:gap-10 min-w-max">
        {MENUS.map((m) => {
          const isActive = active === m.slug;
          return (
            <Link
              key={m.slug}
              href={m.path}
              className={`relative pb-4 font-label text-sm uppercase tracking-[0.18em] font-bold transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {m.navLabel}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gold-luxe" />
              )}
            </Link>
          );
        })}
        </nav>
      </div>
      <div className="pointer-events-none md:hidden absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

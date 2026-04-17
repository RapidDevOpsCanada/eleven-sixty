import Link from 'next/link';
import { MENUS } from '@/lib/menuData';

export default function MenuTabs({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {MENUS.map((m) => {
        const isActive = active === m.slug;
        return (
          <Link
            key={m.slug}
            href={m.path}
            className={`font-label text-[11px] uppercase tracking-widest font-bold px-5 py-3 rounded-full border transition-all ${
              isActive
                ? 'bg-gold-luxe text-navy-deep border-gold-luxe'
                : 'text-white/70 border-white/10 hover:border-gold-luxe hover:text-white'
            }`}
          >
            {m.navLabel}
          </Link>
        );
      })}
    </div>
  );
}

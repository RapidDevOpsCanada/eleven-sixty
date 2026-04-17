import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { MENUS } from '@/lib/menuData';

export const metadata = {
  title: 'Menu — Eleven Sixty Bar & Grill',
  description:
    'Lunch, dinner, drinks, kids, desserts, and daily features at Eleven Sixty in London and St Thomas, Ontario.'
};

export default function MenuIndexPage() {
  return (
    <>
      <Nav showCommandBar={false} />

      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
                The Menu
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              Everything we <span className="text-gold-luxe italic">cook &amp; pour</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-xl">
              From the slow-smoked ribs to the weeknight martini list. Pick a menu below — prices
              and details are the same at both our London and St Thomas rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENUS.map((m) => (
            <Link
              key={m.slug}
              href={`/menu/${m.slug}`}
              className="group bg-navy-deep border border-white/5 hover:border-gold-luxe/40 rounded-3xl p-10 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
                {m.kicker}
              </span>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight group-hover:text-gold-luxe transition-colors">
                {m.title}
              </h2>
              <p className="font-label text-xs uppercase tracking-widest text-white/60 font-bold">
                {m.tagline}
              </p>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed mt-2">
                {m.subtitle}
              </p>
              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="font-label text-[11px] uppercase tracking-widest text-white/40 font-bold">
                  {m.sections.length} section{m.sections.length === 1 ? '' : 's'}
                </span>
                <span className="material-symbols-outlined text-gold-luxe group-hover:translate-x-2 transition-transform">
                  east
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

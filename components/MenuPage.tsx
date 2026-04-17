import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MenuSectionBlock from '@/components/MenuSectionBlock';
import MenuTabs from '@/components/MenuTabs';
import type { Menu } from '@/lib/menuData';

export default function MenuPage({ menu }: { menu: Menu }) {
  return (
    <>
      <Nav showCommandBar={false} />

      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <Link
                href="/"
                className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold hover:text-white transition-colors"
              >
                {menu.kicker}
              </Link>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              {menu.title}
            </h1>
            <p className="font-label text-sm md:text-base uppercase tracking-widest text-gold-luxe font-bold">
              {menu.tagline}
            </p>
            {menu.subtitle && (
              <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-xl">
                {menu.subtitle}
              </p>
            )}
          </div>

          <MenuTabs active={menu.slug} />
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {menu.sections.map((s) => (
            <MenuSectionBlock key={s.title} section={s} />
          ))}

          {menu.pricingNote && (
            <p className="font-body text-sm text-on-surface-variant italic font-medium text-center mt-4">
              {menu.pricingNote}
            </p>
          )}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-5xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Ready to eat?
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
              Book a table in London or St Thomas.
            </h2>
            <p className="font-body text-on-surface-variant font-medium leading-relaxed">
              Open daily from 11:30am. Call your closest room to reserve — private dining for up
              to 45 available on request.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+15196812669"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center"
            >
              Call London · 519-681-2669
            </a>
            <a
              href="tel:+15196318282"
              className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center"
            >
              Call St Thomas · 519-631-8282
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

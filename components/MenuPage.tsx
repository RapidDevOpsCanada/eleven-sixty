import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MenuSectionBlock from '@/components/MenuSectionBlock';
import MenuTabs from '@/components/MenuTabs';
import OpenStatus from '@/components/OpenStatus';
import ScrollToTop from '@/components/ScrollToTop';
import type { Menu } from '@/lib/menuData';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';

export default function MenuPage({ menu }: { menu: Menu }) {
  return (
    <>
      <Nav />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-3 flex flex-col gap-6 max-w-xl">
              <div className="inline-flex items-center gap-3">
                <div className="h-[1px] w-8 bg-white/30" />
                <Link
                  href="/"
                  className="font-label uppercase tracking-[0.4em] text-white/60 text-[11px] font-bold hover:text-white transition-colors"
                >
                  {menu.kicker}
                </Link>
              </div>
              <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
                {menu.title}
              </h1>
              <p className="font-label text-sm md:text-base uppercase tracking-widest text-white/70 font-bold">
                {menu.tagline}
              </p>
              {menu.subtitle && (
                <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
                  {menu.subtitle}
                </p>
              )}
            </div>
            <div className="lg:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={menu.heroImageAlt}
                src={menu.heroImage}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
            </div>
          </div>

          <MenuTabs active={menu.slug} />
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          {menu.sections.map((s) => (
            <MenuSectionBlock key={s.title} section={s} />
          ))}

          {menu.pricingNote && (
            <p className="font-body text-sm text-on-surface-variant italic font-medium text-center mt-8">
              {menu.pricingNote}
            </p>
          )}
          <p className="font-body text-xs md:text-sm text-white/50 italic font-medium text-center mt-6">
            Please let your server know about allergies or dietary needs — the kitchen is
            happy to accommodate.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px] md:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="The Eleven Sixty dining room"
                src="/images/interior-bar.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-deep/20 to-navy-deep" />
            </div>
            <div className="p-10 md:p-14 flex flex-col gap-5 justify-center">
              <div className="flex items-center gap-4">
                <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  Ready to eat?
                </span>
                <OpenStatus />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
                Book a table in London or St Thomas.
              </h2>
              <p className="font-body text-on-surface-variant font-medium leading-relaxed">
                Reserve online through OpenTable, or call your closest room directly. Private
                dining for up to 45 available on request.
              </p>
              <div className="flex flex-col gap-3 pt-3">
                <a
                  href={OPENTABLE_LONDON}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  Reserve London
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
                <a
                  href={OPENTABLE_ST_THOMAS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  Reserve St Thomas
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
                <div className="flex gap-4 pt-1 justify-center text-xs text-white/60">
                  <a href="tel:+15196812669" className="hover:text-white transition-colors">
                    Or call London · 519-681-2669
                  </a>
                  <span className="text-white/20">·</span>
                  <a href="tel:+15196318282" className="hover:text-white transition-colors">
                    St Thomas · 519-631-8282
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-2 safe-bottom">
        <a
          href="tel:+15196812669"
          className="flex-1 bg-gold-luxe text-navy-deep font-label text-[11px] uppercase tracking-widest font-bold px-4 py-3 rounded-full text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">call</span>
          London
        </a>
        <a
          href="tel:+15196318282"
          className="flex-1 bg-transparent border border-white/20 text-white font-label text-[11px] uppercase tracking-widest font-bold px-4 py-3 rounded-full text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">call</span>
          St Thomas
        </a>
      </div>
      <div className="md:hidden h-20" aria-hidden="true" />

      <ScrollToTop />
      <Footer />
    </>
  );
}

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page not found — Eleven Sixty Bar & Grill'
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            src="/images/interior-bar.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        </div>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-8 py-24">
          <div className="inline-flex items-center gap-3">
            <div className="h-[1px] w-8 bg-white/30" />
            <span className="font-label uppercase tracking-[0.4em] text-white/60 text-[11px] font-bold">
              Lost in the room
            </span>
          </div>
          <h1 className="font-headline font-bold text-7xl md:text-[11rem] text-white tracking-tighter leading-none">
            4<span className="italic text-gold-luxe">0</span>4
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium max-w-xl">
            The page you&apos;re looking for isn&apos;t on the menu. It may have moved, or we
            never served it. Head back to the front and pick something to eat instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2"
            >
              Back to home
              <span className="material-symbols-outlined text-base">east</span>
            </Link>
            <Link
              href="/dinner-menus/"
              className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

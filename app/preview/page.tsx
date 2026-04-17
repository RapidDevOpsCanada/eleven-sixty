import Link from 'next/link';
import type { Metadata } from 'next';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';

export const metadata: Metadata = {
  title: 'Design Concept — Eleven Sixty',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: undefined }
};

const TODAY = '2026-04-17';

const PILLARS = [
  {
    title: 'Warmth over luxury.',
    body:
      'The previous design leaned into ultramodern-pub territory. The new direction keeps the refinement but reframes it around a family bar & grill — softer language, warmer navy, real food photography.'
  },
  {
    title: 'Utility over brand lore.',
    body:
      'Every section does something. Reserve on OpenTable. See tonight\u2019s feature. Find the closer location. Book the private room. No decorative storytelling without an action.'
  },
  {
    title: 'Editorial, not corporate.',
    body:
      'Display serif italic accents on headlines. Dotted-leader pricing on menus. Mixed-case titles. Magazine asymmetry on the field notes index. Quiet details that add up.'
  },
  {
    title: 'Live status everywhere.',
    body:
      'A real-time Open / Closed badge in the nav and menu CTAs. Today\u2019s feature pulled from the weekly menu. Happy-hour card always visible below the fold.'
  }
];

const TYPE_SAMPLES = [
  { label: 'Display · Outfit Bold', className: 'font-headline font-bold text-6xl md:text-7xl' },
  {
    label: 'Italic accent · Outfit Italic',
    className: 'font-headline italic font-bold text-5xl md:text-6xl text-gold-luxe'
  },
  { label: 'Kicker · Plus Jakarta', className: 'font-label uppercase tracking-[0.3em] text-[11px] font-bold text-white/60' },
  { label: 'Body · Plus Jakarta Medium', className: 'font-body text-lg font-medium leading-relaxed' }
];

const COLORS: { name: string; hex: string; use: string }[] = [
  { name: 'Background', hex: '#0A0E22', use: 'Body canvas — warm navy-tinted dark with a radial vignette.' },
  { name: 'Navy Deep', hex: '#0F1733', use: 'Cards, the nav pill, CTA blocks.' },
  { name: 'Gold Luxe', hex: '#C5A059', use: 'Buttons, italic accent type, interactive hover states.' },
  { name: 'On-Surface', hex: '#ECE6D6', use: 'Headline + heavy body text. Slight cream over pure white.' },
  { name: 'Muted body', hex: '#CFC8B6', use: 'Paragraph copy on dark surfaces.' },
  { name: 'Error / Required', hex: '#FFB4AB', use: 'Required-field asterisks, form validation.' }
];

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      {/* Minimal presentation header — no public nav */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-[10px] font-black">
              11
            </span>
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold">
              Design Concept · Confidential
            </span>
          </div>
          <div className="font-label text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold hidden md:block">
            Presented · {TODAY}
          </div>
        </div>
      </header>

      {/* Cover */}
      <section className="px-6 md:px-12 pt-20 md:pt-32 pb-24 md:pb-40 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <span className="font-label text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold">
            For Eleven Sixty Bar &amp; Grill
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-8xl text-white tracking-tight leading-[0.95] max-w-4xl">
            A proposed web experience,{' '}
            <span className="italic text-gold-luxe">built for the table.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            The following pages walk through the direction we&apos;re recommending — the brand
            tone, the typography system, the homepage flow, the menu experience, and the
            reservation path. Every screen is designed around the two rooms and the way guests
            actually use a neighbourhood bar &amp; grill.
          </p>
          <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-widest font-bold text-white/50 pt-4 border-t border-white/10">
            <span>01 · Direction</span>
            <span>02 · Brand system</span>
            <span>03 · Homepage</span>
            <span>04 · Menu</span>
            <span>05 · Reservations</span>
            <span>06 · Mobile</span>
            <span>07 · Motion</span>
            <span>08 · Next steps</span>
          </div>
        </div>
      </section>

      {/* 01 — Direction */}
      <Section index="01" label="Direction" title="Four ideas we kept returning to.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col gap-4"
            >
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
                0{i + 1}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
                {p.title}
              </h3>
              <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 — Brand system */}
      <Section index="02" label="Brand system" title="Palette & typography.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Colour tokens
            </span>
            <div className="flex flex-col gap-3">
              {COLORS.map((c) => (
                <div
                  key={c.hex}
                  className="bg-navy-deep border border-white/5 rounded-2xl p-5 flex items-center gap-5"
                >
                  <span
                    className="w-14 h-14 rounded-xl flex-shrink-0 border border-white/10"
                    style={{ backgroundColor: c.hex }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-headline font-bold text-white">{c.name}</span>
                      <span className="font-label text-[10px] uppercase tracking-widest text-white/40 font-bold">
                        {c.hex}
                      </span>
                    </div>
                    <span className="font-body text-sm text-on-surface-variant font-medium leading-snug">
                      {c.use}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Typography
            </span>
            <div className="bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col gap-10">
              {TYPE_SAMPLES.map((t) => (
                <div key={t.label} className="flex flex-col gap-2 border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                  <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
                    {t.label}
                  </span>
                  <span className={t.className}>The grill is on.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 03 — Homepage */}
      <Section index="03" label="Homepage" title="Hero, rail, and the night.">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 flex flex-col md:flex-row min-h-[480px]">
          <div className="md:w-1/2 bg-navy-deep p-8 md:p-14 flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="font-label uppercase tracking-[0.4em] text-white/70 text-[11px] font-bold">
                London &amp; St Thomas
              </span>
            </div>
            <h3 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              PREMIER
              <br />
              BAR &amp;
              <br />
              <span className="relative inline-block italic text-gold-luxe">
                grill.
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-2 h-[3px] w-[110%] bg-gold-luxe/60 rounded-full -skew-x-12"
                />
              </span>
            </h3>
            <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium max-w-sm">
              Two Ontario rooms, one welcome. Open daily from 11:30am.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-white text-navy-deep font-label font-bold tracking-widest uppercase text-xs px-10 py-4 rounded-full">
                View the menu
              </span>
            </div>
          </div>
          <div className="relative md:w-1/2 min-h-[280px] md:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/interior-bar.jpg"
              alt="Hero — interior"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">
                Inside the Rooms
              </span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
                London &amp; St Thomas
              </h4>
            </div>
          </div>
        </div>

        <Annotation>
          Left half holds the message and the single primary action. Right half is a cinematic
          room photo with a subtle ken-burns zoom. Below the fold: an About pair, a full-bleed
          happy-hour banner, a live &ldquo;What&apos;s on tonight&rdquo; card pulled from the
          weekly features, reviews, four photo-led quick links, and both locations with embedded
          maps.
        </Annotation>
      </Section>

      {/* 04 — Menu */}
      <Section index="04" label="Menu" title="Editorial, not a spreadsheet.">
        <div className="bg-background border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col gap-10">
          <div className="border-b border-white/10 pb-4">
            <nav className="flex gap-6 md:gap-10 min-w-max">
              {['Lunch', 'Dinner', 'Desserts', 'Kids', 'Drinks', 'Features'].map((t, i) => (
                <span
                  key={t}
                  className={`relative pb-3 font-label text-sm uppercase tracking-[0.18em] font-bold ${
                    i === 1 ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {t}
                  {i === 1 && (
                    <span className="absolute left-0 right-0 -bottom-[5px] h-[2px] bg-gold-luxe" />
                  )}
                </span>
              ))}
            </nav>
          </div>

          <header>
            <h3 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
              Ribs &amp; Combos
            </h3>
            <p className="font-body text-sm text-on-surface-variant italic mt-2">
              All rib dishes served with french fries and coleslaw.
            </p>
          </header>

          <div className="flex flex-col">
            {[
              { name: 'Baby Back Ribs', price: 'Half $30.50 · Full $39.00' },
              {
                name: '1160 Power Combo',
                price: '$50.75',
                isHouse: true,
                description:
                  'Half rack of baby back ribs, grilled shrimp skewer, AAA top sirloin.'
              },
              { name: 'Beef Ribs', price: '$47.75' },
              {
                name: 'Rib & Wing Combo',
                price: '$37.75',
                description: 'Half rack + half pound of wings.'
              }
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 py-5 border-b border-white/5 last:border-b-0"
              >
                <div className="flex items-baseline gap-3">
                  <h4 className="font-headline font-bold text-lg md:text-xl text-white tracking-tight">
                    {item.isHouse && (
                      <span className="mr-3 inline-block align-middle bg-gold-luxe text-navy-deep font-label text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 rounded">
                        House
                      </span>
                    )}
                    {item.name}
                  </h4>
                  <span
                    aria-hidden="true"
                    className="flex-1 border-b border-dotted border-white/15 translate-y-[-3px]"
                  />
                  <span className="font-headline text-lg font-bold text-gold-luxe tracking-tight">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <Annotation>
          Segmented-underline tabs instead of chunky pill buttons. Sections read as magazine
          spreads — display-size titles, no heavy card wrappers, items in two columns with
          classic dotted-leader pricing. House specials (any &ldquo;1160&rdquo; item) get a gold
          HOUSE pill so scanning eyes find the signature dishes first.
        </Annotation>
      </Section>

      {/* 05 — Reservations */}
      <Section index="05" label="Reservations" title="Two clicks, both rooms.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-navy-deep border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="px-5 py-4 border-b border-white/5">
              <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                Reserve on OpenTable
              </span>
            </div>
            <div className="block px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div>
                <div className="font-headline text-lg font-bold text-white">London</div>
                <div className="font-body text-xs text-white/60">1160 Wellington Rd</div>
              </div>
              <span className="material-symbols-outlined text-gold-luxe text-base">
                open_in_new
              </span>
            </div>
            <div className="block px-5 py-4 flex items-center justify-between">
              <div>
                <div className="font-headline text-lg font-bold text-white">St Thomas</div>
                <div className="font-body text-xs text-white/60">1093 Talbot St</div>
              </div>
              <span className="material-symbols-outlined text-gold-luxe text-base">
                open_in_new
              </span>
            </div>
          </div>

          <div className="bg-navy-deep border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-5 justify-center">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              In the nav, on every page
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Book button is always one click away.
            </h3>
            <p className="font-body text-on-surface-variant font-medium leading-relaxed">
              A small dropdown on the right of the nav opens this two-option panel. Click-outside
              and Escape close it. Both options open OpenTable in a new tab — menu-style
              behaviour matching how guests actually decide which room to reserve.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={OPENTABLE_LONDON}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-luxe text-navy-deep font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                Try the London link
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <a
                href={OPENTABLE_ST_THOMAS}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                Try St Thomas
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 06 — Mobile */}
      <Section index="06" label="Mobile" title="A full-screen overlay, not a cramped pill.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ul className="flex flex-col gap-5 font-body text-base text-on-surface-variant leading-relaxed">
            <ListRow>
              Hamburger opens a portal-rendered overlay — lives outside the nav&apos;s
              backdrop-filter so nothing clips it.
            </ListRow>
            <ListRow>
              Links grouped into three rails (Menus / Visit / More) with a gold bar marking the
              active page.
            </ListRow>
            <ListRow>
              Live Open / Closed status near the top of the overlay.
            </ListRow>
            <ListRow>
              Bottom of the overlay splits into &ldquo;Reserve on OpenTable&rdquo; and &ldquo;Or
              call directly&rdquo; — two ways to book, one tap each.
            </ListRow>
            <ListRow>
              Sticky bottom bar on menu pages with both call numbers visible at all times.
            </ListRow>
            <ListRow>
              Scroll-to-top button appears after 600px so long menus never trap the user at the
              bottom.
            </ListRow>
          </ul>
          <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl shadow-black/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/interior-bar.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-xl" />
            <div className="relative h-full p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold-luxe text-navy-deep text-[8px] font-black flex items-center justify-center">
                    11
                  </span>
                  <span className="text-sm font-headline font-bold text-white tracking-tight">
                    ELEVEN <span className="text-gold-luxe">SIXTY</span>
                  </span>
                </div>
                <span className="material-symbols-outlined text-white/80 text-xl">close</span>
              </div>
              <div className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] font-bold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open · closes 9pm
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  { label: 'Lunch', active: false },
                  { label: 'Dinner', active: true },
                  { label: 'Desserts', active: false },
                  { label: 'Drinks', active: false }
                ].map((l) => (
                  <div key={l.label} className="relative pl-3">
                    {l.active && (
                      <span className="absolute left-0 top-1 w-1 h-5 rounded-full bg-gold-luxe" />
                    )}
                    <span
                      className={`font-headline text-lg font-bold tracking-tight ${
                        l.active ? 'text-gold-luxe' : 'text-white'
                      }`}
                    >
                      {l.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <span className="bg-gold-luxe text-navy-deep font-label text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-full text-center">
                  Reserve London
                </span>
                <span className="border border-white/20 text-white font-label text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-full text-center">
                  Reserve St Thomas
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 07 — Motion */}
      <Section index="07" label="Motion" title="Nothing gimmicky. A handful of subtle moves.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Ken-burns hero',
              body:
                'Single interior photo slow-zooms 1 → 1.08 over 20s, alternating. Respects prefers-reduced-motion.'
            },
            {
              title: 'Fade-up on scroll',
              body:
                'Major content blocks fade and rise 24px as they enter view. Staggered by 80ms for card grids.'
            },
            {
              title: 'Photo-tile zoom',
              body:
                'Cards with background images zoom to 1.05 on hover over 700ms, with a slightly lighter gradient.'
            },
            {
              title: 'Nav underline sweep',
              body:
                'Hover scales a 2px gold underline from the left edge. Active page gets the same bar solid.'
            },
            {
              title: 'Reading progress',
              body:
                'Article pages render a 2px gold strip at the top that tracks scroll position.'
            },
            {
              title: 'Scroll-to-top',
              body:
                'Gold floating button appears past 600px on long pages. Above the sticky mobile call bar.'
            }
          ].map((m) => (
            <div
              key={m.title}
              className="bg-navy-deep border border-white/5 rounded-3xl p-7 flex flex-col gap-3"
            >
              <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                {m.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 08 — Next steps */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col gap-8">
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
            08 · Next steps
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.02] max-w-3xl">
            If the direction feels right, we move to{' '}
            <span className="italic text-gold-luxe">build.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            The concept above covers the structural decisions and visual system. From sign-off,
            we&apos;ll stage the full site, wire the menu and daily features, hook up OpenTable
            for both rooms, and walk the team through the CMS before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="mailto:grizzlyagencyhello@gmail.com?subject=Eleven%20Sixty%20concept%20%E2%80%94%20approved"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Approve &amp; proceed
            </a>
            <a
              href="mailto:grizzlyagencyhello@gmail.com?subject=Eleven%20Sixty%20concept%20%E2%80%94%20feedback"
              className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Send feedback
            </a>
          </div>
          <p className="font-body text-xs text-white/30 italic pt-4">
            Confidential — concept document for Eleven Sixty Bar &amp; Grill. Not for public
            distribution.
          </p>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-label text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <span>Eleven Sixty · Concept document</span>
          <Link href="/" className="hover:text-gold-luxe transition-colors">
            View concept homepage →
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Section({
  index,
  label,
  title,
  children
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <header className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              {index}
            </span>
            <span className="h-[1px] w-10 bg-white/20" />
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold">
              {label}
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold-luxe/50 pl-5 py-2 max-w-3xl">
      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold block mb-2">
        Notes
      </span>
      <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed italic">
        {children}
      </p>
    </div>
  );
}

function ListRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-2 w-2 h-2 rounded-full bg-gold-luxe flex-shrink-0" />
      <span className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
        {children}
      </span>
    </li>
  );
}

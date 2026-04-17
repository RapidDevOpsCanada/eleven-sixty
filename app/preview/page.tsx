import Link from 'next/link';
import type { Metadata } from 'next';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';
import LocationMap from '@/components/LocationMap';

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
      'The direction keeps the refinement but reframes it around a family bar & grill — softer language, warmer navy, real food photography.'
  },
  {
    title: 'Utility over brand lore.',
    body:
      'Every section does something. Reserve on OpenTable. See tonight\u2019s feature. Find the closer location. Book the private space. No decorative storytelling without an action.'
  },
  {
    title: 'Editorial, not corporate.',
    body:
      'Italic gold accents on headlines. Dotted-leader pricing on menus. Mixed-case titles. Quiet details that add up.'
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
  {
    label: 'Kicker · Plus Jakarta',
    className: 'font-label uppercase tracking-[0.3em] text-[11px] font-bold text-white/60'
  },
  {
    label: 'Body · Plus Jakarta Medium',
    className: 'font-body text-lg font-medium leading-relaxed'
  }
];

const COLORS: { name: string; hex: string; use: string }[] = [
  {
    name: 'Background',
    hex: '#0A0E22',
    use: 'Body canvas — warm navy-tinted dark with a radial vignette.'
  },
  { name: 'Navy Deep', hex: '#0F1733', use: 'Cards, the nav pill, CTA blocks.' },
  { name: 'Gold Luxe', hex: '#C5A059', use: 'Buttons, italic accent type, interactive hover states.' },
  {
    name: 'On-Surface',
    hex: '#ECE6D6',
    use: 'Headline + heavy body text. Slight cream over pure white.'
  },
  { name: 'Muted body', hex: '#CFC8B6', use: 'Paragraph copy on dark surfaces.' },
  { name: 'Error / Required', hex: '#FFB4AB', use: 'Required-field asterisks, form validation.' }
];

const PAGES = [
  { path: '/', label: 'Homepage' },
  { path: '/dinner-menus/', label: 'Dinner menu' },
  { path: '/lunch-menu/', label: 'Lunch menu' },
  { path: '/desserts/', label: 'Desserts' },
  { path: '/kids-menu/', label: 'Kids menu' },
  { path: '/drinks-menu/', label: 'Drinks' },
  { path: '/daily-features/', label: 'Daily features' },
  { path: '/group-events/', label: 'Group events' },
  { path: '/birthday-club/', label: 'Birthday Club' },
  { path: '/contact-us/', label: 'Contact' }
];

const MOTION = [
  {
    title: 'Ken-burns hero',
    body:
      'Single interior photo slow-zooms 1 \u2192 1.08 over 20s, alternating. Respects prefers-reduced-motion.'
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
    title: 'Scroll-to-top',
    body:
      'Gold floating button appears past 600px on long pages. Above the sticky mobile call bar.'
  }
];

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
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

      {/* Homepage overview — zoomed-out browser mockup */}
      <section className="px-6 md:px-12 pt-10 md:pt-14 pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Homepage at a glance
            </span>
            <span className="h-[1px] flex-1 bg-white/10" />
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold hidden md:inline">
              elevensixty.ca
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-navy-deep">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-navy-deep/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
              </div>
              <div className="flex-1 bg-background rounded-md border border-white/10 px-3 py-1.5 font-label text-[10px] text-white/40 text-center font-bold tracking-widest">
                ELEVENSIXTY.CA
              </div>
              <span className="material-symbols-outlined text-white/30 text-base hidden sm:inline">
                open_in_new
              </span>
            </div>

            {/* Scaled iframe viewport — iframe is 1440x900 so h-screen inside
                renders at a real desktop height, then we scale the whole
                thing down for the zoomed-out view. */}
            <div className="relative w-full overflow-hidden h-[360px] sm:h-[480px] md:h-[600px] lg:h-[630px] bg-background">
              <iframe
                src="/"
                title="Eleven Sixty homepage concept"
                aria-label="Zoomed-out preview of the homepage concept"
                loading="lazy"
                className="absolute top-0 left-0 origin-top-left pointer-events-none border-0"
                style={{
                  width: '1440px',
                  height: '900px',
                  transform: 'scale(0.70)',
                  transformOrigin: 'top left'
                }}
              />
              {/* Soft vignette at the bottom to suggest the page continues */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />
            </div>
          </div>

          <p className="font-body text-sm text-on-surface-variant italic font-medium mt-4 text-center">
            A live, zoomed-out view of the homepage concept. Detailed breakdowns of each section
            follow below.
          </p>
        </div>
      </section>

      {/* Cover */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-24 md:pb-40 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <span className="font-label text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold">
            For Eleven Sixty Bar &amp; Grill
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-8xl text-white tracking-tight leading-[0.95] max-w-4xl">
            A proposed web experience,{' '}
            <span className="italic text-gold-luxe">built for the table.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            What follows is the direction we&apos;re recommending — the brand tone, the
            typography system, the homepage flow, the menu experience, the reservation path, and
            the page-by-page treatments. Every screen is designed around two Ontario locations
            and the way guests actually use a neighbourhood bar &amp; grill.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-widest font-bold text-white/50 pt-6 border-t border-white/10">
            <span>01 · Direction</span>
            <span>02 · Brand system</span>
            <span>03 · Homepage</span>
            <span>04 · Tonight</span>
            <span>05 · Feature cards</span>
            <span>06 · Menu</span>
            <span>07 · Group events</span>
            <span>08 · Birthday Club</span>
            <span>09 · Contact</span>
            <span>10 · Locations</span>
            <span>11 · Reservations</span>
            <span>12 · Mobile</span>
            <span>13 · Motion</span>
            <span>14 · Sitemap</span>
            <span>15 · Next steps</span>
          </div>
        </div>
      </section>

      {/* 01 Direction */}
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

      {/* 02 Brand system */}
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
                    <div className="flex items-baseline gap-3 flex-wrap">
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
                <div
                  key={t.label}
                  className="flex flex-col gap-2 border-b border-white/5 pb-6 last:border-b-0 last:pb-0"
                >
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

      {/* 03 Homepage */}
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
              <span className="italic text-gold-luxe">grill.</span>
            </h3>
            <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium max-w-sm">
              Two Ontario locations, one welcome. Open daily from 11:30am.
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
                Visit Us
              </span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
                London &amp; St Thomas
              </h4>
            </div>
          </div>
        </div>

        <Annotation>
          Left half holds the message and the single primary action. Right half is a cinematic
          interior photo with a subtle ken-burns zoom. Info rail at the bottom of the navy
          column shows hours + both phone numbers (compact chip row on mobile).
        </Annotation>
      </Section>

      {/* 03 Tonight */}
      <Section index="04" label="Tonight" title="A live card that knows what day it is.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 relative overflow-hidden h-[420px] rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/happy-hour.jpg"
              alt="Tonight"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
                  Friday night
                </span>
                <h3 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mt-3">
                  Happy Hour, Every Day
                </h3>
              </div>
              <ul className="flex flex-col gap-3 max-w-xl">
                {[
                  { n: 'Half-priced Appetizers', p: 'From shareables' },
                  { n: 'Domestic Draught', p: '$6' },
                  { n: '$10 off wine bottles', p: '—' }
                ].map((r, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-3 font-body text-base text-white/90 font-medium"
                  >
                    <span className="font-headline font-bold text-white">{r.n}</span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-white/20 translate-y-[-3px]"
                    />
                    <span className="font-headline font-bold text-gold-luxe">{r.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 bg-navy-deep border border-white/5 p-8 md:p-10 flex flex-col gap-5 h-[420px] rounded-3xl">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
              Every Day · 3–5pm &amp; 8pm–close
            </span>
            <h3 className="font-headline text-3xl font-bold text-white tracking-tight">
              Happy <span className="italic text-gold-luxe">hour.</span>
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              A companion card reinforces the bar program beside whichever weeknight feature is
              running tonight. Data pulled from lib/menuData.ts.
            </p>
          </div>
        </div>

        <Annotation>
          Client-side component reads today&apos;s day and pulls the matching feature out of the
          menu data. Friday / Saturday fall back to the Happy Hour card as the headliner.
          Inline OpenStatus shows the live &ldquo;closes 9pm&rdquo; beside the headline.
        </Annotation>
      </Section>

      {/* 03 Feature cards */}
      <Section index="05" label="Feature cards" title="Photo tiles, topic-specific labels.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              img: '/images/happy-hour.jpg',
              title: 'Daily Features',
              body: 'Weeknight specials plus all-day happy hours.',
              cta: 'See the specials'
            },
            {
              img: '/images/birthday-cake.jpg',
              title: 'Birthday Club',
              body: 'Sign up — dessert on us on your birthday.',
              cta: 'Sign up'
            },
            {
              img: '/images/private-event.jpg',
              title: 'Group Events',
              body: 'Private dining for up to 45 with a big-screen TV.',
              cta: 'Book the space'
            },
            {
              img: '/images/restaurant-exterior.jpg',
              title: 'Contact Us',
              body: 'Reach the team at info@elevensixty.ca.',
              cta: 'Say hello'
            }
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end gap-3">
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="font-body text-sm text-white/80 font-medium leading-relaxed">
                  {c.body}
                </p>
                <span className="mt-2 font-label text-[11px] uppercase tracking-[0.2em] text-gold-luxe font-bold inline-flex items-center gap-2">
                  {c.cta} <span className="material-symbols-outlined text-sm">east</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 Menu */}
      <Section index="06" label="Menu" title="Editorial, not a spreadsheet.">
        <PagePreview src="/dinner-menus/" path="/dinner-menus/" />
        <p className="font-body text-sm text-on-surface-variant italic font-medium text-center">
          Live preview of the dinner menu. Close-up of the pattern below.
        </p>
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
          classic dotted-leader pricing. Any &ldquo;1160&rdquo; item gets a gold HOUSE pill so
          scanning eyes find the signature dishes first.
        </Annotation>
      </Section>

      {/* 03 Group events */}
      <Section index="07" label="Group events" title="One hero stat, two supporting tiles.">
        <PagePreview src="/group-events/" path="/group-events/" />
        <p className="font-body text-sm text-on-surface-variant italic font-medium text-center">
          Live preview of the group-events page. Below, the supporting component treatment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-navy-deep border border-white/5 rounded-3xl p-10 md:p-14 flex flex-col gap-6 justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-gold-luxe text-5xl">groups</span>
              <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
                Private space capacity
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-headline text-[7rem] md:text-[12rem] leading-none font-extrabold text-gold-luxe tracking-[-0.05em]">
                45
              </span>
              <p className="font-body text-lg text-on-surface-variant font-medium leading-relaxed max-w-md">
                Corporate lunches, birthdays, fundraisers, and the kind of night that deserves its
                own door.
              </p>
            </div>
          </div>
          <div className="bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-4">
            <span className="material-symbols-outlined text-gold-luxe text-5xl">tv</span>
            <span className="font-headline text-3xl font-bold text-white tracking-tight">
              Big-Screen TV
            </span>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              For the presentation, the highlight reel, or the big game.
            </p>
          </div>
          <div className="bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-4">
            <span className="material-symbols-outlined text-gold-luxe text-5xl">restaurant</span>
            <span className="font-headline text-3xl font-bold text-white tracking-tight">
              Custom Menus
            </span>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              Choose any set menu — or let us build one around your event.
            </p>
          </div>
        </div>

        <Annotation>
          The capacity stat dominates at 12rem display type. Supporting tiles stack in a thin
          column. A structured inquiry form (date, headcount, occasion, notes) lives below this
          section on the real page.
        </Annotation>
      </Section>

      {/* 08 Birthday Club */}
      <Section index="08" label="Birthday Club" title="Benefits up front, form below.">
        <PagePreview src="/birthday-club/" path="/birthday-club/" />
        <p className="font-body text-sm text-on-surface-variant italic font-medium text-center">
          Live preview of Birthday Club. Detail on the 3-benefit block below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: 'cake',
              title: 'Dessert on the house',
              body: 'Show up on your birthday, tell your server, dessert arrives with a candle.'
            },
            {
              icon: 'local_offer',
              title: 'Seasonal offers',
              body: 'A handful of member-only invites each year — never on the public board.'
            },
            {
              icon: 'event_available',
              title: 'Easier booking',
              body: 'Mention the Club when you call during birthday week — we make it work.'
            }
          ].map((p) => (
            <div
              key={p.title}
              className="bg-navy-deep/60 border border-white/5 rounded-3xl p-7 flex flex-col gap-3"
            >
              <span className="material-symbols-outlined text-gold-luxe text-2xl">{p.icon}</span>
              <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                {p.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 Contact */}
      <Section index="09" label="Contact" title="Form, dropdowns, focus ring.">
        <PagePreview src="/contact-us/" path="/contact-us/" />
        <p className="font-body text-sm text-on-surface-variant italic font-medium text-center">
          Live preview of the contact page — the two live-map location cards visible below the
          reservation strip.
        </p>
        <div className="bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-12 max-w-3xl">
          <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold mb-4 block">
            Send us a message
          </span>
          <div className="flex flex-col gap-5">
            <LabelledPreview label="Your name *">
              <span className="font-body text-white/60 italic">Maria Okafor</span>
            </LabelledPreview>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <LabelledPreview label="Email *">
                <span className="font-body text-white/60 italic">maria@example.ca</span>
              </LabelledPreview>
              <LabelledPreview label="Location *">
                <div className="flex items-center justify-between">
                  <span className="font-body text-white">London — 1160 Wellington Rd</span>
                  <span className="material-symbols-outlined text-gold-luxe text-base">
                    expand_more
                  </span>
                </div>
              </LabelledPreview>
            </div>
            <LabelledPreview label="Subject">
              <div className="flex items-center justify-between">
                <span className="font-body text-white">Reservation inquiry</span>
                <span className="material-symbols-outlined text-gold-luxe text-base">
                  expand_more
                </span>
              </div>
            </LabelledPreview>
            <LabelledPreview label="Message" tall>
              <span className="font-body text-white/60 italic">
                Looking to book a 6-top for next Saturday night around 7pm.
              </span>
            </LabelledPreview>
            <span className="self-start bg-gold-luxe text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full">
              Send
            </span>
          </div>
        </div>

        <Annotation>
          Every form field is <code className="text-gold-luxe">rounded-2xl</code> with a
          gold-luxe <code className="text-gold-luxe">focus-visible</code> ring for keyboard
          accessibility. Location + Subject use custom-styled selects with a material-symbols
          chevron (native arrows don&apos;t honour the dark theme).
        </Annotation>
      </Section>

      {/* 11 Locations — live maps as background */}
      <Section index="10" label="Locations" title="Map as background, info floats on top.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              city: 'London',
              kicker: 'Wellington Rd',
              query: '1160 Wellington Road London ON N6E 1M3',
              addr: '1160 Wellington Road',
              phone: '(519) 681-2669'
            },
            {
              city: 'St Thomas',
              kicker: 'Talbot St',
              query: '1093 Talbot St St Thomas ON N5P 1G4',
              addr: '1093 Talbot St',
              phone: '519-631-8282'
            }
          ].map((l) => (
            <div
              key={l.city}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/5"
            >
              <LocationMap query={l.query} label={l.city} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 flex flex-col gap-3">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  {l.kicker}
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {l.city}
                </h3>
                <div className="flex flex-col gap-1 font-body text-base text-white/80 font-medium">
                  <span>{l.addr}</span>
                  <span className="text-white/60">{l.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Annotation>
          The maps above are live Google Maps iframes — each one loads the real street tiles
          for its respective address, so London and St Thomas render distinctly even when the
          address panel styling matches. A navy gradient rises from the bottom so the address,
          phone, and email copy stay legible regardless of map colours.
        </Annotation>
      </Section>

      {/* 03 Reservations */}
      <Section index="11" label="Reservations" title="Two clicks to OpenTable.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-navy-deep border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="px-5 py-4 border-b border-white/5">
              <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                Reserve on OpenTable
              </span>
            </div>
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div>
                <div className="font-headline text-lg font-bold text-white">London</div>
                <div className="font-body text-xs text-white/60">1160 Wellington Rd</div>
              </div>
              <span className="material-symbols-outlined text-gold-luxe text-base">
                open_in_new
              </span>
            </div>
            <div className="px-5 py-4 flex items-center justify-between">
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
              A small dropdown on the right of the nav opens the panel to the left. Click-outside
              and Escape close it. Both options open OpenTable in a new tab.
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

      {/* 12 Mobile */}
      <Section
        index="12"
        label="Mobile"
        title="A full-screen overlay with real substance."
      >
        <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed max-w-2xl -mt-4">
          The hamburger doesn&apos;t open a skinny list — it opens a full-screen overlay with
          every section of the site, live open/closed status, both OpenTable reservation links,
          and both direct phone numbers. Two phone mockups below show the overlay (top to
          bottom) and the sticky call bar used on menu pages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start mt-4">
          {/* Mockup 1 — top of overlay */}
          <div className="flex flex-col gap-4 items-center">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Overlay · top
            </span>
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl shadow-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/interior-bar.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-xl" />
              <div className="relative h-full p-5 flex flex-col gap-4 overflow-hidden">
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
                <div className="inline-flex items-center gap-2 font-label text-[9px] uppercase tracking-[0.2em] font-bold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Open · closes 9pm
                </div>
                <div className="flex flex-col gap-4 mt-1">
                  <div>
                    <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold-luxe font-bold mb-2 block">
                      Menus
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { l: 'Lunch', active: false },
                        { l: 'Dinner', active: true },
                        { l: 'Desserts', active: false },
                        { l: 'Kids', active: false },
                        { l: 'Drinks', active: false },
                        { l: 'Daily Features', active: false }
                      ].map((m) => (
                        <div key={m.l} className="relative pl-2.5">
                          {m.active && (
                            <span className="absolute left-0 top-1 w-[3px] h-4 rounded-full bg-gold-luxe" />
                          )}
                          <span
                            className={`font-headline text-sm font-bold tracking-tight ${
                              m.active ? 'text-gold-luxe' : 'text-white'
                            }`}
                          >
                            {m.l}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 2 — bottom of overlay */}
          <div className="flex flex-col gap-4 items-center">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Overlay · bottom
            </span>
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl shadow-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/interior-bar.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-xl" />
              <div className="relative h-full p-5 flex flex-col gap-3 overflow-hidden">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold-luxe font-bold mb-2 block">
                    Visit
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {['Birthday Club', 'Group Events', 'Contact Us', 'Locations'].map((v) => (
                      <span
                        key={v}
                        className="font-headline text-sm font-bold tracking-tight text-white"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-white/60 font-bold">
                    Reserve on OpenTable
                  </span>
                  <span className="bg-gold-luxe text-navy-deep font-label text-[9px] uppercase tracking-widest font-bold px-3 py-2 rounded-full text-center">
                    Reserve London ↗
                  </span>
                  <span className="border border-white/20 text-white font-label text-[9px] uppercase tracking-widest font-bold px-3 py-2 rounded-full text-center">
                    Reserve St Thomas ↗
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-white/60 font-bold">
                    Or call directly
                  </span>
                  <span className="border border-white/10 text-white font-label text-[9px] uppercase tracking-widest font-bold px-3 py-2 rounded-full text-center">
                    London · 519-681-2669
                  </span>
                  <span className="border border-white/10 text-white font-label text-[9px] uppercase tracking-widest font-bold px-3 py-2 rounded-full text-center">
                    St Thomas · 519-631-8282
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 3 — sticky bottom bar on menu pages */}
          <div className="flex flex-col gap-4 items-center">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
              Sticky call bar · menu pages
            </span>
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border border-white/10 bg-background overflow-hidden shadow-2xl shadow-black/50">
              {/* Menu content preview */}
              <div className="absolute inset-0 p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between bg-navy-deep rounded-full px-3 py-2 border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-gold-luxe text-navy-deep text-[7px] font-black flex items-center justify-center">
                      11
                    </span>
                    <span className="text-[10px] font-headline font-bold text-white tracking-tight">
                      ELEVEN <span className="text-gold-luxe">SIXTY</span>
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-white/80 text-base">menu</span>
                </div>
                <div className="flex flex-col gap-0.5 mt-2">
                  <span className="font-label text-[7px] uppercase tracking-[0.3em] text-white/50 font-bold">
                    Home / Menu / Dinner
                  </span>
                  <span className="font-headline text-3xl font-bold text-white tracking-tight leading-none">
                    Dinner
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  {[
                    { n: 'Onion Summit', p: '$17.75' },
                    { n: 'Baby Back Ribs', p: '$39' },
                    { n: '14oz Ribeye', p: '$44.75' },
                    { n: 'Salmon', p: '$31.75' }
                  ].map((i) => (
                    <div key={i.n} className="flex items-baseline gap-2">
                      <span className="font-headline text-[11px] font-bold text-white tracking-tight">
                        {i.n}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-white/15 translate-y-[-2px]"
                      />
                      <span className="font-headline text-[11px] font-bold text-gold-luxe">
                        {i.p}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sticky bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 px-3 py-3 flex gap-2">
                <span className="flex-1 bg-gold-luxe text-navy-deep font-label text-[9px] uppercase tracking-widest font-bold px-2 py-2 rounded-full text-center inline-flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">call</span>
                  London
                </span>
                <span className="flex-1 border border-white/20 text-white font-label text-[9px] uppercase tracking-widest font-bold px-2 py-2 rounded-full text-center inline-flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">call</span>
                  St Thomas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <ul className="flex flex-col gap-4 font-body text-base text-on-surface-variant leading-relaxed">
            <ListRow>
              Hamburger renders the overlay through a <code className="text-gold-luxe">React.createPortal</code>{' '}
              into document.body so it escapes the nav&apos;s backdrop-filter and covers the
              viewport reliably.
            </ListRow>
            <ListRow>
              Live Open / Closed badge at the top, pinned to America/Toronto so it&apos;s
              correct for every viewer.
            </ListRow>
            <ListRow>
              Links grouped into two sections (Menus · Visit) with the active page marked by a
              gold vertical bar.
            </ListRow>
            <ListRow>
              Faint interior photo behind a navy-deep/90 backdrop-blur so the overlay feels on
              brand, not a generic dropdown.
            </ListRow>
          </ul>
          <ul className="flex flex-col gap-4 font-body text-base text-on-surface-variant leading-relaxed">
            <ListRow>
              Two explicit reservation paths at the bottom: &ldquo;Reserve on OpenTable&rdquo;
              (both locations) and &ldquo;Or call directly&rdquo; (both numbers).
            </ListRow>
            <ListRow>
              Menu pages also carry a sticky bottom bar with both call numbers so booking is
              one tap away regardless of how deep you are in the menu.
            </ListRow>
            <ListRow>
              Scroll-to-top floating button appears past 600px on long menu or article pages,
              positioned above the sticky bar so they don&apos;t collide.
            </ListRow>
            <ListRow>
              Body scroll is locked while the overlay is open; click-outside and Escape both
              close it.
            </ListRow>
          </ul>
        </div>
      </Section>

      {/* 14 Motion */}
      <Section
        index="13"
        label="Motion"
        title="Nothing gimmicky. A handful of subtle moves."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOTION.map((m) => (
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

      {/* 03 Sitemap */}
      <Section index="14" label="Sitemap" title="Every page at a glance.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PAGES.map((p) => (
            <div
              key={p.path}
              className="bg-navy-deep/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-1"
            >
              <span className="font-headline text-lg font-bold text-white tracking-tight">
                {p.label}
              </span>
              <code className="font-label text-[10px] uppercase tracking-widest text-white/50 font-bold">
                {p.path}
              </code>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-on-surface-variant italic font-medium mt-6 max-w-2xl">
          Plus supporting infrastructure: custom 404, dynamic OG image, favicon (gold
          &ldquo;11&rdquo; badge), apple-touch-icon, sitemap.xml, robots.txt, and Restaurant
          JSON-LD schema injected in <code className="text-gold-luxe">RootLayout</code>.
        </p>
      </Section>

      {/* 15 Next steps */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col gap-8">
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
            15 · Next steps
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.02] max-w-3xl">
            If the direction feels right, we move to{' '}
            <span className="italic text-gold-luxe">build.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            The concept above covers the structural decisions and visual system. From sign-off,
            we&apos;ll stage the full site, wire the menu and daily features, hook up OpenTable
            for both locations, and walk the team through the CMS before launch.
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

function PagePreview({
  src,
  path,
  heightClass = 'h-[360px] sm:h-[480px] md:h-[560px] lg:h-[630px]'
}: {
  src: string;
  path: string;
  heightClass?: string;
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-navy-deep">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-navy-deep/80">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
        </div>
        <div className="flex-1 bg-background rounded-md border border-white/10 px-3 py-1.5 font-label text-[10px] text-white/40 text-center font-bold tracking-widest truncate">
          ELEVENSIXTY.CA{path}
        </div>
        <span className="material-symbols-outlined text-white/30 text-base hidden sm:inline">
          open_in_new
        </span>
      </div>
      <div className={`relative w-full overflow-hidden bg-background ${heightClass}`}>
        <iframe
          src={src}
          title={`Preview — ${path}`}
          aria-label={`Zoomed-out preview of ${path}`}
          loading="lazy"
          className="absolute top-0 left-0 origin-top-left pointer-events-none border-0"
          style={{
            width: '1440px',
            height: '900px',
            transform: 'scale(0.70)',
            transformOrigin: 'top left'
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />
      </div>
    </div>
  );
}

function LabelledPreview({
  label,
  tall,
  children
}: {
  label: string;
  tall?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold">
        {label}
      </span>
      <div
        className={`bg-background border border-white/10 rounded-2xl px-5 py-3 ${
          tall ? 'min-h-[120px]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

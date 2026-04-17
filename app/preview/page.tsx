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
      'Italic gold accents on headlines. Dotted-leader pricing on menus. Mixed-case titles. Magazine asymmetry on the field notes index. Quiet details that add up.'
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

const PHOTOGRAPHY = [
  { src: '/images/interior-bar.jpg', label: 'Interior hero' },
  { src: '/images/grilled-steak.jpg', label: 'Steak' },
  { src: '/images/bbq-ribs.jpg', label: 'Ribs' },
  { src: '/images/pub-food.jpg', label: 'Guests dining' },
  { src: '/images/lunch-sandwich.jpg', label: 'Lunch' },
  { src: '/images/dessert.jpg', label: 'Dessert' },
  { src: '/images/cocktail.jpg', label: 'Cocktail' },
  { src: '/images/burger-fries.jpg', label: 'Burger' },
  { src: '/images/family-dining.jpg', label: 'Family' },
  { src: '/images/private-event.jpg', label: 'Private event' },
  { src: '/images/birthday-cake.jpg', label: 'Birthday' },
  { src: '/images/happy-hour.jpg', label: 'Happy hour' },
  { src: '/images/restaurant-exterior.jpg', label: 'Exterior' },
  { src: '/images/corporate-dinner.jpg', label: 'Corporate' },
  { src: '/images/sports-watch.jpg', label: 'Game day' }
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
  { path: '/contact-us/', label: 'Contact' },
  { path: '/articles/', label: 'Field Notes' }
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
    title: 'Reading progress',
    body:
      'Article pages render a 2px gold strip at the top that tracks scroll position.'
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
            What follows is the direction we&apos;re recommending — the brand tone, the
            typography system, the homepage flow, the menu experience, the reservation path, and
            the page-by-page treatments. Every screen is designed around two Ontario locations
            and the way guests actually use a neighbourhood bar &amp; grill.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-widest font-bold text-white/50 pt-6 border-t border-white/10">
            <span>01 · Direction</span>
            <span>02 · Brand system</span>
            <span>03 · Photography</span>
            <span>04 · Homepage</span>
            <span>05 · Tonight</span>
            <span>06 · Feature cards</span>
            <span>07 · Menu</span>
            <span>08 · Group events</span>
            <span>09 · Field Notes</span>
            <span>10 · Birthday Club</span>
            <span>11 · Contact</span>
            <span>12 · Locations</span>
            <span>13 · Reservations</span>
            <span>14 · Mobile</span>
            <span>15 · Motion</span>
            <span>16 · Sitemap</span>
            <span>17 · Next steps</span>
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

      {/* 03 Photography */}
      <Section
        index="03"
        label="Photography"
        title="The visual library."
      >
        <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed max-w-2xl -mt-4">
          Stock placeholders sit here until real brand photography arrives. Every image below is
          used on at least one page. Filenames match the variables in code, so swapping them for
          final shots is a drop-in.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
          {PHOTOGRAPHY.map((p) => (
            <div
              key={p.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-3 font-label text-[10px] uppercase tracking-widest text-white/80 font-bold">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Homepage */}
      <Section index="04" label="Homepage" title="Hero, rail, and the night.">
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

      {/* 05 Tonight */}
      <Section index="05" label="Tonight" title="A live card that knows what day it is.">
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

      {/* 06 Feature cards */}
      <Section index="06" label="Feature cards" title="Photo tiles, topic-specific labels.">
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

      {/* 07 Menu */}
      <Section index="07" label="Menu" title="Editorial, not a spreadsheet.">
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

      {/* 08 Group events */}
      <Section index="08" label="Group events" title="One hero stat, two supporting tiles.">
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

      {/* 09 Field Notes */}
      <Section index="09" label="Field Notes" title="Magazine asymmetry for the blog.">
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bbq-ribs.jpg"
              alt="Featured article"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold block mb-4">
                Menu
              </span>
              <h3 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                The slow-smoke method behind our ribs
              </h3>
              <p className="font-body text-base text-white/80 max-w-xl font-medium leading-relaxed mt-4 line-clamp-2">
                Here is how we cook them, why it takes most of the day, and what we learned to
                leave alone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/interior-bar.jpg"
                alt="Tall article"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold block mb-3">
                  Locations
                </span>
                <h4 className="font-headline text-3xl font-bold text-white tracking-tight leading-tight">
                  1160 Wellington Road: the short history
                </h4>
              </div>
            </div>
            {['grilled-steak', 'family-dining'].map((img, i) => (
              <div
                key={img}
                className="bg-navy-deep/40 border border-white/5 rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${img}.jpg`}
                    alt="Article"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3 mt-6">
                  <h4 className="font-headline text-xl font-bold text-white tracking-tight">
                    {i === 0 ? 'Why we source Ontario beef' : 'How we think about family dining'}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed line-clamp-2">
                    {i === 0
                      ? 'A short essay on the decision we made in our second year.'
                      : 'Families are the backbone of both locations.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Annotation>
          Hero featured article spans full width with a 16/9 (21/9 on md+) frame. Below: a tall
          card that spans 2×2 pairs with two standard cards stacked beside it. Remaining
          articles fall into a standard 3-col grid under this pattern.
        </Annotation>
      </Section>

      {/* 10 Birthday Club */}
      <Section index="10" label="Birthday Club" title="Benefits up front, form below.">
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

      {/* 11 Contact */}
      <Section index="11" label="Contact" title="Form, dropdowns, focus ring.">
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

      {/* 12 Locations — map as background */}
      <Section index="12" label="Locations" title="Map as background, info floats on top.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { city: 'London', addr: '1160 Wellington Road', phone: '(519) 681-2669' },
            { city: 'St Thomas', addr: '1093 Talbot St', phone: '519-631-8282' }
          ].map((l) => (
            <div
              key={l.city}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/restaurant-exterior.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 flex flex-col gap-3">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  {l.city === 'London' ? 'Wellington Rd' : 'Talbot St'}
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
          On the real site these are live Google Maps iframes — the placeholder above is a
          grayscale photo for presentation purposes. Address, phone, email, and a get-directions
          link layer on top of a navy gradient so the text stays legible no matter what the map
          shows.
        </Annotation>
      </Section>

      {/* 13 Reservations */}
      <Section index="13" label="Reservations" title="Two clicks to OpenTable.">
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

      {/* 14 Mobile */}
      <Section
        index="14"
        label="Mobile"
        title="A full-screen overlay, not a cramped pill."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ul className="flex flex-col gap-5 font-body text-base text-on-surface-variant leading-relaxed">
            <ListRow>
              Hamburger opens a portal-rendered overlay — lives outside the nav&apos;s
              backdrop-filter so nothing clips it.
            </ListRow>
            <ListRow>
              Links grouped into three rails (Menus / Visit / More). A gold vertical bar marks
              the active page.
            </ListRow>
            <ListRow>Live Open / Closed status near the top of the overlay.</ListRow>
            <ListRow>
              Bottom splits into &ldquo;Reserve on OpenTable&rdquo; (London + St Thomas) and
              &ldquo;Or call directly&rdquo;.
            </ListRow>
            <ListRow>Sticky bottom bar on menu pages keeps both call numbers visible.</ListRow>
            <ListRow>
              Scroll-to-top button appears past 600px so long menus never trap the user at the
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

      {/* 15 Motion */}
      <Section
        index="15"
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

      {/* 16 Sitemap */}
      <Section index="16" label="Sitemap" title="Every page at a glance.">
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

      {/* 17 Next steps */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col gap-8">
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
            17 · Next steps
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

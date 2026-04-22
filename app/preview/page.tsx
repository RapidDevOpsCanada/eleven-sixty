import Link from 'next/link';
import type { Metadata } from 'next';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';

export const metadata: Metadata = {
  title: 'Design Concept — Eleven Sixty',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: undefined }
};

const TODAY = '2026-04-17';

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-[10px] font-black tracking-tight">
              1160
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

      {/* Homepage mockup — hero visual */}
      <section className="px-6 md:px-12 pt-10 md:pt-14 pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Proposed homepage
            </span>
            <span className="h-[1px] flex-1 bg-white/10" />
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold hidden md:inline">
              elevensixty.ca
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-navy-deep">
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-navy-deep/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-white/15" aria-hidden="true" />
              </div>
              <div className="flex-1 bg-background rounded-md border border-white/10 px-3 py-1.5 font-label text-[10px] text-white/40 text-center font-bold tracking-widest">
                ELEVENSIXTY.CA
              </div>
            </div>
            <div className="relative w-full overflow-hidden h-[500px] sm:h-[560px] md:h-[600px] lg:h-[630px] bg-background">
              {/* Desktop: full-width iframe scaled down to fit */}
              <iframe
                src="/"
                title="Eleven Sixty homepage concept"
                loading="lazy"
                className="hidden md:block absolute top-0 left-0 origin-top-left pointer-events-none border-0"
                style={{
                  width: '1440px',
                  height: '900px',
                  transform: 'scale(0.70)',
                  transformOrigin: 'top left'
                }}
              />
              {/* Mobile: iframe renders the site's own mobile layout at 1:1 */}
              <iframe
                src="/"
                title="Eleven Sixty homepage concept (mobile)"
                loading="lazy"
                className="md:hidden absolute inset-0 w-full h-full pointer-events-none border-0"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Cover line */}
      <section className="px-6 md:px-12 pt-10 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <span className="font-label text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold">
            For Eleven Sixty Bar &amp; Grill
          </span>
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white tracking-tight leading-[1.02] max-w-3xl">
            A website designed to reserve tables, run your nightly specials, and{' '}
            <span className="italic text-gold-luxe">fill the private space.</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            What follows is what we&apos;re proposing to build. Four things to walk through: how
            guests would book, how tonight&apos;s specials would run themselves, how the private
            space would fill up, and how the whole thing would feel on a phone — where most of
            your guests are.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 pt-6 border-t border-white/10">
            {[
              { stat: '11', label: 'Pages in scope' },
              { stat: '6', label: 'Menus' },
              { stat: '2', label: 'Locations' },
              { stat: 'Live', label: 'Daily specials' },
              { stat: 'Mobile', label: 'First' }
            ].map((s) => (
              <div
                key={s.label}
                className="bg-navy-deep/60 border border-white/5 rounded-2xl px-4 py-5 flex flex-col gap-1"
              >
                <span className="font-headline text-3xl md:text-4xl font-extrabold text-gold-luxe tracking-tight leading-none">
                  {s.stat}
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold mt-2">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every page in scope — page thumbnails */}
      <section className="px-6 md:px-12 pb-20 md:pb-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex items-baseline gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Every page in scope
            </span>
            <span className="h-[1px] flex-1 bg-white/10" />
          </div>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            Eleven pages in the full scope. The homepage is up top — below is how the rest would
            look: menus, events, birthday club, and contact — all using the same design system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { src: '/dinner-menus/', title: 'Dinner menu', sub: 'Plus five other menus' },
              { src: '/group-events/', title: 'Group events', sub: 'Private-space inquiries' },
              { src: '/birthday-club/', title: 'Birthday Club', sub: 'Member signups' },
              { src: '/contact-us/', title: 'Contact', sub: 'Both locations + form' }
            ].map((p) => (
              <div
                key={p.src}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 bg-navy-deep"
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-navy-deep/80">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-white/15" aria-hidden="true" />
                    <span className="w-2 h-2 rounded-full bg-white/15" aria-hidden="true" />
                    <span className="w-2 h-2 rounded-full bg-white/15" aria-hidden="true" />
                  </div>
                  <div className="flex-1 font-label text-[9px] text-white/40 text-center font-bold tracking-widest truncate">
                    ELEVENSIXTY.CA{p.src}
                  </div>
                </div>
                <div className="relative w-full overflow-hidden h-[420px] sm:h-[280px] bg-background">
                  <iframe
                    src={p.src}
                    title={`Preview — ${p.title}`}
                    loading="lazy"
                    className="hidden sm:block absolute top-0 left-0 origin-top-left pointer-events-none border-0"
                    style={{
                      width: '1440px',
                      height: '900px',
                      transform: 'scale(0.38)',
                      transformOrigin: 'top left'
                    }}
                  />
                  <iframe
                    src={p.src}
                    title={`Preview — ${p.title} (mobile)`}
                    loading="lazy"
                    className="sm:hidden absolute inset-0 w-full h-full pointer-events-none border-0"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />
                </div>
                <div className="px-5 py-4 border-t border-white/5 flex items-baseline justify-between gap-3">
                  <h3 className="font-headline text-base font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <span className="font-body text-xs text-white/50 font-medium">{p.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Reservations */}
      <Section
        kicker="01 · Reservations"
        title="Every page would have a one-click reserve button."
        lead="Up top in the navigation bar, always visible. One tap would open a panel to pick London or St Thomas — then OpenTable takes over from there."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="bg-navy-deep border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="px-5 py-4 border-b border-white/5">
              <span className="font-label text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">
                Reserve on OpenTable
              </span>
            </div>
            <a
              href={OPENTABLE_LONDON}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-headline text-lg font-bold text-white">London</div>
                  <div className="font-body text-xs text-white/60">1160 Wellington Rd</div>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-base">
                  open_in_new
                </span>
              </div>
            </a>
            <a
              href={OPENTABLE_ST_THOMAS}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-headline text-lg font-bold text-white">St Thomas</div>
                  <div className="font-body text-xs text-white/60">1093 Talbot St</div>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-base">
                  open_in_new
                </span>
              </div>
            </a>
          </div>

          <ul className="flex flex-col gap-4">
            <Bullet>Reserve button would sit in the top right of every page.</Bullet>
            <Bullet>
              On a phone, the hamburger menu would carry the same two locations — Reserve London
              and Reserve St Thomas — plus both direct phone numbers.
            </Bullet>
            <Bullet>
              Both links would go straight to your real OpenTable availability — the site
              wouldn&apos;t hold any booking logic, so you&apos;d run reservations exactly the
              way you do today.
            </Bullet>
            <Bullet>
              The buttons above go to your live OpenTable pages — click to preview the experience
              a guest would get.
            </Bullet>
          </ul>
        </div>
      </Section>

      {/* 02 Daily features */}
      <Section
        kicker="02 · Daily features"
        title="Tonight's specials, set to run themselves."
        lead="Your weekly lineup would be set once. The homepage would then show tonight's feature automatically — Mule Tuesday, Martini Wednesday, the Thursday prix-fixe — and flip to the next one at midnight. Change the list once, every page updates."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DayCard
            day="Tuesday"
            feature="Mules"
            detail="Your choice: 1160 · Irish · Canadian · Italian."
            price="$7"
          />
          <DayCard
            day="Wednesday"
            feature="Martinis"
            detail="1160 Pinetini · Espresso · Chocolate · Yuzu Lemon Drop."
            price="$8"
            highlighted
          />
          <DayCard
            day="Thursday"
            feature="Three-course prix fixe"
            detail="Peller Chardonnay or Cab/Merlot ½ price on bottles."
            price="$42"
          />
          <DayCard
            day="Fri · Sat"
            feature="Happy hour steps up"
            detail="No weekly feature needed. The weekend fills itself."
            price="—"
          />
        </div>

        <div className="bg-navy-deep/40 border border-white/5 rounded-2xl p-5 md:p-6 flex items-start gap-4 mt-2">
          <span className="material-symbols-outlined text-gold-luxe text-2xl shrink-0">
            edit
          </span>
          <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
            <span className="text-white font-bold">You&apos;d update specials in one place.</span>{' '}
            One short list — change it and every page would update. We&apos;d walk you through it
            in 10 minutes at handoff, and write it down so you&apos;d never need us for it again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="bg-navy-deep border border-white/10 rounded-3xl p-7 flex flex-col gap-3">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-luxe font-bold">
              Happy hour · every day
            </span>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight">
              3–5pm &amp; 8pm–close
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              Half-priced apps, $6 domestic pints, $10 off wine bottles, half-price tequila.
              Would sit beside tonight&apos;s feature, always visible on the homepage.
            </p>
          </div>
          <div className="bg-navy-deep border border-white/10 rounded-3xl p-7 flex flex-col gap-3">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-luxe font-bold">
              Open / closed · live
            </span>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight">
              Your site would know your hours.
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              A green dot would read &ldquo;Open · closes 9pm&rdquo; when you are, and the next
              opening time when you aren&apos;t. Guests would never have to guess.
            </p>
          </div>
          <div className="bg-navy-deep border border-white/10 rounded-3xl p-7 flex flex-col gap-3">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-luxe font-bold">
              Built to be found
            </span>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight">
              When someone searches Eleven Sixty, you&apos;d show up.
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              Proper hours, addresses, menu schema, review links, and share previews — we&apos;d
              wire it in so Google and social show your site, not the competition&apos;s.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 Group events + Birthday Club */}
      <Section
        kicker="03 · Events"
        title="Two streams to bring people back."
        lead="A dedicated page for group events with an inquiry form that would drop structured leads in your inbox. A Birthday Club that would quietly fill seats on the quiet nights."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-5 justify-between min-h-[320px]">
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-gold-luxe text-4xl">groups</span>
              <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
                Private space
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="font-headline text-[6rem] md:text-[10rem] leading-none font-extrabold text-gold-luxe tracking-[-0.05em]">
                45
              </span>
              <p className="font-body text-lg text-on-surface-variant font-medium leading-relaxed max-w-md">
                Corporate lunches, birthdays, fundraisers. Inquiries would land with date,
                headcount, occasion, and notes — ready for you to quote.
              </p>
            </div>
          </div>
          <div className="bg-navy-deep border border-white/5 rounded-3xl p-8 flex flex-col gap-3">
            <span className="material-symbols-outlined text-gold-luxe text-3xl">cake</span>
            <h3 className="font-headline text-xl font-bold text-white tracking-tight">
              Birthday Club signup
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              Name, email, birthday. One form, one data point, one reason for a regular to come
              back every year.
            </p>
          </div>
          <div className="bg-navy-deep border border-white/5 rounded-3xl p-8 flex flex-col gap-3">
            <span className="material-symbols-outlined text-gold-luxe text-3xl">mail</span>
            <h3 className="font-headline text-xl font-bold text-white tracking-tight">
              Inquiry forms
            </h3>
            <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
              Contact and group-events forms would collect the information your team actually
              needs — no free-text phone tag.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 Mobile */}
      <Section
        kicker="04 · On their phone"
        title="Most of your guests are on phones."
        lead="Here's what they'd see. The menu would open as a full-screen panel, reserve buttons would sit at the bottom where thumbs live, and a sticky bar would keep both phone numbers one tap away while they read the menu."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ul className="flex flex-col gap-4">
            <Bullet>Tap the menu icon, see every page — not a tiny dropdown.</Bullet>
            <Bullet>Both locations&apos; reserve and call buttons would sit at the bottom.</Bullet>
            <Bullet>
              The green &ldquo;Open&rdquo; dot would show up inside the menu so guests knew
              before they tried to book.
            </Bullet>
            <Bullet>
              A gold bar would mark the page they&apos;re on so they don&apos;t lose track.
            </Bullet>
          </ul>
          <div className="relative mx-auto w-full max-w-[340px] aspect-[9/20] rounded-[3rem] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl shadow-black/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/interior-bar.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-xl" />
            <div className="relative h-full px-4 pt-4 pb-3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded-full bg-gold-luxe text-navy-deep text-[8px] font-black flex items-center justify-center tracking-tight">
                    1160
                  </span>
                  <span className="text-sm font-headline font-bold text-white tracking-tight">
                    ELEVEN<span className="text-gold-luxe">SIXTY</span>
                  </span>
                </div>
                <span className="material-symbols-outlined text-white/80 text-xl">close</span>
              </div>

              <div className="inline-flex items-center gap-2 font-label text-[9px] uppercase tracking-[0.2em] font-bold text-white">
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                </span>
                Open · closes 9pm
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-label text-[8px] uppercase tracking-[0.25em] text-gold-luxe font-bold mb-0.5">
                  Menus
                </span>
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
                      <span className="absolute left-0 top-[3px] w-[3px] h-3.5 rounded-full bg-gold-luxe" />
                    )}
                    <span
                      className={`font-headline text-[13px] font-bold tracking-tight leading-tight ${
                        m.active ? 'text-gold-luxe' : 'text-white'
                      }`}
                    >
                      {m.l}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-label text-[8px] uppercase tracking-[0.25em] text-gold-luxe font-bold mb-0.5">
                  Visit
                </span>
                {['Birthday Club', 'Group Events', 'Contact Us', 'Locations'].map((v) => (
                  <span
                    key={v}
                    className="pl-2.5 font-headline text-[13px] font-bold tracking-tight text-white leading-tight"
                  >
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-white/10">
                <span className="font-label text-[8px] uppercase tracking-[0.25em] text-white/60 font-bold">
                  Reserve on OpenTable
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  <span className="bg-gold-luxe text-navy-deep font-label text-[8px] uppercase tracking-wider font-bold px-1 py-1.5 rounded-full text-center">
                    London ↗
                  </span>
                  <span className="border border-white/20 text-white font-label text-[8px] uppercase tracking-wider font-bold px-1 py-1.5 rounded-full text-center">
                    St Thomas ↗
                  </span>
                </div>
                <span className="font-label text-[8px] uppercase tracking-[0.25em] text-white/60 font-bold mt-1">
                  Or call directly
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  <span className="border border-white/10 text-white font-label text-[8px] uppercase tracking-wider font-bold px-1 py-1.5 rounded-full text-center">
                    519-681-2669
                  </span>
                  <span className="border border-white/10 text-white font-label text-[8px] uppercase tracking-wider font-bold px-1 py-1.5 rounded-full text-center">
                    519-631-8282
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <section className="px-6 md:px-12 py-24 md:py-28">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="flex items-baseline gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              What happens next
            </span>
            <span className="h-[1px] flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                n: '01',
                title: 'You approve',
                body: 'The direction feels right. Green light the concept.'
              },
              {
                n: '02',
                title: 'We wire it in',
                body:
                  'Real OpenTable accounts, your current weekly features, confirmed hours, your domain.'
              },
              {
                n: '03',
                title: 'Live in about a week',
                body:
                  'The site goes public. We walk your team through updating specials — 10 minutes at handoff.'
              }
            ].map((s, i) => (
              <div
                key={s.n}
                className="relative bg-navy-deep border border-white/10 rounded-3xl p-8 flex flex-col gap-3"
              >
                <span className="font-headline text-4xl font-extrabold text-gold-luxe tracking-tight leading-none">
                  {s.n}
                </span>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight mt-2">
                  {s.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
                  {s.body}
                </p>
                {i < 2 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border border-white/10 items-center justify-center z-10"
                  >
                    <span className="material-symbols-outlined text-gold-luxe text-sm">
                      east
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-14 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-md">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-xs font-black">
                G
              </span>
              <span className="font-headline text-lg font-bold text-white tracking-tight">
                Grizzly <span className="text-gold-luxe">Agency</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/60 font-medium leading-relaxed">
              Design &amp; build for independent restaurants and bars. Concept presented to
              Eleven Sixty on {TODAY}.
            </p>
            <a
              href="mailto:grizzlyagencyhello@gmail.com"
              className="font-label text-xs uppercase tracking-[0.2em] text-white hover:text-gold-luxe transition-colors font-bold"
            >
              grizzlyagencyhello@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-5 font-label text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
            <span>Confidential</span>
            <span className="h-3 w-px bg-white/15" />
            <Link href="/" className="hover:text-gold-luxe transition-colors">
              Open the site →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  kicker,
  title,
  lead,
  children
}: {
  kicker: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-b border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              {kicker}
            </span>
            <span className="h-[1px] flex-1 bg-white/10" />
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
            {title}
          </h2>
          {lead && (
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
              {lead}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-2 w-2 h-2 rounded-full bg-gold-luxe flex-shrink-0" />
      <span className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
        {children}
      </span>
    </li>
  );
}

function DayCard({
  day,
  feature,
  detail,
  price,
  highlighted = false
}: {
  day: string;
  feature: string;
  detail: string;
  price: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-7 flex flex-col gap-3 border ${
        highlighted
          ? 'bg-navy-deep border-gold-luxe/40 shadow-xl shadow-gold-luxe/5'
          : 'bg-navy-deep/60 border-white/5'
      }`}
    >
      {highlighted && (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 font-label text-[9px] uppercase tracking-[0.2em] font-bold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Showing tonight
        </span>
      )}
      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
        {day}
      </span>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-headline text-xl md:text-2xl font-bold text-white tracking-tight">
          {feature}
        </h3>
        <span className="font-headline text-2xl font-extrabold text-gold-luxe tracking-tight">
          {price}
        </span>
      </div>
      <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
        {detail}
      </p>
    </div>
  );
}

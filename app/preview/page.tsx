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

      {/* Homepage mockup — hero visual */}
      <section className="px-6 md:px-12 pt-10 md:pt-14 pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Your new homepage
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
            <div className="relative w-full overflow-hidden h-[360px] sm:h-[480px] md:h-[600px] lg:h-[630px] bg-background">
              <iframe
                src="/"
                title="Eleven Sixty homepage concept"
                loading="lazy"
                className="absolute top-0 left-0 origin-top-left pointer-events-none border-0"
                style={{
                  width: '1440px',
                  height: '900px',
                  transform: 'scale(0.70)',
                  transformOrigin: 'top left'
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Cover line */}
      <section className="px-6 md:px-12 pt-10 pb-16 md:pb-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <span className="font-label text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold">
            For Eleven Sixty Bar &amp; Grill
          </span>
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white tracking-tight leading-[1.02] max-w-3xl">
            A website that reserves tables, runs your nightly specials, and{' '}
            <span className="italic text-gold-luxe">fills the private space.</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            Three things to show you below: how guests book, how tonight&apos;s specials run
            themselves, and how the private space fills up. Then how it feels on a phone — where
            most of your guests are.
          </p>
        </div>
      </section>

      {/* 01 Reservations */}
      <Section
        kicker="01 · Reservations"
        title="Every page has a one-click reserve button."
        lead="Up top in the navigation bar, always visible. One tap opens a panel to pick London or St Thomas — then OpenTable takes over from there."
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
            <Bullet>Reserve button is in the top right of every page.</Bullet>
            <Bullet>
              On a phone, the hamburger menu has the same two locations — Reserve London and
              Reserve St Thomas — plus both direct phone numbers.
            </Bullet>
            <Bullet>
              Both links go straight to your real OpenTable availability — the site doesn&apos;t
              hold any booking logic, so you run reservations exactly the way you do today.
            </Bullet>
            <Bullet>
              The buttons above are live. Click them now to see the experience a guest gets.
            </Bullet>
          </ul>
        </div>
      </Section>

      {/* 02 Daily features */}
      <Section
        kicker="02 · Daily features"
        title="Tonight's specials, running themselves."
        lead="Your weekly lineup is set once. The homepage then shows tonight's feature automatically — Mule Tuesday, Martini Wednesday, the Thursday prix-fixe — and flips to the next one at midnight. Change the list once and every page updates."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-navy-deep border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-4">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-luxe font-bold">
              Happy hour · every day
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
              3–5pm &amp; 8pm–close
            </h3>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              Half-priced apps, $6 domestic pints, $10 off wine bottles, half-price tequila
              shots. Sits beside tonight&apos;s feature on the homepage — always visible.
            </p>
          </div>
          <div className="bg-navy-deep border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-4">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-luxe font-bold">
              Open / closed · live
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
              Your site knows your hours.
            </h3>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              A green dot says &ldquo;Open · closes 9pm&rdquo; when you&apos;re open, and
              &ldquo;Closed · opens 11:30am tomorrow&rdquo; when you&apos;re not. Guests never
              guess.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 Group events + Birthday Club */}
      <Section
        kicker="03 · Events"
        title="Two streams that bring people back."
        lead="A dedicated page for group events with an inquiry form that drops structured leads in your inbox. A Birthday Club that quietly fills seats on the quiet nights."
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
                Corporate lunches, birthdays, fundraisers. Inquiries come in with date, headcount,
                occasion, and notes — ready to quote.
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
              Contact and group-events forms collect the information your team actually needs —
              no free-text phone tag.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 Mobile */}
      <Section
        kicker="04 · On their phone"
        title="Most of your guests are on phones."
        lead="Here's what they see. The menu opens as a full-screen panel, the reserve buttons sit at the bottom where thumbs live, and a sticky bar keeps both phone numbers one tap away while they read the menu."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ul className="flex flex-col gap-4">
            <Bullet>Tap the menu icon, see every page — not a tiny dropdown.</Bullet>
            <Bullet>Both locations&apos; reserve and call buttons always at the bottom.</Bullet>
            <Bullet>
              The green &ldquo;Open&rdquo; dot shows up inside the menu so guests know before
              they try to book.
            </Bullet>
            <Bullet>
              A gold bar marks the page they&apos;re on so they don&apos;t lose track.
            </Bullet>
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
            <div className="relative h-full p-5 flex flex-col gap-4">
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
              <div className="flex flex-col gap-1.5">
                {[
                  { l: 'Lunch', active: false },
                  { l: 'Dinner', active: true },
                  { l: 'Desserts', active: false },
                  { l: 'Drinks', active: false },
                  { l: 'Features', active: false }
                ].map((m) => (
                  <div key={m.l} className="relative pl-3">
                    {m.active && (
                      <span className="absolute left-0 top-1 w-[3px] h-4 rounded-full bg-gold-luxe" />
                    )}
                    <span
                      className={`font-headline text-base font-bold tracking-tight ${
                        m.active ? 'text-gold-luxe' : 'text-white'
                      }`}
                    >
                      {m.l}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </Section>

      {/* Ready to launch */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col gap-6">
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
            Ready when you are
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.02] max-w-3xl">
            If the direction feels right,{' '}
            <span className="italic text-gold-luxe">we go live.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
            Say the word and we wire in the real OpenTable accounts, load your current weekly
            features, confirm your hours, and walk you through updating specials. We can be live
            in about a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <a
              href="mailto:grizzlyagencyhello@gmail.com?subject=Eleven%20Sixty%20%E2%80%94%20let%27s%20launch"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Let&apos;s launch
            </a>
            <a
              href="mailto:grizzlyagencyhello@gmail.com?subject=Eleven%20Sixty%20%E2%80%94%20questions"
              className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              I have questions
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between font-label text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <span>Confidential · Concept for Eleven Sixty Bar &amp; Grill</span>
          <Link href="/" className="hover:text-gold-luxe transition-colors">
            Open the site →
          </Link>
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

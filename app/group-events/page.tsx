import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Group Events — Eleven Sixty Bar & Grill',
  description:
    'Eleven Sixty Bar & Grill is the perfect venue for your next corporate function, fundraiser, private party, or special event. Private room for up to 45.'
};

const eventTypes = [
  {
    icon: 'corporate_fare',
    title: 'Corporate Function',
    description: 'Off-sites, year-end parties, client dinners, and team lunches.'
  },
  {
    icon: 'favorite',
    title: 'Fundraiser',
    description: 'A private room and a shared table designed for the room to focus.'
  },
  {
    icon: 'celebration',
    title: 'Private Party',
    description: 'Birthdays, anniversaries, retirements — up to 45 of your favourite people.'
  },
  {
    icon: 'sports_bar',
    title: 'Special Event',
    description: 'Big-screen TV for the game, set menus, and a room that knows how to host.'
  }
];

export default function GroupEventsPage() {
  return (
    <>
      <Nav />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
                Celebrate Group Events
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              Private <span className="italic text-gold-luxe">room.</span>
              <br />
              Big <span className="italic text-gold-luxe">screen.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
              Eleven Sixty Bar &amp; Grill is the perfect venue for your next corporate
              function, fundraiser, private party, or special event. Our private room will
              ensure your next event is one you will remember.
            </p>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="A private dining room set for a group"
              src="https://loremflickr.com/cache/resized/65535_53532575812_43e90bbc3b_h_1280_720_nofilter.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-4">
            <span className="material-symbols-outlined text-gold-luxe text-5xl">groups</span>
            <span className="font-headline text-6xl font-extrabold text-white tracking-tighter">
              45
            </span>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              Maximum capacity in the private room.
            </p>
          </div>
          <div className="md:col-span-1 bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-4">
            <span className="material-symbols-outlined text-gold-luxe text-5xl">tv</span>
            <span className="font-headline text-3xl font-bold text-white tracking-tight">
              Big-Screen TV
            </span>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              For the presentation, the highlight reel, or the big game.
            </p>
          </div>
          <div className="md:col-span-1 bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-4">
            <span className="material-symbols-outlined text-gold-luxe text-5xl">restaurant</span>
            <span className="font-headline text-3xl font-bold text-white tracking-tight">
              Custom Menus
            </span>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              Choose any of our set menus — or let us build one around your event.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="font-headline text-4xl font-bold text-white tracking-tight">
            Built for any occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="bg-navy-deep/40 border border-white/5 rounded-3xl p-8 flex flex-col gap-4"
              >
                <span className="material-symbols-outlined text-gold-luxe text-3xl">{e.icon}</span>
                <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                  {e.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[260px] md:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="The dining room at Eleven Sixty"
              src="https://loremflickr.com/cache/resized/65535_54562342175_1a4b15ec00_k_1280_720_nofilter.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-deep/20 to-navy-deep" />
          </div>
          <div className="p-10 md:p-14 flex flex-col gap-5 justify-center">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
              Ready to book?
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
              Call or email for more details.
            </h2>
            <p className="font-body text-on-surface-variant font-medium leading-relaxed">
              Tell us the date, the headcount, and the occasion — we&apos;ll walk you through
              available menus and the room.
            </p>
            <div className="flex flex-col gap-3 pt-3">
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
              <a
                href="mailto:info@elevensixty.ca"
                className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center"
              >
                info@elevensixty.ca
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Group Events — Eleven Sixty Bar & Grill',
  description:
    'Eleven Sixty Bar & Grill is the perfect venue for your next corporate function, fundraiser, private party, or special event. Private room for up to 45.'
};

const eventTypes = [
  {
    image: '/images/corporate-dinner.jpg',
    alt: 'A corporate dinner table',
    title: 'Corporate Function',
    description: 'Off-sites, year-end parties, client dinners, and team lunches.'
  },
  {
    image: '/images/family-dining.jpg',
    alt: 'A large table gathering',
    title: 'Fundraiser',
    description: 'A private room and a shared table designed for the room to focus.'
  },
  {
    image: '/images/birthday-cake.jpg',
    alt: 'A celebration in progress',
    title: 'Private Party',
    description: 'Birthdays, anniversaries, retirements — up to 45 of your favourite people.'
  },
  {
    image: '/images/sports-watch.jpg',
    alt: 'Watching the game at the bar',
    title: 'Special Event',
    description: 'Big-screen TV for the game, set menus, and a room that knows how to host.'
  }
];

export default function GroupEventsPage() {
  return (
    <>
      <Nav />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/30" />
              <span className="font-label uppercase tracking-[0.4em] text-white/60 text-[11px] font-bold">
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
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="A private dining room set for a group"
              src="/images/private-event.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={e.alt}
                  src={e.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/10" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end gap-2">
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight leading-tight">
                    {e.title}
                  </h3>
                  <p className="font-body text-sm text-white/75 font-medium leading-relaxed">
                    {e.description}
                  </p>
                </div>
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
              src="/images/interior-bar.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-deep/20 to-navy-deep" />
          </div>
          <div className="p-10 md:p-14 flex flex-col gap-5 justify-center">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
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

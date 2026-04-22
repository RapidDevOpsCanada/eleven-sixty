import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Group Events — Eleven Sixty Bar & Grill',
  description:
    'Eleven Sixty Bar & Grill is the perfect venue for your next corporate function, fundraiser, private party, or special event. Private dining for up to 45.'
};

const eventTypes = [
  {
    image: '/images/corporate-dinner.jpg',
    alt: 'Shared appetizer platter',
    title: 'Corporate Function',
    description: 'Off-sites, year-end parties, client dinners, and team lunches.'
  },
  {
    image: '/images/family-dining.jpg',
    alt: 'A plated dish',
    title: 'Fundraiser',
    description: 'A private space and a shared table designed to help the group focus.'
  },
  {
    image: '/images/birthday-cake.jpg',
    alt: 'A plated dessert',
    title: 'Private Party',
    description: 'Birthdays, anniversaries, retirements — up to 45 of your favourite people.'
  },
  {
    image: '/images/sports-watch.jpg',
    alt: 'Chicken wings',
    title: 'Special Event',
    description: 'Big-screen TV for the game, set menus, and a space that knows how to host.'
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
              Private <span className="italic text-gold-luxe">space.</span>
              <br />
              Big <span className="italic text-gold-luxe">screen.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
              Eleven Sixty Bar &amp; Grill is the perfect venue for your next corporate
              function, fundraiser, private party, or special event. Our private space will
              ensure your next event is one you will remember.
            </p>
          </div>
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="A fine-dining plate"
              src="/images/private-event.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-navy-deep border border-white/5 rounded-3xl p-10 md:p-14 flex flex-col gap-6 justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <span className="material-symbols-outlined text-gold-luxe text-5xl">groups</span>
              <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
                Private space capacity
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-headline text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] leading-none font-extrabold text-gold-luxe tracking-[-0.05em]">
                45
              </span>
              <p className="font-body text-lg text-on-surface-variant font-medium leading-relaxed max-w-md">
                The private space seats up to 45 — corporate lunches, birthdays, fundraisers,
                and the kind of night that deserves its own door.
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
              Choose any of our set menus — or let us build one around your event.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
              Events We Host
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Built for any <span className="italic text-gold-luxe">occasion.</span>
            </h2>
            <p className="font-body text-base text-on-surface-variant font-medium leading-relaxed">
              Four common shapes. We&apos;ll tailor the space, the menu, and the tempo to match
              what you&apos;re planning.
            </p>
          </div>
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
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end gap-3">
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight leading-tight">
                    {e.title}
                  </h3>
                  <p className="font-body text-sm text-white/80 font-medium leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold">
              Start an inquiry
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tell us about your event
            </h2>
            <p className="font-body text-sm text-on-surface-variant italic font-medium">
              Submissions go to info@elevensixty.ca — the events team responds within 24 hours.
            </p>
          </div>

          <form
            className="flex flex-col gap-6"
            action="mailto:info@elevensixty.ca"
            method="POST"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event-contact"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Your Name <span className="text-error">*</span>
                </label>
                <input
                  id="event-contact"
                  name="contact-name"
                  type="text"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event-email"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Email <span className="text-error">*</span>
                </label>
                <input
                  id="event-email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event-date"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Event Date
                </label>
                <input
                  id="event-date"
                  name="event-date"
                  type="date"
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event-headcount"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Headcount
                </label>
                <input
                  id="event-headcount"
                  name="headcount"
                  type="number"
                  min={1}
                  max={45}
                  placeholder="1–45"
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event-occasion"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Occasion
                </label>
                <div className="relative">
                  <select
                    id="event-occasion"
                    name="occasion"
                    defaultValue=""
                    className="appearance-none w-full bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 pr-12 text-white font-body outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="corporate">Corporate</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="private-party">Private party</option>
                    <option value="special-event">Special event</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-luxe">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="event-location"
                className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
              >
                Preferred Location
              </label>
              <div className="relative">
                <select
                  id="event-location"
                  name="location"
                  defaultValue=""
                  className="appearance-none w-full bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 pr-12 text-white font-body outline-none transition-colors"
                >
                  <option value="" disabled>
                    Choose a location
                  </option>
                  <option value="london">London — 1160 Wellington Rd</option>
                  <option value="st-thomas">St Thomas — 1093 Talbot St</option>
                  <option value="either">Either location</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-luxe">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="event-notes"
                className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
              >
                Notes
              </label>
              <textarea
                id="event-notes"
                name="notes"
                rows={5}
                placeholder="Menu preferences, dietary needs, timing, anything else we should know."
                className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-4 text-white font-body outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all self-start"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto bg-navy-deep border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[260px] md:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Inside Eleven Sixty"
              src="/images/interior-bar.jpg"
              loading="lazy"
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
              available menus and the space.
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

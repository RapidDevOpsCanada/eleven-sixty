import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';
import { OPENTABLE_LONDON, OPENTABLE_ST_THOMAS } from '@/lib/booking';

export const metadata = {
  title: 'Contact Us — Eleven Sixty Bar & Grill',
  description:
    'Get in touch with Eleven Sixty in London or St Thomas. Email info@elevensixty.ca or call either location directly.'
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/30" />
              <span className="font-label uppercase tracking-[0.4em] text-white/60 text-[11px] font-bold">
                Get in Touch
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              Contact <span className="italic text-gold-luxe">Us</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
              Please feel free to contact us with any questions or feedback that you may have.
              We will try to get back to you as quickly as possible.
            </p>
          </div>
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Inside Eleven Sixty"
              src="/images/restaurant-exterior.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto bg-navy-deep border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl flex flex-col gap-2">
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold">
              Reserve on OpenTable
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">
              Pick your location. Book in two clicks.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={OPENTABLE_LONDON}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Reserve London
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
            <a
              href={OPENTABLE_ST_THOMAS}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/20 hover:border-gold-luxe text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Reserve St Thomas
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] border border-white/5 group">
              <LocationMap
                query="1160 Wellington Road London ON N6E 1M3"
                label="London"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 flex flex-col gap-3">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  Wellington Rd
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
                  London
                </h3>
                <div className="flex flex-col gap-1 font-body text-base text-white/80 font-medium leading-relaxed">
                  <a
                    href="https://maps.google.com/?q=1160+Wellington+Road+London+ON+N6E+1M3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto hover:text-white transition-colors"
                  >
                    1160 Wellington Road, London, ON N6E 1M3
                  </a>
                  <div className="flex gap-4 text-white/70">
                    <a
                      href="tel:+15196812669"
                      className="pointer-events-auto hover:text-white transition-colors"
                    >
                      (519) 681-2669
                    </a>
                    <span className="text-white/30">·</span>
                    <a
                      href="mailto:info@elevensixty.ca"
                      className="pointer-events-auto hover:text-white transition-colors"
                    >
                      info@elevensixty.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] border border-white/5 group">
              <LocationMap
                query="1093 Talbot St St Thomas ON N5P 1G4"
                label="St Thomas"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 flex flex-col gap-3">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  Talbot St
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
                  St Thomas
                </h3>
                <div className="flex flex-col gap-1 font-body text-base text-white/80 font-medium leading-relaxed">
                  <a
                    href="https://maps.google.com/?q=1093+Talbot+St+St+Thomas+ON+N5P+1G4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto hover:text-white transition-colors"
                  >
                    1093 Talbot St, St Thomas, ON N5P 1G4
                  </a>
                  <a
                    href="tel:+15196318282"
                    className="pointer-events-auto hover:text-white transition-colors text-white/70"
                  >
                    519-631-8282
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-deep/40 border border-white/5 rounded-3xl p-10 flex flex-col gap-5">
              <h3 className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold">
                Hours of Operation
              </h3>
              <div className="flex flex-col gap-3 font-body text-white/80">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="font-bold">Monday — Thursday</span>
                  <span>11:30am — 9pm</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="font-bold">Friday — Saturday</span>
                  <span>11:30am — 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Sunday</span>
                  <span>11:30am — 9pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-deep border border-white/5 rounded-3xl p-10 md:p-12 flex flex-col gap-6 h-fit">
            <div className="flex flex-col gap-2 mb-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
                Send us a message
              </h2>
              <p className="font-body text-sm text-on-surface-variant italic font-medium">
                Questions, feedback, reservation requests — all go to info@elevensixty.ca.
              </p>
            </div>

            <form
              className="flex flex-col gap-6"
              action="mailto:info@elevensixty.ca"
              method="POST"
              encType="text/plain"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Your Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Your Email <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Location <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    id="location"
                    name="location"
                    required
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
                  htmlFor="subject"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="appearance-none w-full bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-3 pr-12 text-white font-body outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    <option value="reservation">Reservation inquiry</option>
                    <option value="feedback">Feedback or compliment</option>
                    <option value="group-event">Group / private event</option>
                    <option value="gift-cards">Gift cards</option>
                    <option value="other">Something else</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-luxe">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="bg-background border border-white/10 focus:border-gold-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxe/30 rounded-2xl px-5 py-4 text-white font-body outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all self-start"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto bg-navy-deep/40 border border-white/5 rounded-3xl p-10 md:p-16 flex flex-col gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold mb-3 block">
              Leave a Review
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Tell the internet
            </h2>
            <p className="font-body text-on-surface-variant font-medium leading-relaxed">
              If you had a great night — or a bad one — we&apos;d rather hear about it. Reviews
              help the team, help new guests find us, and help us get better at the small things.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJUTIz35rzLogRgHFVt2HXDbk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-white bg-background px-8 py-4 rounded-full tracking-widest uppercase text-xs font-bold flex items-center gap-4 group border border-white/10 hover:border-gold-luxe transition-all"
            >
              Google Review
              <span className="material-symbols-outlined text-lg text-gold-luxe group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>
            <a
              href="https://www.tripadvisor.ca/Restaurant_Review-g154995-d21053259-Reviews-Eleven_Sixty_Bar_Grill-London_Ontario.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-white bg-background px-8 py-4 rounded-full tracking-widest uppercase text-xs font-bold flex items-center gap-4 group border border-white/10 hover:border-gold-luxe transition-all"
            >
              TripAdvisor
              <span className="material-symbols-outlined text-lg text-gold-luxe group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

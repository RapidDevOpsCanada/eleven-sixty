import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';

export default function HomePage() {
  return (
    <>
      <Nav />

      <header className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden pt-32 md:pt-0">
        <div className="w-full md:w-1/2 h-2/3 md:h-full bg-navy-deep flex flex-col items-center justify-center p-8 md:p-16 relative z-20 border-r border-white/5">
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
                London &amp; St Thomas
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-8xl mb-8 leading-[0.95] text-white tracking-tight">
              YOUR<br />NEIGHBOURHOOD<br />
              <span className="italic text-gold-luxe">bar &amp; grill.</span>
            </h1>
            <p className="font-body text-base text-on-surface-variant max-w-xs mb-10 leading-relaxed font-medium">
              Two Ontario rooms, one kind of welcome. A casual bar &amp; grill built for
              families, date nights, big tables, and quiet ones. Open daily from 11:30am.
            </p>
            <a
              href="tel:+15196812669"
              className="group relative px-14 py-5 overflow-hidden bg-white text-navy-deep rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 inline-block"
            >
              <span className="relative z-10 font-label font-bold tracking-widest uppercase text-xs">
                Book a Table
              </span>
            </a>
          </div>
          <div className="absolute bottom-10 left-8 md:left-16 flex items-center gap-4 opacity-40">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">
              Scroll Narrative
            </span>
            <div className="w-12 h-[1px] bg-white" />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full overflow-y-auto no-scrollbar bg-background border-t md:border-t-0 border-white/5">
          <div className="flex flex-col gap-1 p-1">
            <div className="relative h-[819px] w-full overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Interior — London"
                className="w-full h-full object-cover"
                src="https://loremflickr.com/cache/resized/65535_54562342175_1a4b15ec00_k_1280_720_nofilter.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe mb-2 block font-bold">
                  Location 01
                </span>
                <h3 className="text-3xl font-headline font-bold text-white tracking-tight">
                  London, Ontario
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Grilled steak"
                  className="w-full h-full object-cover"
                  src="https://loremflickr.com/cache/resized/65535_54309918754_aa2345af79_h_1280_720_nofilter.jpg"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Slow-smoked ribs"
                  className="w-full h-full object-cover"
                  src="https://loremflickr.com/cache/resized/65535_54427364915_f37d498ff5_h_1280_720_nofilter.jpg"
                />
              </div>
            </div>
            <div className="relative h-[614px] w-full overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Interior — St Thomas"
                className="w-full h-full object-cover"
                src="https://loremflickr.com/cache/resized/65535_54578205014_f4c3a905a1_h_1280_720_nofilter.jpg"
              />
              <div className="absolute bottom-10 left-10">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe mb-2 block font-bold">
                  Location 02
                </span>
                <h3 className="text-3xl font-headline font-bold text-white tracking-tight">
                  St Thomas, Ontario
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-32 px-6 md:px-24 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div>
              <span className="font-label text-gold-luxe tracking-[0.4em] uppercase text-[11px] font-bold mb-4 block">
                Our Story
              </span>
              <h2 className="font-headline font-bold text-5xl md:text-7xl text-white leading-tight">
                Bar &amp; Grill, <br />
                <span className="italic text-gold-luxe">done right</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gold-luxe rounded-full" />
            <div className="space-y-6">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
                Eleven Sixty is the neighborhood bar &amp; grill for London and St Thomas. Known
                for sizzling steaks and tender, fall-off-the-bone ribs served the way you actually
                want to eat them.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
                Grab social drinks in the lounge, settle in for an intimate dinner, or host a
                private event for up to fifty. Two Ontario rooms, one table always open.
              </p>
            </div>
            <Link
              className="font-label text-white bg-navy-deep px-8 py-4 rounded-full self-start tracking-widest uppercase text-xs font-bold flex items-center gap-4 group border border-white/10 hover:border-gold-luxe transition-all"
              href="/dinner-menus/"
            >
              View the Menu
              <span className="material-symbols-outlined text-lg text-gold-luxe group-hover:translate-x-2 transition-transform">
                east
              </span>
            </Link>
          </div>
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="w-4/5 aspect-[3/4] bg-navy-deep rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="From the grill"
                className="w-full h-full object-cover"
                src="https://loremflickr.com/cache/resized/65535_54309918754_aa2345af79_h_1280_720_nofilter.jpg"
              />
            </div>
            <div className="absolute -bottom-10 left-0 w-2/3 aspect-square bg-navy-deep rounded-2xl border-8 border-background overflow-hidden hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="On the plate"
                className="w-full h-full object-cover"
                src="https://loremflickr.com/cache/resized/65535_54427364915_f37d498ff5_h_1280_720_nofilter.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-navy-deep/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-label text-gold-luxe tracking-[0.3em] uppercase text-[11px] font-bold mb-4 block">
                Our Kitchen
              </span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight">
                SLOW-COOKED, HAND-FINISHED
              </h2>
            </div>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest max-w-[250px] leading-loose font-bold">
              Fall-off-the-bone ribs. Steaks off the grill. A menu for the table that stays late.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden h-[600px] rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="The dining room"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                src="https://loremflickr.com/cache/resized/65535_54578205014_f4c3a905a1_h_1280_720_nofilter.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12">
                <h3 className="font-headline text-4xl font-bold mb-4 text-white">
                  RIBS &amp; STEAKS
                </h3>
                <p className="font-body text-base text-white/80 max-w-md font-medium">
                  Slow-smoked ribs, hand-cut steaks, and a lunch menu that runs from 11:30 to 3:30.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-navy-deep border border-white/5 p-12 flex flex-col justify-between h-[600px] rounded-3xl shadow-xl">
              <div>
                <span className="font-headline text-7xl font-extrabold text-gold-luxe tracking-tighter">
                  1160
                </span>
                <p className="font-body mt-8 text-lg text-on-surface-variant leading-relaxed font-medium">
                  The address and the name. 1160 Wellington Road in London, and a second room on
                  Talbot Street in St Thomas.
                </p>
              </div>
              <div className="flex flex-col gap-2 border-t border-white/10 pt-8">
                <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                  Open Daily
                </span>
                <span className="font-body text-sm text-white/80 font-semibold tracking-wide">
                  11:30am — 9pm · Fri &amp; Sat until 10pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-navy-deep/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-xl flex flex-col gap-5">
            <span className="font-label text-gold-luxe tracking-[0.3em] uppercase text-[11px] font-bold">
              From the Neighbourhood
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">
              Read what guests are <span className="italic text-gold-luxe">saying</span>
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium">
              Real reviews live on Google and TripAdvisor. If you&apos;ve eaten with us, we&apos;d
              love to hear from you there.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJUTIz35rzLogRgHFVt2HXDbk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-white bg-navy-deep px-6 py-4 rounded-full tracking-widest uppercase text-xs font-bold flex items-center gap-3 group border border-white/10 hover:border-gold-luxe transition-all"
            >
              Read on Google
              <span className="material-symbols-outlined text-base text-gold-luxe group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>
            <a
              href="https://www.tripadvisor.ca/Restaurant_Review-g154995-d21053259-Reviews-Eleven_Sixty_Bar_Grill-London_Ontario.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-white bg-navy-deep px-6 py-4 rounded-full tracking-widest uppercase text-xs font-bold flex items-center gap-3 group border border-white/10 hover:border-gold-luxe transition-all"
            >
              TripAdvisor
              <span className="material-symbols-outlined text-base text-gold-luxe group-hover:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <span className="font-label text-gold-luxe tracking-[0.3em] uppercase text-[11px] font-bold mb-4 block">
              Explore
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">
              More ways to visit
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/daily-features/"
              className="group bg-navy-deep border border-white/5 hover:border-gold-luxe/40 rounded-3xl p-8 flex flex-col gap-5 transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-gold-luxe text-3xl">
                local_activity
              </span>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                Daily Features
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                Weeknight specials plus all-day happy hours.
              </p>
              <span className="material-symbols-outlined text-gold-luxe text-lg mt-auto group-hover:translate-x-2 transition-transform">
                east
              </span>
            </Link>
            <Link
              href="/birthday-club/"
              className="group bg-navy-deep border border-white/5 hover:border-gold-luxe/40 rounded-3xl p-8 flex flex-col gap-5 transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-gold-luxe text-3xl">cake</span>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                Birthday Club
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                Sign up — dessert on us on your birthday.
              </p>
              <span className="material-symbols-outlined text-gold-luxe text-lg mt-auto group-hover:translate-x-2 transition-transform">
                east
              </span>
            </Link>
            <Link
              href="/group-events/"
              className="group bg-navy-deep border border-white/5 hover:border-gold-luxe/40 rounded-3xl p-8 flex flex-col gap-5 transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-gold-luxe text-3xl">groups</span>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                Group Events
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                Private room for up to 45 with a big-screen TV.
              </p>
              <span className="material-symbols-outlined text-gold-luxe text-lg mt-auto group-hover:translate-x-2 transition-transform">
                east
              </span>
            </Link>
            <Link
              href="/contact-us/"
              className="group bg-navy-deep border border-white/5 hover:border-gold-luxe/40 rounded-3xl p-8 flex flex-col gap-5 transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-gold-luxe text-3xl">mail</span>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                Contact Us
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed">
                Reach the team at info@elevensixty.ca.
              </p>
              <span className="material-symbols-outlined text-gold-luxe text-lg mt-auto group-hover:translate-x-2 transition-transform">
                east
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="locations" className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-label text-gold-luxe tracking-[0.3em] uppercase text-[11px] font-bold mb-4 block">
                Two Rooms
              </span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight">
                FIND US
              </h2>
            </div>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest max-w-[280px] leading-loose font-bold">
              London &amp; St Thomas, Ontario. Open daily from 11:30am.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-deep border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6 hover:border-gold-luxe/40 transition-colors">
              <LocationMap
                query="1160 Wellington Road London ON N6E 1M3"
                label="London"
              />
              <div className="flex items-start justify-between px-2">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold mb-3 block">
                    Location 01
                  </span>
                  <h3 className="font-headline text-4xl font-bold text-white tracking-tight">
                    London
                  </h3>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-3xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col gap-3 font-body text-base text-on-surface-variant font-medium leading-relaxed">
                <a
                  href="https://maps.google.com/?q=1160+Wellington+Road+London+ON+N6E+1M3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  1160 Wellington Road
                  <br />
                  London, ON N6E 1M3
                </a>
                <a
                  href="tel:+15196812669"
                  className="hover:text-white transition-colors"
                >
                  519-681-2669
                </a>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col gap-2 text-sm text-white/80 font-body">
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Mon — Thu
                  </span>
                  <span className="font-medium">11:30am — 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Fri — Sat
                  </span>
                  <span className="font-medium">11:30am — 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Sunday
                  </span>
                  <span className="font-medium">11:30am — 9pm</span>
                </div>
              </div>
            </div>

            <div className="bg-navy-deep border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6 hover:border-gold-luxe/40 transition-colors">
              <LocationMap
                query="1093 Talbot St St Thomas ON N5P 1G4"
                label="St Thomas"
              />
              <div className="flex items-start justify-between px-2">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold mb-3 block">
                    Location 02
                  </span>
                  <h3 className="font-headline text-4xl font-bold text-white tracking-tight">
                    St Thomas
                  </h3>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-3xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col gap-3 font-body text-base text-on-surface-variant font-medium leading-relaxed">
                <a
                  href="https://maps.google.com/?q=1093+Talbot+St+St+Thomas+ON+N5P+1G4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  1093 Talbot St
                  <br />
                  St Thomas, ON N5P 1G4
                </a>
                <a
                  href="tel:+15196318282"
                  className="hover:text-white transition-colors"
                >
                  519-631-8282
                </a>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col gap-2 text-sm text-white/80 font-body">
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Mon — Thu
                  </span>
                  <span className="font-medium">11:30am — 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Fri — Sat
                  </span>
                  <span className="font-medium">11:30am — 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                    Sunday
                  </span>
                  <span className="font-medium">11:30am — 9pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

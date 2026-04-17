import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LocationsBlock from '@/components/LocationsBlock';

export const metadata = {
  title: 'Birthday Club — Eleven Sixty Bar & Grill',
  description:
    'Get special offers from Eleven Sixty on your birthday and throughout the year. Sign up for the Birthday Club.'
};

export default function BirthdayClubPage() {
  return (
    <>
      <Nav />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
                On the House
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              Birthday <span className="italic text-gold-luxe">Club</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium">
              Get special offers from Eleven Sixty on your birthday and throughout the year. A
              complimentary dessert is waiting — show up on your day, tell your server
              you&apos;re a member, and it arrives quietly with a single candle.
            </p>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Birthday dessert with a candle"
              src="/images/birthday-cake.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-3xl mx-auto bg-navy-deep border border-white/5 rounded-3xl p-8 md:p-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Subscribe
          </h2>
          <p className="font-body text-sm text-on-surface-variant italic font-medium mb-8">
            We only email you around your birthday. We do not share your data.
          </p>

          <form
            className="flex flex-col gap-6"
            action="mailto:info@elevensixty.ca"
            method="POST"
            encType="text/plain"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
              >
                Email Address <span className="text-error">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="first-name"
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="last-name"
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="birthday"
                className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
              >
                Birthday (mm/dd)
              </label>
              <input
                id="birthday"
                name="birthday"
                type="text"
                placeholder="mm/dd"
                pattern="[0-1][0-9]/[0-3][0-9]"
                className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors max-w-xs"
              />
            </div>

            <button
              type="submit"
              className="bg-gold-luxe hover:bg-white text-navy-deep font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all self-start"
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
            Celebrate at either room
          </h2>
          <LocationsBlock />
        </div>
      </section>

      <Footer />
    </>
  );
}

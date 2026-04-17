import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';

export const metadata = {
  title: 'Contact Us — Eleven Sixty Bar & Grill',
  description:
    'Get in touch with Eleven Sixty in London or St Thomas. Email info@elevensixty.ca or call either location directly.'
};

export default function ContactPage() {
  return (
    <>
      <Nav showCommandBar={false} />

      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gold-luxe" />
            <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
              Get in Touch
            </span>
          </div>
          <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
            Contact <span className="font-display italic font-normal text-amber">Us</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-xl">
            Please feel free to contact us with any questions or feedback that you may have. We
            will try to get back to you as quickly as possible.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="bg-navy-deep border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <LocationMap
                query="1160 Wellington Road London ON N6E 1M3"
                label="London"
              />
              <div className="flex items-start justify-between px-2">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold mb-3 block">
                    Location 01
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-white tracking-tight">
                    London
                  </h3>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-3xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col gap-3 font-body text-base text-on-surface-variant font-medium leading-relaxed px-2">
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
                <a href="tel:+15196812669" className="hover:text-white transition-colors">
                  (519) 681-2669
                </a>
                <a
                  href="mailto:info@elevensixty.ca"
                  className="hover:text-white transition-colors"
                >
                  info@elevensixty.ca
                </a>
              </div>
            </div>

            <div className="bg-navy-deep border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <LocationMap
                query="1093 Talbot St St Thomas ON N5P 1G4"
                label="St Thomas"
              />
              <div className="flex items-start justify-between px-2">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold mb-3 block">
                    Location 02
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-white tracking-tight">
                    St Thomas
                  </h3>
                </div>
                <span className="material-symbols-outlined text-gold-luxe text-3xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col gap-3 font-body text-base text-on-surface-variant font-medium leading-relaxed px-2">
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
                <a href="tel:+15196318282" className="hover:text-white transition-colors">
                  519-631-8282
                </a>
              </div>
            </div>

            <div className="bg-navy-deep/40 border border-white/5 rounded-3xl p-10 flex flex-col gap-5">
              <h3 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
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
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  Your Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  Your Email <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-full px-5 py-3 text-white font-body outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="bg-background border border-white/10 focus:border-gold-luxe rounded-3xl px-5 py-4 text-white font-body outline-none transition-colors resize-none"
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
            <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold mb-3 block">
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

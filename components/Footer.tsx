import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 px-10 md:px-20 py-24">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-10 mb-24">
        <div className="col-span-2 md:col-span-2">
          <div className="text-3xl font-headline font-bold text-white mb-8 tracking-tight">
            ELEVEN <span className="text-gold-luxe">SIXTY</span>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-xs leading-relaxed font-medium">
            Premier bar &amp; grill. Known for sizzling steaks and fall-off-the-bone ribs. Open
            daily from 11:30am in London and St Thomas, Ontario.
          </p>
        </div>

        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-6">
            Menus
          </h4>
          <div className="flex flex-col gap-4 font-body text-sm font-medium text-white/60">
            <Link href="/lunch-menu/" className="hover:text-white transition-colors">
              Lunch
            </Link>
            <Link href="/dinner-menus/" className="hover:text-white transition-colors">
              Dinner
            </Link>
            <Link href="/desserts/" className="hover:text-white transition-colors">
              Desserts
            </Link>
            <Link href="/kids-menu/" className="hover:text-white transition-colors">
              Kids
            </Link>
            <Link href="/drinks-menu/" className="hover:text-white transition-colors">
              Drinks
            </Link>
            <Link href="/daily-features/" className="hover:text-white transition-colors">
              Daily Features
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-6">
            Visit
          </h4>
          <div className="flex flex-col gap-4 font-body text-sm font-medium text-white/60">
            <Link href="/birthday-club/" className="hover:text-white transition-colors">
              Birthday Club
            </Link>
            <Link href="/group-events/" className="hover:text-white transition-colors">
              Group Events
            </Link>
            <Link href="/contact-us/" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/articles/" className="hover:text-white transition-colors">
              Field Notes
            </Link>
          </div>
        </div>

        <div className="col-span-2 md:col-span-2">
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-6">
            Locations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 font-body text-sm font-medium text-white/60">
              <span className="font-label text-[10px] uppercase tracking-widest text-white font-bold">
                London
              </span>
              <a
                href="https://maps.google.com/?q=1160+Wellington+Road+London+ON+N6E+1M3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors leading-relaxed"
              >
                1160 Wellington Road
                <br />
                London, ON N6E 1M3
              </a>
              <a href="tel:+15196812669" className="hover:text-white transition-colors">
                519-681-2669
              </a>
            </div>
            <div className="flex flex-col gap-2 font-body text-sm font-medium text-white/60">
              <span className="font-label text-[10px] uppercase tracking-widest text-white font-bold">
                St Thomas
              </span>
              <a
                href="https://maps.google.com/?q=1093+Talbot+St+St+Thomas+ON+N5P+1G4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors leading-relaxed"
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
          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:info@elevensixty.ca"
              className="font-body text-sm text-white/60 hover:text-white transition-colors"
            >
              info@elevensixty.ca
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
          © 2024 Eleven Sixty Bar &amp; Grill — London &amp; St Thomas, Ontario.
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.facebook.com/elevensixtylondon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-gold-luxe transition-colors font-bold"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/sixty_eleven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-gold-luxe transition-colors font-bold"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/elevensixtybargrill/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-gold-luxe transition-colors font-bold"
          >
            Instagram
          </a>
          <a
            href="https://www.tripadvisor.ca/Restaurant_Review-g154995-d21053259-Reviews-Eleven_Sixty_Bar_Grill-London_Ontario.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            className="font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-gold-luxe transition-colors font-bold"
          >
            TripAdvisor
          </a>
        </div>
      </div>
    </footer>
  );
}

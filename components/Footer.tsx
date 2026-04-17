import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  TripAdvisorIcon,
  XIcon
} from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 px-8 md:px-16 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16 mb-20">
          <div>
            <div className="text-3xl font-headline font-bold text-white mb-6 tracking-tight">
              ELEVEN <span className="text-gold-luxe">SIXTY</span>
            </div>
            <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed font-medium">
              Premier bar &amp; grill. Known for sizzling steaks and fall-off-the-bone ribs. Open
              daily from 11:30am in London and St Thomas, Ontario.
            </p>
            <a
              href="mailto:info@elevensixty.ca"
              className="inline-block mt-6 font-label text-sm text-white hover:text-gold-luxe transition-colors"
            >
              info@elevensixty.ca
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-label text-[11px] uppercase tracking-widest text-white/60 font-bold mb-6">
                Menus
              </h4>
              <div className="flex flex-col gap-3 font-body text-base font-medium text-white/70">
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
              <h4 className="font-label text-[11px] uppercase tracking-widest text-white/60 font-bold mb-6">
                Visit
              </h4>
              <div className="flex flex-col gap-3 font-body text-base font-medium text-white/70">
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
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-white/50 font-bold">
                London
              </span>
              <a
                href="https://maps.google.com/?q=1160+Wellington+Road+London+ON+N6E+1M3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-white hover:text-gold-luxe transition-colors leading-relaxed"
              >
                1160 Wellington Road
                <br />
                London, ON N6E 1M3
              </a>
              <a
                href="tel:+15196812669"
                className="font-body text-base text-white/70 hover:text-white transition-colors"
              >
                519-681-2669
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-white/50 font-bold">
                St Thomas
              </span>
              <a
                href="https://maps.google.com/?q=1093+Talbot+St+St+Thomas+ON+N5P+1G4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-white hover:text-gold-luxe transition-colors leading-relaxed"
              >
                1093 Talbot St
                <br />
                St Thomas, ON N5P 1G4
              </a>
              <a
                href="tel:+15196318282"
                className="font-body text-base text-white/70 hover:text-white transition-colors"
              >
                519-631-8282
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-white/5 gap-6">
          <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            © 2024 Eleven Sixty Bar &amp; Grill — London &amp; St Thomas, Ontario.
          </div>
          <div className="flex gap-5 items-center">
            <a
              href="https://www.facebook.com/elevensixtylondon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-gold-luxe transition-colors"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/sixty_eleven"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-white/50 hover:text-gold-luxe transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/elevensixtybargrill/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 hover:text-gold-luxe transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.tripadvisor.ca/Restaurant_Review-g154995-d21053259-Reviews-Eleven_Sixty_Bar_Grill-London_Ontario.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="text-white/50 hover:text-gold-luxe transition-colors"
            >
              <TripAdvisorIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

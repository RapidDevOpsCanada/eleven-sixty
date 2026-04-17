import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 px-10 md:px-20 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1">
          <div className="text-3xl font-headline font-bold text-white mb-8 tracking-tight">
            ELEVEN <span className="text-gold-luxe">SIXTY</span>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-xs leading-relaxed font-medium">
            Premier bar &amp; grill. Known for sizzling steaks and fall-off-the-bone ribs. Open
            daily from 11:30am.
          </p>
        </div>

        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-8">
            London
          </h4>
          <div className="flex flex-col gap-3 font-body text-sm font-medium text-white/60">
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
            <a
              href="tel:+15196812669"
              className="hover:text-white transition-colors"
            >
              519-681-2669
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-8">
            St Thomas
          </h4>
          <div className="flex flex-col gap-3 font-body text-sm font-medium text-white/60">
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
            <a
              href="tel:+15196318282"
              className="hover:text-white transition-colors"
            >
              519-631-8282
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-8">
            Connect
          </h4>
          <div className="flex flex-col gap-5">
            <a
              href="https://www.instagram.com/elevensixtybargrill/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/elevensixtylondon"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/sixty_eleven"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <Link
              href="/menu"
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/articles"
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Field Notes
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
          © 2024 Eleven Sixty Bar &amp; Grill — London &amp; St Thomas, Ontario.
        </div>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            outdoor_grill
          </span>
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            local_bar
          </span>
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            dinner_dining
          </span>
        </div>
      </div>
    </footer>
  );
}

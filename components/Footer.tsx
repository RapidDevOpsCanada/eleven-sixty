import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 px-10 md:px-20 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="text-3xl font-headline font-bold text-white mb-8 tracking-tight">
            ELEVEN <span className="text-gold-luxe">SIXTY</span>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-xs leading-relaxed font-medium">
            The Local Redefined. A modern narrative of atmosphere and taste at the heart of the
            city&apos;s pulse.
          </p>
        </div>
        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-8">
            Connect
          </h4>
          <div className="flex flex-col gap-5">
            <a
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="#"
            >
              Instagram
            </a>
            <a
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="#"
            >
              Twitter
            </a>
            <a
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold mb-8">
            Culture
          </h4>
          <div className="flex flex-col gap-5">
            <a
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="#"
            >
              Privacy
            </a>
            <Link
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="/articles"
            >
              Curation Team
            </Link>
            <a
              className="font-body text-sm font-medium text-white/60 hover:text-white transition-colors"
              href="#"
            >
              Neighborhood Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
          © 2024 Eleven Sixty — Ultramodern Pub Group.
        </div>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            water_drop
          </span>
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            local_bar
          </span>
          <span className="material-symbols-outlined text-white/20 text-2xl hover:text-gold-luxe transition-colors cursor-pointer">
            bolt
          </span>
        </div>
      </div>
    </footer>
  );
}

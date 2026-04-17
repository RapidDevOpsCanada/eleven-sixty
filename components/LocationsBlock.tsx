export default function LocationsBlock() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold mb-3 block">
              Location 01
            </span>
            <h3 className="font-headline text-3xl font-bold text-white tracking-tight">London</h3>
          </div>
          <span className="material-symbols-outlined text-gold-luxe text-3xl">location_on</span>
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
          <a href="tel:+15196812669" className="hover:text-white transition-colors">
            519-681-2669
          </a>
        </div>
      </div>

      <div className="bg-navy-deep border border-white/5 rounded-3xl p-10 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold mb-3 block">
              Location 02
            </span>
            <h3 className="font-headline text-3xl font-bold text-white tracking-tight">
              St Thomas
            </h3>
          </div>
          <span className="material-symbols-outlined text-gold-luxe text-3xl">location_on</span>
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
          <a href="tel:+15196318282" className="hover:text-white transition-colors">
            519-631-8282
          </a>
        </div>
      </div>
    </div>
  );
}

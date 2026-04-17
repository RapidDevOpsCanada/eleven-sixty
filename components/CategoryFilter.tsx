import Link from 'next/link';

export default function CategoryFilter({
  categories,
  active
}: {
  categories: string[];
  active?: string;
}) {
  const slugify = (c: string) => c.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/articles"
        className={`font-label text-[11px] uppercase tracking-widest font-bold px-5 py-3 rounded-full border transition-all ${
          !active
            ? 'bg-gold-luxe text-navy-deep border-gold-luxe'
            : 'text-white/70 border-white/10 hover:border-gold-luxe hover:text-white'
        }`}
      >
        All
      </Link>
      {categories.map((c) => {
        const slug = slugify(c);
        const isActive = active === slug;
        return (
          <Link
            key={c}
            href={`/categories/${slug}`}
            className={`font-label text-[11px] uppercase tracking-widest font-bold px-5 py-3 rounded-full border transition-all ${
              isActive
                ? 'bg-gold-luxe text-navy-deep border-gold-luxe'
                : 'text-white/70 border-white/10 hover:border-gold-luxe hover:text-white'
            }`}
          >
            {c}
          </Link>
        );
      })}
    </div>
  );
}

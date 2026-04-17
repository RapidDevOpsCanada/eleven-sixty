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
    <div className="border-b border-white/10 overflow-x-auto no-scrollbar">
      <nav className="flex gap-6 md:gap-10 min-w-max">
        <Link
          href="/articles"
          className={`relative pb-4 font-label text-sm uppercase tracking-[0.18em] font-bold transition-colors whitespace-nowrap ${
            !active ? 'text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          All
          {!active && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gold-luxe" />
          )}
        </Link>
        {categories.map((c) => {
          const slug = slugify(c);
          const isActive = active === slug;
          return (
            <Link
              key={c}
              href={`/categories/${slug}`}
              className={`relative pb-4 font-label text-sm uppercase tracking-[0.18em] font-bold transition-colors whitespace-nowrap ${
                isActive ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {c}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gold-luxe" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

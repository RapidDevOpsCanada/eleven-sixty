import type { MenuItem } from '@/lib/menuData';

export default function MenuItemBlock({ item }: { item: MenuItem }) {
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <div className="flex flex-col gap-2 py-6 border-b border-white/5 last:border-b-0">
      <div className="flex items-baseline justify-between gap-6 flex-wrap">
        <h3 className="font-headline font-bold text-xl md:text-2xl text-white tracking-tight">
          {item.name}
          {item.note && (
            <span className="ml-3 font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold align-middle">
              {item.note}
            </span>
          )}
        </h3>
        {item.price && !hasVariants && (
          <span className="font-headline text-xl font-bold text-gold-luxe tracking-tight">
            {item.price}
          </span>
        )}
      </div>

      {item.description && (
        <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium max-w-3xl">
          {item.description}
        </p>
      )}

      {hasVariants && (
        <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
          {item.variants!.map((v) => (
            <div key={v.label} className="flex items-baseline gap-3">
              <span className="font-label text-[11px] uppercase tracking-widest text-gold-luxe font-bold">
                {v.label}
              </span>
              <span className="font-headline text-lg font-bold text-white">{v.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

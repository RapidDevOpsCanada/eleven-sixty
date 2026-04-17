import type { MenuItem } from '@/lib/menuData';

export default function MenuItemBlock({ item }: { item: MenuItem }) {
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <div className="flex flex-col gap-2 py-5 border-b border-white/5 last:border-b-0 md:last:border-b md:[&:nth-last-child(-n+2)]:border-b-0">
      <div className="flex items-baseline justify-between gap-6 flex-wrap">
        <h3 className="font-headline font-bold text-lg md:text-xl text-white tracking-tight">
          {item.name}
          {item.note && (
            <span className="ml-3 font-label text-[10px] uppercase tracking-widest text-white/50 font-bold align-middle">
              {item.note}
            </span>
          )}
        </h3>
        {item.price && !hasVariants && (
          <span className="font-headline text-lg font-bold text-gold-luxe tracking-tight">
            {item.price}
          </span>
        )}
      </div>

      {item.description && (
        <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed font-normal max-w-3xl">
          {item.description}
        </p>
      )}

      {hasVariants && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
          {item.variants!.map((v) => (
            <div key={v.label} className="flex items-baseline gap-2">
              <span className="font-label text-[10px] uppercase tracking-widest text-white/50 font-bold">
                {v.label}
              </span>
              <span className="font-headline text-base font-bold text-gold-luxe">{v.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

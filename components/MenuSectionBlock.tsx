import type { MenuSection } from '@/lib/menuData';
import MenuItemBlock from './MenuItemBlock';

export default function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="flex flex-col gap-6 pt-10 md:pt-14 first:pt-2 border-t border-white/5 first:border-t-0">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
          {section.title}
        </h2>
        {section.note && (
          <p className="font-body text-sm text-on-surface-variant italic font-medium leading-relaxed max-w-sm">
            {section.note}
          </p>
        )}
      </header>

      {section.items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
          {section.items.map((item, i) => (
            <MenuItemBlock key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      )}

      {section.footer && (
        <div className="mt-4 flex flex-col gap-2 font-body text-sm text-on-surface-variant font-medium leading-relaxed">
          {section.footer.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </section>
  );
}

import type { MenuSection } from '@/lib/menuData';
import MenuItemBlock from './MenuItemBlock';

export default function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="bg-navy-deep/30 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-2">
      <header className="mb-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">
          {section.title}
        </h2>
        {section.note && (
          <p className="font-body text-sm text-on-surface-variant italic mt-3 font-medium leading-relaxed">
            {section.note}
          </p>
        )}
      </header>

      {section.items.length === 0 ? (
        <div className="py-6 text-on-surface-variant font-body font-medium leading-relaxed">
          &nbsp;
        </div>
      ) : (
        <div className="flex flex-col">
          {section.items.map((item, i) => (
            <MenuItemBlock key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      )}

      {section.footer && (
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2 font-body text-sm text-on-surface-variant font-medium leading-relaxed">
          {section.footer.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </section>
  );
}

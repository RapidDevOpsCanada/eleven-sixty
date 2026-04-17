import Link from 'next/link';
import type { Article } from '@/lib/db';

const FALLBACK_IMAGES = [
  '/images/interior-bar.jpg',
  '/images/grilled-steak.jpg',
  '/images/bbq-ribs.jpg',
  '/images/pub-food.jpg'
];

export function getArticleImage(a: Pick<Article, 'id'>): string {
  return FALLBACK_IMAGES[a.id % FALLBACK_IMAGES.length];
}

export default function ArticleCard({
  article,
  featured = false
}: {
  article: Article;
  featured?: boolean;
}) {
  const imageSrc = getArticleImage(article);

  if (featured) {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="group relative overflow-hidden rounded-3xl h-[600px] block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe mb-4 block font-bold">
            {article.category}
          </span>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
            {article.title}
          </h3>
          <p className="font-body text-base text-white/80 max-w-xl font-medium leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-widest text-white/50 font-bold">
            <span>{article.author}</span>
            <span className="h-3 w-px bg-white/20" />
            <span>{article.read_time} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col gap-6 bg-navy-deep/40 border border-white/5 hover:border-gold-luxe/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={imageSrc}
        />
        <div className="absolute top-4 left-4">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold bg-navy-deep/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="px-6 pb-8 flex flex-col gap-4">
        <h3 className="font-headline text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-gold-luxe transition-colors">
          {article.title}
        </h3>
        <p className="font-body text-sm text-on-surface-variant font-medium leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-bold pt-4 border-t border-white/5">
          <span>{article.author}</span>
          <span className="h-3 w-px bg-white/10" />
          <span>{article.read_time} min</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-gold-luxe">share</span>
            {article.share_count}
          </span>
        </div>
      </div>
    </Link>
  );
}

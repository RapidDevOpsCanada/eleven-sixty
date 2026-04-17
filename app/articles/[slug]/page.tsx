import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard, { getArticleImage } from '@/components/ArticleCard';
import ScrollToTop from '@/components/ScrollToTop';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);
    if (!article) return { title: 'Article not found — Eleven Sixty' };
    return {
      title: `${article.title} — Eleven Sixty`,
      description: article.excerpt
    };
  } catch {
    return { title: 'Eleven Sixty' };
  }
}

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  if (!article) notFound();

  const related = await getRelatedArticles(article.slug, article.category).catch(() => []);
  const heroImage = getArticleImage(article);
  const categorySlug = article.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <Nav />

      <article className="pt-32 md:pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <Link
              href="/articles/"
              className="font-label text-[11px] uppercase tracking-[0.25em] text-white/50 hover:text-white font-bold inline-flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-base">west</span>
              All Field Notes
            </Link>
          </div>
          <div className="flex flex-col gap-8 items-center text-center mb-16">
            <Link
              href={`/categories/${categorySlug}`}
              className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold hover:text-white transition-colors"
            >
              {article.category}
            </Link>
            <h1 className="font-headline font-bold text-4xl md:text-6xl text-white tracking-tight leading-[1.05] max-w-3xl">
              {article.title}
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-white/50 font-bold pt-4">
              <span>{article.author}</span>
              <span className="h-3 w-px bg-white/20" />
              <span>{article.read_time} min read</span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-gold-luxe">share</span>
                {article.share_count}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={article.title}
              src={heroImage}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-label text-[11px] uppercase tracking-widest text-white/70 font-bold">
                Written by
              </span>
              <span className="font-headline text-2xl font-bold text-white">{article.author}</span>
            </div>
            <Link
              href="/articles"
              className="font-label text-white bg-navy-deep px-8 py-4 rounded-full tracking-widest uppercase text-xs font-bold inline-flex items-center gap-4 group border border-white/10 hover:border-gold-luxe transition-all self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-lg text-gold-luxe group-hover:-translate-x-2 transition-transform">
                west
              </span>
              All Field Notes
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="px-6 md:px-12 pb-32 bg-navy-deep/20 py-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label text-white/60 tracking-[0.3em] uppercase text-[11px] font-bold">
                Continue Reading
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">
                More from {article.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ScrollToTop />
      <Footer />
    </>
  );
}

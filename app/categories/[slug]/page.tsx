import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import { getAllCategories, getArticlesByCategory } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pretty = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `${pretty} — Eleven Sixty` };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, ' ');

  let categories: string[] = [];
  let articles: Awaited<ReturnType<typeof getArticlesByCategory>> = [];
  let error: string | null = null;

  try {
    [categories, articles] = await Promise.all([
      getAllCategories(),
      getArticlesByCategory(categoryName)
    ]);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load articles.';
  }

  const matched = categories.find(
    (c) => c.toLowerCase() === categoryName.toLowerCase()
  );
  const display = matched ?? categoryName.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Nav />

      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <Link
                href="/articles"
                className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold hover:text-white transition-colors"
              >
                All Field Notes
              </Link>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              {display}
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-xl">
              {articles.length} {articles.length === 1 ? 'story' : 'stories'} in this category.
            </p>
          </div>

          {categories.length > 0 && <CategoryFilter categories={categories} active={slug} />}
        </div>
      </section>

      {error && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="bg-error/10 border border-error/30 rounded-3xl p-8 text-error">
            <p className="font-body font-medium">{error}</p>
            <p className="font-body text-sm mt-3 text-error/80">
              Run <code className="bg-error/20 px-2 py-0.5 rounded">/api/seed</code> to populate
              the database.
            </p>
          </div>
        </div>
      )}

      {!error && articles.length === 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="bg-navy-deep/40 border border-white/5 rounded-3xl p-10 text-center">
            <p className="font-body text-on-surface-variant">
              No articles in this category yet.
            </p>
          </div>
        </div>
      )}

      {articles.length > 0 && (
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

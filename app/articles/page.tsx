import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import { getAllArticles, getAllCategories } from '@/lib/articles';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ArticlesPage() {
  let articles: Awaited<ReturnType<typeof getAllArticles>> = [];
  let categories: string[] = [];
  let error: string | null = null;

  try {
    [articles, categories] = await Promise.all([getAllArticles(), getAllCategories()]);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load articles.';
  }

  const [featured, ...rest] = articles;

  return (
    <>
      <Nav />

      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold-luxe" />
              <span className="font-label uppercase tracking-[0.4em] text-gold-luxe text-[11px] font-bold">
                The Field Notes
              </span>
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
              Stories from <span className="font-display italic font-normal text-amber">the grill</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-medium max-w-xl">
              Dispatches on the ribs, the steaks, the rooms in London and St Thomas, and the
              regulars who make Eleven Sixty the neighbourhood bar &amp; grill it is.
            </p>
          </div>

          {categories.length > 0 && <CategoryFilter categories={categories} />}
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
              No articles yet. Visit <Link className="text-gold-luxe underline" href="/api/seed">/api/seed</Link> to populate.
            </p>
          </div>
        </div>
      )}

      {featured && (
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((a) => (
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

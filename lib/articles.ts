import { getSql, type Article } from '@/lib/db';

export async function getAllArticles(): Promise<Article[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, author, read_time, share_count, created_at
    FROM articles
    ORDER BY created_at DESC, id DESC
  `;
  return rows as unknown as Article[];
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, author, read_time, share_count, created_at
    FROM articles
    WHERE LOWER(category) = LOWER(${category})
    ORDER BY created_at DESC, id DESC
  `;
  return rows as unknown as Article[];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, author, read_time, share_count, created_at
    FROM articles
    WHERE slug = ${slug}
    LIMIT 1
  `;
  const list = rows as unknown as Article[];
  return list[0] ?? null;
}

export async function getAllCategories(): Promise<string[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT DISTINCT category FROM articles ORDER BY category ASC
  `;
  return (rows as unknown as { category: string }[]).map((r) => r.category);
}

export async function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Article[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, slug, title, excerpt, body, category, author, read_time, share_count, created_at
    FROM articles
    WHERE category = ${category} AND slug != ${currentSlug}
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows as unknown as Article[];
}

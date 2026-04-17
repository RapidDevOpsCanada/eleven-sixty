import { NextResponse } from 'next/server';
import { getSql } from '@/lib/db';
import { SEED_ARTICLES } from '@/lib/seedData';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const sql = getSql();

    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        body TEXT NOT NULL,
        category TEXT NOT NULL,
        author TEXT NOT NULL,
        read_time INTEGER NOT NULL,
        share_count INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`DELETE FROM articles`;

    for (const a of SEED_ARTICLES) {
      await sql`
        INSERT INTO articles
          (slug, title, excerpt, body, category, author, read_time, share_count)
        VALUES
          (${a.slug}, ${a.title}, ${a.excerpt}, ${a.body}, ${a.category},
           ${a.author}, ${a.read_time}, ${a.share_count})
      `;
    }

    return NextResponse.json({
      success: true,
      count: SEED_ARTICLES.length,
      categories: Array.from(new Set(SEED_ARTICLES.map((a) => a.category)))
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

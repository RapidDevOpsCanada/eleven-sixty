import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  read_time: number;
  share_count: number;
  created_at: string;
};

function getConnectionString(): string {
  const url =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING;
  if (!url) {
    throw new Error(
      'Database connection string missing. Set DATABASE_URL, POSTGRES_URL, or POSTGRES_URL_NON_POOLING.'
    );
  }
  return url;
}

let cached: NeonQueryFunction<false, false> | undefined;

export function getSql(): NeonQueryFunction<false, false> {
  if (!cached) cached = neon(getConnectionString());
  return cached;
}

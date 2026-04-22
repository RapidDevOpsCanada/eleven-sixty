import type { Metadata } from 'next';
import UnlockForm from './UnlockForm';

export const metadata: Metadata = {
  title: 'Private preview — Eleven Sixty',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: undefined }
};

function sanitizeNext(raw: string | undefined): string {
  if (!raw) return '/';
  if (!raw.startsWith('/') || raw.startsWith('//')) return '/';
  if (raw.startsWith('/unlock')) return '/';
  return raw;
}

export default async function UnlockPage({
  searchParams
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const sp = await searchParams;
  const next = sanitizeNext(sp?.next);

  return (
    <main className="min-h-screen bg-background text-on-surface flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1.5 rounded-full bg-gold-luxe flex items-center justify-center text-navy-deep text-[11px] font-black tracking-tight">
            1160
          </span>
          <span className="text-lg font-headline font-bold tracking-tight text-white">
            ELEVEN<span className="text-gold-luxe">SIXTY</span>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
            Private preview
          </span>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            This site is in private development.
          </h1>
          <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium">
            Enter the password you were given to continue.
          </p>
        </div>

        <UnlockForm next={next} />
      </div>
    </main>
  );
}

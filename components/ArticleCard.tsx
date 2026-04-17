import Link from 'next/link';
import type { Article } from '@/lib/db';

const FALLBACK_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAOl2b28maZFrvP6eXR2JOhD_4BkeuId2GJ_lDvzT4DQi7PI7gAyTiOfd789TiRawsQpa4h2BnoVWwVRoqcCaf-h2HQ8IhNq_a6eTWbc3_RwL-vgw-yAOLJS03D6QjF6cx2Y34WAFBtsbZ8fzlhlM-JF9XIxusBNPON0V9ilhe4QcodzfJS3vtHrYme85kmiiA4hU5_vpJyUmZSSAXRdge-KOcLgktIBo-7gA9Z7m-vownltVd7hFC_OKYfiqzlw-QIEmk0wtsPKF0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAR9msnBuCJsaAUe8XDuSpoXqa2GfYYwak0ESJOzTNOiL5irVRHaLcbWd4EwJozdgLxzo-iADD3LqxQp6UQHFj3GUFVC3Lqy6ZygwI_2gvfDf8FKgEFF4gqXvw09CdCheaUi_7ZmnM81D8Jt4kAGZq7dZKFAYav5A_jV0SwRZvE191o9Sa67idphY4HpHoZGlelDVRKFGm3OOHRozo636i6RAZNKMEbkDLnaWQSA9x0E3WuIKReTdoumHbLh2_8g9qfbyrMT6QVmvU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCpB4U_tT9TdXD82jLbL3whS4xIr_GlOxQC2VWXcbMfnWDq9l9SMag5KkJdwOWwotBEHk2SWYPHs0INp3jo6jOgF5crkl--3Gn2FOZSBFsMr16A81VozosPd_o-rNLbGrtV69zCnHo3FGkAXhljejH1fWs0PpqkAiG3xdDOKws5p-2QIXWlw6ljBKRhb7e0zGPPATFxXysg_0YeXDKu4jiJ2GhRFVgOV6XmRZ9eHu0Fv2LZGJRCs5-WyDQ7-h7sF5fQDhakUaTc7V0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCCPkcCwOGnUfcBTF4kyHJDFAuDvLGchBd1lR63gXMbNiXzx0fb-JEiO0W-PEcUOOnTRx0pPZoWnbLyGHN_HqJ4vD_5k0rIvjcj4hwMGrIiChIQTxc6f49Extkh-jTBnWRcfZOsg5kSCzZzl0_7L_LrZkSXcQbs4Sk6l_TwjGolX9rwljMgUfQVbeRIjZ69cwDjl61cUu6_yB_-C7dMMm3c-rZNMD6XX49Ys9kmZ-3Fa2HRFGvIGdFxkkQwnCl4iNGUzpfzuMqWH-o'
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

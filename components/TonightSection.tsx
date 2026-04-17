'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import OpenStatus from './OpenStatus';
import BookButton from './BookButton';
import { getMenuBySlug } from '@/lib/menuData';

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export default function TonightSection() {
  const [day, setDay] = useState<string | null>(null);

  useEffect(() => {
    setDay(DAY_NAMES[new Date().getDay()]);
  }, []);

  const features = getMenuBySlug('daily-features');
  const todaysSection = day
    ? features?.sections.find((s) => s.title === day)
    : undefined;
  const happyHour = features?.sections.find((s) =>
    s.title.toLowerCase().startsWith('happy hours')
  );

  const eyebrow = day ? `${day} night` : 'Tonight';
  const topItems = todaysSection?.items.slice(0, 3) ?? [];

  return (
    <section className="py-24 px-6 md:px-12 bg-navy-deep/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-label text-white/60 tracking-[0.3em] uppercase text-[11px] font-bold mb-4 block">
              Tonight at Eleven Sixty
            </span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.02]">
              What&apos;s on <span className="italic text-gold-luxe">{day ?? 'tonight'}.</span>
            </h2>
          </div>
          <OpenStatus className="self-start md:self-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 relative overflow-hidden h-[520px] md:h-[600px] rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="The bar at Eleven Sixty tonight"
              src="/images/happy-hour.jpg"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-label text-[11px] uppercase tracking-[0.3em] text-gold-luxe font-bold">
                  {eyebrow}
                </span>
                <h3 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1]">
                  {todaysSection?.title ?? 'Happy Hour, Every Day'}
                </h3>
                {todaysSection?.note && (
                  <p className="font-body text-base md:text-lg text-white/70 font-medium italic mt-2">
                    {todaysSection.note}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3 max-w-xl">
                {(topItems.length > 0 ? topItems : happyHour?.items.slice(0, 3) ?? []).map(
                  (item, i) => (
                    <li
                      key={`${item.name}-${i}`}
                      className="flex items-baseline gap-3 font-body text-base md:text-lg text-white/90 font-medium"
                    >
                      <span className="font-headline font-bold text-white">{item.name}</span>
                      {item.price && (
                        <>
                          <span
                            aria-hidden="true"
                            className="flex-1 border-b border-dotted border-white/20 translate-y-[-3px]"
                          />
                          <span className="font-headline font-bold text-gold-luxe">
                            {item.price}
                          </span>
                        </>
                      )}
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden sm:block">
                  <BookButton />
                </div>
                <Link
                  href="/daily-features/"
                  className="font-label text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-gold-luxe transition-colors inline-flex items-center gap-2 border-b border-white/30 hover:border-gold-luxe pb-1"
                >
                  See the whole week
                  <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-navy-deep border border-white/5 p-10 md:p-12 flex flex-col justify-between h-[520px] md:h-[600px] rounded-3xl shadow-xl">
            <div className="flex flex-col gap-6">
              <span className="font-label text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold">
                Every Day · 3–5pm &amp; 8pm–close
              </span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.05]">
                Happy <span className="italic text-gold-luxe">hour.</span>
              </h3>
              <ul className="flex flex-col gap-3 font-body text-base text-white/80 font-medium">
                {(happyHour?.items ?? []).map((item, i) => (
                  <li
                    key={`hh-${i}`}
                    className="flex items-baseline gap-3"
                  >
                    <span className="font-headline font-bold text-white text-sm md:text-base">
                      {item.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-white/15 translate-y-[-3px]"
                    />
                    {item.price ? (
                      <span className="font-headline font-bold text-gold-luxe text-sm md:text-base">
                        {item.price}
                      </span>
                    ) : (
                      <span className="font-body text-xs text-white/60 italic">
                        {item.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/drinks-menu/"
              className="font-label text-xs uppercase tracking-[0.2em] font-bold text-gold-luxe hover:text-white transition-colors inline-flex items-center gap-2 mt-6"
            >
              The bar program
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  matchPrefix
}: {
  href: string;
  children: React.ReactNode;
  matchPrefix?: string;
}) {
  const pathname = usePathname() ?? '/';
  const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);
  const current = normalize(pathname);
  const target = normalize(matchPrefix ?? href);
  const isActive =
    target === '/' ? current === '/' : current === target || current.startsWith(target + '/');

  return (
    <Link
      href={href}
      className="group relative font-label text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-gold-luxe transition-colors"
    >
      {children}
      {isActive ? (
        <span className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-gold-luxe rounded-full" />
      ) : (
        <span className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-gold-luxe rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      )}
    </Link>
  );
}

import { NextResponse, type NextRequest } from 'next/server';
import { UNLOCK_COOKIE, UNLOCK_TOKEN } from '@/lib/unlock';

export function middleware(req: NextRequest) {
  const token = req.cookies.get(UNLOCK_COOKIE)?.value;
  if (token === UNLOCK_TOKEN) return NextResponse.next();

  const dest = req.headers.get('sec-fetch-dest');
  const referer = req.headers.get('referer');
  if (dest === 'iframe' && referer) {
    try {
      const origin = req.nextUrl.origin;
      const ref = new URL(referer);
      if (ref.origin === origin && ref.pathname.startsWith('/preview')) {
        return NextResponse.next();
      }
    } catch {}
  }

  const url = req.nextUrl.clone();
  url.pathname = '/unlock';
  url.search = `?next=${encodeURIComponent(req.nextUrl.pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!preview|unlock|api/unlock|_next|images|favicon.ico|robots.txt|sitemap.xml|icon|apple-icon|opengraph-image).*)'
  ]
};

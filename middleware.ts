import { NextResponse, type NextRequest } from 'next/server';

// Subdominio de la landing de Work and Travel (workandtravel.intersunsetcampus.com):
// - la raíz lleva a la landing
// - todo lo que se sirva en ese host va con noindex, para que no duplique contenido de camps
//   ni compita con intersunsetcampus.com/work-and-travel-usa/
const WT_HOST_PREFIX = 'workandtravel.';

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase();
  if (!host.startsWith(WT_HOST_PREFIX)) return NextResponse.next();

  if (req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/work-and-travel-2027';
    return NextResponse.redirect(url, 307);
  }
  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', 'noindex, follow');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

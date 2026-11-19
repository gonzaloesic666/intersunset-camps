import { NextResponse, type NextRequest } from 'next/server';

// Subdominio de la landing de Work and Travel (workandtravel.intersunsetcampus.com).
// La URL del navegador se mantiene en ese dominio (sin redirigir a camps): se sirve la landing
// "por debajo" con una reescritura, y todo lo servido en ese host va con noindex para que no
// duplique contenido de camps ni compita con intersunsetcampus.com/work-and-travel-usa/.
const WT_HOST_PREFIX = 'workandtravel.';

const WT_REWRITES: Record<string, string> = {
  '/': '/work-and-travel-2027',
  '/gracias': '/work-and-travel-2027/gracias',
  '/llamada-reservada': '/work-and-travel-2027/llamada-reservada',
};

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase();
  if (!host.startsWith(WT_HOST_PREFIX)) return NextResponse.next();

  const target = WT_REWRITES[req.nextUrl.pathname];
  let res: NextResponse;
  if (target) {
    const url = req.nextUrl.clone();
    url.pathname = target;
    res = NextResponse.rewrite(url);
  } else {
    res = NextResponse.next();
  }
  res.headers.set('X-Robots-Tag', 'noindex, follow');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

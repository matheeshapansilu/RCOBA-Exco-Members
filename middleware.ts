import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If the user is trying to access the login page, let them through
  if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Check if they have the authentication cookie (using v3 to log out all old devices)
  const isAuthenticated = request.cookies.has('rcoba_auth_v3');

  if (!isAuthenticated) {
    // TEMPORARILY DISABLED FOR GOOGLE ADSENSE APPROVAL
    // Redirect to the login page if not authenticated
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.jpg, logo2.png, members.csv (public files)
     * - ads.txt (AdSense verification)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.jpg|logo2.png|members.csv|ads.txt).*)',
  ],
};

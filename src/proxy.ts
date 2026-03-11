import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import env from './config/env';
import { JWTExtended } from './types/auth';

export async function proxy(request: NextRequest) {
  const token: JWTExtended | null = await getToken({
    req: request,
    secret: env.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  if (pathname === '/auth/login' || pathname === '/auth/register') {
    if (token) {
      const referer = request.headers.get('referer') ?? '/';
      return NextResponse.redirect(new URL(referer, request.url));
    }
  }

  if (pathname.startsWith('/admin')) {
    if (!token) {
      const url = new URL('/auth/login', request.nextUrl);
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    if (token.user?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  if (pathname.startsWith('/member')) {
    if (!token) {
      const url = new URL('/auth/login', request.nextUrl);
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    if (token.user?.role !== 'member') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname === '/member') {
    return NextResponse.redirect(new URL('/member/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/auth/:path*', '/admin/:path*', '/member/:path*'],
};

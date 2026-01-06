import { NextResponse } from "next/server";
export async function middleware(req) {
  const privateRoutes = ["/booking", "/my-booking"];
  const { pathname } = req.nextUrl;

  const token = req.cookies.get('next-auth.session-token') 
    || req.cookies.get('__Secure-next-auth.session-token');

  const isAuthenticate = !!token;
  const privateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (privateRoute && !isAuthenticate) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${(pathname)}`, req.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/booking/:path*", "/my-booking/:path*", '/((?!api|_next/static|_next/image|favicon.ico).*)',],
};

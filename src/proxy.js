import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
export async function proxy(req) {
  const privateRoutes = ["/booking", "/my-booking"]
  const {pathname} = req.nextUrl
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET, secureCookie: process.env.NODE_ENV === "production"})
  const isAuthenticate = !!token
  const privateRoute = privateRoutes.some(route => pathname.startsWith(route))
  if (privateRoute && !isAuthenticate) {
      return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(pathname)}`, req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/booking/:path*", "/my-booking/:path*"],
}
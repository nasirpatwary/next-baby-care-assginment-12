import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
const privateRoutes = ["/bookings", "/my-booking"]
export async function proxy(req) {
  const {pathname} = req.nextUrl
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
  const privateRoute = privateRoutes.some(route => pathname.startsWith(route))
  if (!token && privateRoute) {
      return NextResponse.redirect(new URL(`/login?callbackUrl=${pathname}`, req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/bookings/:path*", "/my-booking/:path*"],
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedRoutes = ["/dashboard", "/profile"]; // Example protected routes

  const accessToken = req.cookies.get("accessToken")?.value; // Access token stored in cookies

  if (
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) &&
    !accessToken
  ) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

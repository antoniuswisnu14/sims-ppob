import { NextResponse } from "next/server";

import { cookies } from "next/headers";

const protectedRoutes = ["/", "/top-up", "/transaction", "/akun", "/services"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session_token")?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && cookie && !req.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

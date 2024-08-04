import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authenticated =
    typeof window !== "undefined" && localStorage.getItem("authenticated");

  // For authenticated pages, if not authenticated redirect to login page
  if (!authenticated && request.nextUrl.pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // For login page, if already authenticated redirect to home page
  if (authenticated && request.nextUrl.pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/*", "/"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Redirect requests to / product - details to / products
  if (request.nextUrl.pathname.startsWith("/product-detail")) {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  // Show the same content on multiple URLs via a rewrite
  // Use rewrite to show the content for about-2 on /about.
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };

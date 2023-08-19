import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isAuthenticated(request: NextRequest) {
  return true;
}

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

  // Set a header on all requests `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // Can return a response too.
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };

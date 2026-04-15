import { NextResponse, type NextRequest } from "next/server";

import { SUBSCRIPTION_COOKIE_NAME } from "@/lib/utils";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const token = request.cookies.get(SUBSCRIPTION_COOKIE_NAME)?.value;

  requestHeaders.set("x-vercel-daily-subscriber", token ? "true" : "false");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/articles/:path*"],
};

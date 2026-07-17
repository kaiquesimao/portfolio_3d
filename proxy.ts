import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "./app/src/constants/seo";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple-icon") ||
    pathname.startsWith("/manifest") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    if (isLocale(locale)) {
      const response = NextResponse.next();
      response.headers.set("x-locale", locale);
      return response;
    }
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred =
    LOCALES.find((locale) =>
      acceptLanguage.toLowerCase().includes(locale),
    ) ?? DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${preferred}` : `/${preferred}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

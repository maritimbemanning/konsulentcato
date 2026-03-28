import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["no", "en"];
const defaultLocale = "no";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Check if the user prefers English
  const languages = acceptLanguage.split(",").map((l) => l.split(";")[0].trim().toLowerCase());
  for (const lang of languages) {
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("no") || lang.startsWith("nb") || lang.startsWith("nn")) return "no";
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to the preferred locale
  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next|images|og-image\\.jpg|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};

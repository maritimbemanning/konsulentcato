"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { no } from "@/content/no";
import { en } from "@/content/en";

type Lang = "no" | "en";
type Content = typeof no;

interface I18nContext {
  lang: Lang;
  t: Content;
  toggle: () => void;
}

const I18nContext = createContext<I18nContext>({
  lang: "no",
  t: no,
  toggle: () => {},
});

export function I18nProvider({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const t = lang === "en" ? en : no;

  const toggle = () => {
    const newLang = lang === "no" ? "en" : "no";
    // Replace /no or /en prefix with the new locale
    const newPath = pathname.replace(/^\/(no|en)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  return useContext(I18nContext);
}

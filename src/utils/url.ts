import { SUPPORTED_LOCALES } from "../locales";
import type { BlogEntry } from "./content";

export const getPathnameWithoutLocale = (url: string) => {
  const { pathname } = new URL(url);

  const pathnameWithoutLocale = SUPPORTED_LOCALES.reduce((acc, locale) => {
    if (acc.startsWith(`/${locale}`)) {
      return acc.replace(`/${locale}`, "");
    }
    return acc;
  }, pathname);

  return pathnameWithoutLocale || "/";
};

export const getBlogPathname = ({ slug }: BlogEntry) => {
  return `/posts/${slug}`;
};

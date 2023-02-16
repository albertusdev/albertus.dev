import type { AstroI18nextConfig } from "astro-i18next";

import { SUPPORTED_LOCALES } from "./src/locales";

export default {
  defaultLocale: "en",
  locales: SUPPORTED_LOCALES,
} as AstroI18nextConfig;

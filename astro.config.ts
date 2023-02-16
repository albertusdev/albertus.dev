import { defineConfig } from "astro/config";
// import i18n from "astro-i18n";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(), //
  ],
});

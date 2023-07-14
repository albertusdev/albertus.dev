import { defineConfig } from "astro/config";

// https://astro.build/config
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
});

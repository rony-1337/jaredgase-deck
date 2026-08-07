// @ts-check
import { defineConfig } from "astro/config";

// The whole site is unlisted on purpose. No sitemap is generated, and the
// layout sends a noindex header. Share by link only.
export default defineConfig({
  site: "https://deck.jaredgase.com",
  trailingSlash: "ignore",
  build: {
    // Clean URLs: /overview instead of /overview/index.html
    format: "file",
  },
  devToolbar: {
    enabled: false,
  },
});

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
  vite: {
    server: {
      // Local Customize builder: proxy /api to the local tailor server
      // (scripts/serve-tailor.ts on :4326) so the browser stays same-origin.
      // Dev-only; the production build is static and ignores this.
      proxy: {
        "/api": { target: "http://localhost:4326", changeOrigin: true },
      },
    },
  },
});

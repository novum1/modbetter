// @ts-check
// Last updated: 2026-02-05 01:35:00
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://modbetter.com",
  output: "static",
  adapter: vercel(),
  integrations: [sitemap()],
});

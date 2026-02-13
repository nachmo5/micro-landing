// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
  site: "https://mednach.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [vue()],
  site: "https://joseTINegocios.github.io",
  base: "/Aspros-Page/",
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
});

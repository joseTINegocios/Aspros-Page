import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [vue()],
  site: "https://joseTINegocios.github.io",
  base: "/Aspros-Page/",
});

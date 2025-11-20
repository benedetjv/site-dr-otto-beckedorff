import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE:
// Troque o nome abaixo PELO NOME EXATO DO SEU REPOSITÓRIO do GitHub Pages.
// No seu caso: `site-dr-otto-beckedorff`
export default defineConfig({
  base: "/site-dr-otto-beckedorff/",
  plugins: [react()],
});

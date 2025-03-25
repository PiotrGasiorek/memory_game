import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:map";
          @use "sass:meta";
          @use "${path.resolve(
            __dirname,
            "./src/styles/variables/_palette.scss"
          )}" as palette;
          @use "${path.resolve(
            __dirname,
            "./src/styles/variables/_spacing.scss"
          )}" as spacing;
          @use "${path.resolve(
            __dirname,
            "./src/styles/variables/_surface.scss"
          )}" as surface;
          @use "${path.resolve(
            __dirname,
            "./src/styles/_reset.scss"
          )}" as reset;
          @use "${path.resolve(
            __dirname,
            "./src/styles/_global.scss"
          )}" as global;
          @mixin text-size($size) {
            font-size: var(--font-size-#{$size});
          }
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

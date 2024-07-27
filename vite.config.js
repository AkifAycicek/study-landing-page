import react from "@vitejs/plugin-react";
import lodash from "lodash";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      fix: true,
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      defaultExportByFilename: true,
      imports: [
        "react",
        {
          from: "lodash",
          imports: lodash.keys(
            lodash.fromPairs(
              lodash.toPairs(lodash).filter(([key, value]) => typeof value == "function"),
            ),
          ),
        },
      ],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  server: {
    port: 6161,
    host: true,
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@style": new URL("./src/style/", import.meta.url).pathname,
      "@scss": new URL("./src/style/scss", import.meta.url).pathname,
      "@layout": new URL("./src/layout", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@plugins": new URL("./src/plugins", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@style/vendors/bootstrap/abstracts.scss";`,
      },
    },
  },
});

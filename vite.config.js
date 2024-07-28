import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import react from "@vitejs/plugin-react";
import lodash from "lodash";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/study-landing-page",
  plugins: [
    react(),
    pluginPurgeCss({
      content: ["index.html", "**/*.js", "**.*.jsx"],
      css: ["./dist/**/*.css"],
      safelist: {
        deep: [/btn/, /jam/, /leaf/],
      },
      variables: true,
    }),
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
    }),
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
        "react-i18next",
        "react-router-dom",
        {
          from: "prop-types",
          imports: [["default", "PropTypes"]],
        },
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
      "@": path.resolve(__dirname, "src"),
      "@style": path.resolve(__dirname, "src/style"),
      "@scss": path.resolve(__dirname, "src/style/scss"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/router"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@style/vendors/bootstrap/abstracts.scss";`,
      },
    },
  },
  // esbuild: {
  //   minifyIdentifiers: false, // keep variable names for debugging
  // },
  build: {
    // minify: "esbuild",
    sourcemap: true,
  },
});

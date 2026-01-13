import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// import { defineConfig } from "eslint/config";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig(
  {
    plugins: [
      // { enforce: "pre", ...mdx() },
      react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
      tailwindcss(),
    ],
    base: "/",
    server: {
      port: 3000,
      host: true,
      sourcemap: true,
      fs: {
        strict: false,
      },
    },
    build: {
      sourcemap: true,
      outDir: "dist",
    },
    clearScreen: false,
    logLevel: "info",
  },

  reactRefresh.configs.vite
);

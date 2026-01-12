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
    server: {
      port: 3000,
      host: true,
      sourcemap: true, // Enable source maps
      fs: {
        strict: false, // Allow reading files outside project root
      },
    },
    build: {
      sourcemap: true, // Production source maps too
    },
    clearScreen: false, // Don't clear terminal on errors
    logLevel: "info", // More detailed console logs
  },

  reactRefresh.configs.vite
);

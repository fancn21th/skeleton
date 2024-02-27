import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components"),
      name: "skeleton-design-system",
      fileName: (format) => `skeleton-design-system.${format}.js`,
    },
  },
});

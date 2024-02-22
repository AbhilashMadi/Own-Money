/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      // Define your aliases here
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets/index.ts"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@resources": path.resolve(__dirname, "src/resources"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@static": path.resolve(__dirname, "src/static"),
      "@types_": path.resolve(__dirname, "src/types_"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@keys": path.resolve(__dirname, "src/keys"),
      "@context": path.resolve(__dirname, "src/components/context"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@temp": path.resolve(__dirname, "src/temp"),
    },
  },
});
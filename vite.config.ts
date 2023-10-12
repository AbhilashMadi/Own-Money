import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /**
   * Declare the paths for files which are need,
   * NOTE: also need to declare the paths as same as in paths.json
   */
  resolve: {
    alias: {
      "@": "./src",
      "@components": "./src/components",
      "@assets": "./src/assets/index.ts",
      "@helpers": "./src/helpers",
      "@resources": "./src/resources",
      "@routes": "./src/routes",
      "@static": "./src/static",
      "@types_": "./src/types",
      "@styles": "./src/styles",
    },
  },
});

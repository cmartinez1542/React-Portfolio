import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * IMPORTANT (GitHub Pages):
 * - Set `base` to "/<YOUR_REPO_NAME>/" before deploying.
 * - Example: base: "/Portfolio-Website/"
 */
export default defineConfig({
  plugins: [react()],
  base: "/",
});

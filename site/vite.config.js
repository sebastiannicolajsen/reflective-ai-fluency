import { defineConfig } from "vite";

// GitHub Pages serves the site from /<repo>/, so assets need a relative base.
export default defineConfig({ base: "./", build: { outDir: "dist", target: "es2020" } });

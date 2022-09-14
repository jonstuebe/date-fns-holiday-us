import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  legacyOutput: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
});

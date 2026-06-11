import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["commonjs", "esm", "iife"],
  platform: "node",
  outDir: "./dist",
  dts: true,
  clean: true,
  minify: true,
  sourcemap: true,
  exports: true,
  cjsDefault: true,
  outputOptions: {
    name: "date_fns_holidays",
    globals: {
      "date-fns": "date_fns",
    },
  },
});

import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  dts: true,
  entry: ["src/world.ts"],
  format: ["esm"],
  minify: isProduction,
  sourcemap: true,
  shims: true,
});

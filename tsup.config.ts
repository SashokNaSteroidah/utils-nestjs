import { defineConfig } from "tsup";

export default defineConfig({
    minify: "terser",
    treeshake: "recommended",
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
});
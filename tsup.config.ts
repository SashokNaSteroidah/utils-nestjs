import { defineConfig } from "tsup";

export default defineConfig({
    minify: "terser",
    tsconfig: "./tsconfig.json",
    treeshake: "recommended",
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    legacyOutput: true,
    sourcemap: true,
    clean: true,
    bundle: false,
    terserOptions: {
        compress: true,
        module: true,
        keep_classnames: false,
        sourceMap: true,
        keep_fnames: false
    }
});
import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                format: "esm",
                file: "dist/index.mjs",
                exports: "auto",
                sourcemap: true,
            },
            {
                format: "cjs",
                file: "dist/index.js",
                exports: "auto",
                sourcemap: true
            }
        ],
        plugins: [vue(), scss(), peerDepsExternal(), typescript({outputToFilesystem: true, module: "ESNext"})]
    }
]
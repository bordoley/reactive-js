import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import fs from "fs";

const files = fs.readdirSync("./src");
const modules = files
  .filter(file => file.endsWith(".ts"))
  .map(file => file.replace(".ts", ""));
const input = modules.map(m => `./src/${m}.ts`);
const types = modules.map(m => `./build/${m}.d.ts`);

const output = {
  dir: "./mod",
  hoistTransitiveImports: false,
};

const typescriptConfig = {
  tsconfig: "tsconfig.base.json",
};

export default [
  { 
    treeshake: false,
    input,
    output: {
      ...output,
      chunkFileNames: "[name]-[hash].mjs",
      entryFileNames: "[name].mjs",
      format: "esm",
    },
    plugins: [typescript(typescriptConfig)],
  },
  {
    treeshake: false,
    input,
    output: {
      ...output,
      chunkFileNames: "[name]-[hash].js",
      entryFileNames: "[name].js",
      format: "cjs",
    },
    plugins: [typescript(typescriptConfig)],
  },
  {
    input: types,
    output: {
      ...output,
      format: "esm",
    },
    plugins: [dts()],
  },
];

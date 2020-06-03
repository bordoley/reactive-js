import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/svelte/example.js",
  output: {
    format: "iife",
    name: "ExampleSvelte",
    file: "build/svelte.js",
  },
  plugins: [
    svelte({
      dev: false,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
};

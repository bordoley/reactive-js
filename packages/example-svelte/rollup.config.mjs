import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default [
  {
    input: "src/example.js",
    output: {
      dir: "./build",
      format: "iife",
      name: "ExampleSvelte",
    },
    plugins: [
      svelte(),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
    ],
  },
];

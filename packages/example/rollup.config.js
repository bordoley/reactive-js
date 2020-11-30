import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

const typescriptConfig = {
  tsconfig: "tsconfig.json",
};

export default [
  {
    external: ["fs", "http", "mime-db", "mime-types", "zlib"],
    input: "src/example-server.ts",
    output: {
      dir: "./build",
      format: "cjs",
    },
    plugins: [
      resolve(),
      typescript(typescriptConfig),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser(),
    ],
  },
  {
    external: ["react", "react-dom", "scheduler"],
    input: "src/example-react.tsx",
    output: {
      dir: "./build",
      format: "iife",
      name: "ExampleReact",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        scheduler:
          "React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler",
      },
    },
    plugins: [
      typescript(typescriptConfig),
      resolve(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser(),
    ],
  },
  {
    input: "src/example-svelte.js",
    output: {
      dir: "./build",
      format: "iife",
      name: "ExampleSvelte",
    },
    plugins: [
      typescript(typescriptConfig),
      svelte({
        dev: false,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser(),
    ],
  },
];

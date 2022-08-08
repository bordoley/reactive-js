import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const typescriptConfig = {
  tsconfig: "tsconfig.json",
};

export default [
  {
    external: ["react", "react-dom", "react-dom/client", "scheduler"],
    input: "src/example.tsx",
    output: {
      dir: "./build",
      format: "iife",
      name: "ExampleReact",
      globals: {
        react: "React",
        "react-dom/client": "ReactDOM",
        scheduler:
          "React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler",
      },
    },
    plugins: [
      typescript(typescriptConfig),
      resolve(),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser({
        compress:{
          unsafe: true,
        unsafe_symbols: true
        }
      }),
    ],
  },
];

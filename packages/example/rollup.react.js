import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  external: ["react", "react-dom", "scheduler"],

  input: "build/esm/react/example.js",
  output: {
    file: "build/react.js",
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
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
};

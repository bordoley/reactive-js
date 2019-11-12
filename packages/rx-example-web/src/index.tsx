import * as React from "react";
import * as ReactDOM from "react-dom";

import { Observable } from "@rx-min/rx-core";

export const Hello = (props: { compiler: string; framework: string }) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example"),
);

console.log(Observable.connect);

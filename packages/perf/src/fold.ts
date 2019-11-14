const Benchmark = require("benchmark");

import { passthrough, sum, createArray } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = new Benchmark.Suite(`scan -> scan ${n} integers`);

  suite
    .add("rx-min", () => {
      const { lift } = require("@rx-min/rx-core");
      const { ofArray } = require("@rx-min/rx-observables");
      const { scan } = require("@rx-min/rx-operators");
      const { run } = require("./rx-min-runner");

      const observable = lift(ofArray(src), scan(sum, 0), scan(passthrough, 0));

      run(observable);
    })
    .add("rx-js", () => {
      const { from } = require("rxjs");
      const { scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const observable = from(src).pipe(scan(sum, 0), scan(passthrough, 0));
      run(observable);
    });

  return suite;
};

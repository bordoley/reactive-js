const Benchmark = require("benchmark");

import { add1, even, sum, createArray } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = new Benchmark.Suite(`filter -> map -> reduce ${n} integers`);

  suite
    .add("rx-min", () => {
      const { lift } = require("@rx-min/rx-core");
      const { ofArray } = require("@rx-min/rx-observables");
      const { keep, map, scan } = require("@rx-min/rx-operators");
      const { run } = require("./rx-min-runner");

      const observable = lift(
        ofArray(src),
        keep(even),
        map(add1),
        scan(sum, 0),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { from } = require("rxjs");
      const { filter, map, scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const observable = from(src).pipe(filter(even), map(add1), scan(sum, 0));
      run(observable);
    });

  return suite;
};

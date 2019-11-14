const Benchmark = require("benchmark");

import { add1, even, sum, createArray } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = new Benchmark.Suite(`filter -> map -> reduce ${n} integers`);

  suite
    .add("rx-min", () => {
      const { lift } = require("@reactive-js/rx-core");
      const { ofArray } = require("@reactive-js/rx-observables");
      const { keep, map, scan } = require("@reactive-js/rx-operators");
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
    })
    .add("callbags", () => {
      const { map, filter, scan, pipe } = require("callbag-basics");
      const { run } = require("./cb-runner");

      const fromArray = <T>(arr: ReadonlyArray<T>) => (t: any, d: any) => {
        if (t === 0) {
          d(0, () => {});
          for (let i = 0; i < arr.length; i++) {
            d(1, arr[i]);
          }
          d(2);
        }
      };

      const observable = pipe(
        fromArray(src),
        filter(even),
        map(add1),
        scan(sum, 0),
      );

      run(observable);
    });

  return suite;
};

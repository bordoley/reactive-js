const Benchmark = require("benchmark");

import { createArray, passthrough, sum } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = new Benchmark.Suite(`scan -> scan ${n} integers`);

  suite
    .add("reactive-js", () => {
      const { lift } = require("@reactive-js/rx-observable");
      const { fromArray } = require("@reactive-js/rx-observables");
      const { scan } = require("@reactive-js/rx-operators");
      const { run } = require("./reactive-js-runner");

      const observable = lift(
        fromArray(src),
        scan(sum, 0),
        scan(passthrough, 0),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { from } = require("rxjs");
      const { scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const observable = from(src).pipe(scan(sum, 0), scan(passthrough, 0));
      run(observable);
    })
    .add("callbags", () => {
      const { scan, pipe } = require("callbag-basics");
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
        scan(sum, 0),
        scan(passthrough, 0),
      );

      run(observable);
    });

  return suite;
};

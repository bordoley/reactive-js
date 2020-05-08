/* eslint-disable @typescript-eslint/no-var-requires */

import { add3, add3Arr, createArray, even } from "./utils";
const Benchmark = require("benchmark");

export const run = (n: number) => {
  const src = createArray(n);

  const suite = Benchmark.Suite(`combine(add3) -> filter ${n} x 3 integers`);

  suite
    .add("reactive-js", () => {
      const { pipe } = require("@reactive-js/core/lib/functions");
      const {
        combineLatest,
        fromArray,
        keep,
      } = require("@reactive-js/core/lib/observable");
      const { run } = require("./reactive-js-runner");

      const arrayObs = fromArray()(src);
      const other = fromArray()([0]);

      const observable = pipe(
        combineLatest([other, other, arrayObs], add3),
        keep(even),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { combineLatest, from } = require("rxjs");
      const { filter, map } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const arrayObs = from(src);
      const other = from([0]);

      const observable = combineLatest(other, other, arrayObs).pipe(
        map(add3Arr),
        filter(even),
      );
      run(observable);
    })
    .add("callbags", () => {
      const { combine, map, filter, pipe } = require("callbag-basics");
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

      const cbArray = fromArray(src);
      const other = fromArray([0]);

      const observable = pipe(
        combine(other, other, cbArray),
        map(add3Arr),
        filter(even),
      );

      run(observable);
    });

  return suite;
};

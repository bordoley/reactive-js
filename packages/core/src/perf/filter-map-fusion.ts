/* eslint-disable @typescript-eslint/no-var-requires */

import { isEven, returns } from "../lib/functions";
import { add1, createArray, odd, sum } from "./utils";
const Benchmark = require("benchmark");

export const run = (n: number) => {
  const src = createArray(n);

  const suite = Benchmark.Suite(`filter -> map -> fusion ${n} integers`);

  suite
    .add("reactive-js", () => {
      const { pipe } = require("@reactive-js/core/lib/functions");
      const {
        fromArray,
        keep,
        map,
        reduce,
      } = require("@reactive-js/core/lib/observable");
      const { run } = require("./reactive-js-runner");

      pipe(
        src,
        fromArray(),
        map(add1),
        keep(odd),
        map(add1),
        map(add1),
        keep(isEven),
        reduce(sum, returns(0)),
        run,
      );
    })
    .add("rx-js", () => {
      const { from } = require("rxjs");
      const { filter, map, reduce } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const observable = from(src).pipe(
        map(add1),
        filter(odd),
        map(add1),
        map(add1),
        filter(isEven),
        reduce(sum, 0),
      );
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
        map(add1),
        filter(odd),
        map(add1),
        map(add1),
        filter(isEven),
        scan(sum, 0),
      );

      run(observable);
    });

  return suite;
};

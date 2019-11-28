const Benchmark = require("benchmark");
import { add3Arr, createArray, even } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = Benchmark.Suite(`combine(add3) -> filter ${n} x 3 integers`);

  suite
    .add("reactive-js", () => {
      const {
        combineLatest,
        fromArray,
        keep,
        map,
        pipe,
      } = require("@reactive-js/rx-observable");
      const { run } = require("./reactive-js-runner");

      const arrayObs = fromArray(src);

      const observable = pipe(
        combineLatest(arrayObs, arrayObs, arrayObs),
        map(add3Arr),
        keep(even),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { combineLatest, from } = require("rxjs");
      const { filter, map, scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const arrayObs = from(src);

      const observable = combineLatest(arrayObs, arrayObs, arrayObs).pipe(
        map(add3Arr),
        filter(even),
      );
      run(observable);
    })
    .add("callbags", () => {
      const { combine, map, filter, scan, pipe } = require("callbag-basics");
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

      const observable = pipe(
        combine(cbArray, cbArray, cbArray),
        map(add3Arr),
        filter(even),
      );

      run(observable);
    });

  return suite;
};

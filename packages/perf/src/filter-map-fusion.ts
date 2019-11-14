const Benchmark = require("benchmark");
import { add1, even, odd, sum, createArray } from "./utils";

export const run = (n: number) => {
  const src = createArray(n);

  const suite = Benchmark.Suite(`filter -> map -> fusion ${n} integers`);

  suite
    .add("rx-min", () => {
      const { lift } = require("@rx-min/rx-core");
      const { ofArray } = require("@rx-min/rx-observables");
      const { keep, map, scan } = require("@rx-min/rx-operators");
      const { run } = require("./rx-min-runner");

      const observable = lift(
        ofArray(src),
        map(add1),
        keep(odd),
        map(add1),
        map(add1),
        keep(even),
        scan(sum, 0),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { from } = require("rxjs");
      const { filter, map, scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const observable = from(src).pipe(
        map(add1),
        filter(odd),
        map(add1),
        map(add1),
        filter(even),
        scan(sum, 0),
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
        filter(even),
        scan(sum, 0),
      );

      run(observable);
    });

  return suite;
};

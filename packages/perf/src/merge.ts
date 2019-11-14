const Benchmark = require("benchmark");

import { sum } from "./utils";

const createSrcData = (m: number, n: number) => {
  const a = new Array(n);
  for (var i = 0; i < a.length; ++i) {
    a[i] = buildArray(i * 1000, m);
  }
  return a;
};

const buildArray = (base: number, n: number) => {
  var a = new Array(n);
  for (var i = 0; i < a.length; ++i) {
    a[i] = base + i;
  }
  return a;
};

export const run = (m: number, n: number) => {
  const src = createSrcData(m, n);

  const suite = new Benchmark.Suite(`merge ${m} x ${n} streams`);

  suite
    .add("reactive-js", () => {
      const { Observable } = require("@reactive-js/rx-core");
      const { merge, fromArray } = require("@reactive-js/rx-observables");
      const { scan } = require("@reactive-js/rx-operators");
      const { run } = require("./reactive-js-runner");

      const streams = src.map(x => fromArray(x));
      const observable = Observable.lift(
        merge.apply(undefined, streams),
        scan(sum, 0),
      );

      run(observable);
    })
    .add("rx-js", () => {
      const { merge, from } = require("rxjs");
      const { scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const streams = src.map(x => from(x));
      const observable = merge.apply(undefined, streams).pipe(scan(sum, 0));

      run(observable);
    })
    .add("callbags", () => {
      const { merge, scan, pipe } = require("callbag-basics");
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

      const streams = src.map(fromArray);

      const observable = pipe(merge.apply(void 0, streams), scan(sum, 0));

      run(observable);
    });

  return suite;
};

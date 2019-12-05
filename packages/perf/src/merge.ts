/* eslint-disable @typescript-eslint/no-var-requires */

import { sum } from "./utils";

const Benchmark = require("benchmark");

const createSrcData = (m: number, n: number) => {
  const a = new Array(n);
  for (let i = 0; i < a.length; ++i) {
    a[i] = buildArray(i * 1000, m);
  }
  return a;
};

const buildArray = (base: number, n: number) => {
  const a = new Array(n);
  for (let i = 0; i < a.length; ++i) {
    a[i] = base + i;
  }
  return a;
};

export const run = (m: number, n: number) => {
  const src = createSrcData(m, n);

  const suite = new Benchmark.Suite(`merge ${m} x ${n} streams`);

  suite
    .add("reactive-js", () => {
      const {
        fromArray,
        merge,
        pipe,
        scan,
      } = require("@reactive-js/observable");
      const { run } = require("./reactive-js-runner");

      const streams = src.map(x => fromArray(x));
      const observable = pipe(merge(...streams), scan(sum, 0));

      run(observable);
    })
    .add("rx-js", () => {
      const { merge, from } = require("rxjs");
      const { scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const streams = src.map(x => from(x));
      const observable = merge(...streams).pipe(scan(sum, 0));

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

      const observable = pipe(merge(...streams), scan(sum, 0));

      run(observable);
    });

  return suite;
};

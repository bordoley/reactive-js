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
    .add("rx-min", () => {
      const { lift } = require("@rx-min/rx-core");
      const { merge, ofArray } = require("@rx-min/rx-observables");
      const { scan } = require("@rx-min/rx-operators");
      const { run } = require("./rx-min-runner");

      const streams = src.map(x => ofArray(x));
      const observable = lift(merge.apply(undefined, streams), scan(sum, 0));

      run(observable);
    })
    .add("rx-js", () => {
      const { merge, from } = require("rxjs");
      const { scan } = require("rxjs/operators");
      const { run } = require("./rxjs-runner");

      const streams = src.map(x => from(x));
      const observable = merge.apply(undefined, streams).pipe(scan(sum, 0));

      run(observable);
    });

  return suite;
};

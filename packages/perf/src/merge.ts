const Benchmark = require("benchmark");

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

const add1 = (x: number) => x + 1;
const even = (x: number) => x % 2 === 0;
const odd = (x: number) => x % 2 !== 0;
const sum = (x: number, y: number) => x + y;

export const run = (m: number, n: number) => {
  const src = createSrcData(m, n);

  const suite = new Benchmark.Suite(`merge ${m} x ${n} streams`);

  suite
    .add("rx-min", () => {
      const { lift } = require("@rx-min/rx-core");
      const { merge, ofArray } = require("@rx-min/rx-observables");
      const { last, scan } = require("@rx-min/rx-operators");
      const { run } = require("./runners/rx-min-runner");

      const streams = src.map(x => ofArray(x));
      const observable = lift(merge.apply(undefined, streams), scan(sum, 0));

      run(observable);
    })
    .add("rx-js", () => {
      const { merge, from } = require("rxjs");
      const { last, scan } = require("rxjs/operators");
      const { run } = require("./runners/rxjs-runner");

      const streams = src.map(x => from(x));
      const observable = merge.apply(undefined, streams).pipe(scan(sum, 0));

      run(observable);
    });

  return suite;
};

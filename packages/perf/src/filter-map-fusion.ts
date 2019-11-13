

const Benchmark = require('benchmark');


const createSrcData = (n: number) => {
  const src = new Array(n);
  for (var i = 0; i < src.length; ++i) {
    src[i] = i;
  }
  return src;
}

const add1 = (x: number) => x + 1;
const even = (x: number) => x % 2 === 0;
const odd = (x: number) => x % 2 !== 0;
const sum = (x: number, y: number) => x + y;


export const run = (n: number) => {
  const src = createSrcData(n);

  const suite = Benchmark.Suite(`filter -> map -> fusion ${n} integers`);

  suite.add('rx-min', (deferred: any) => {
    const { lift } = require('@rx-min/rx-core');
    const { ofArray } = require('@rx-min/rx-observables');
    const { keep, map, scan } = require('@rx-min/rx-operators');
    const { run } = require('./runners/rx-min-runner');

    const observable = lift(
      ofArray(src),
      map(add1),
      keep(odd),
      map(add1),
      map(add1),
      keep(even),
      scan(sum, 0),
    );

    run(observable, deferred);
  }).add('rx-js', (deferred: any) => {
    const { of } = require('rxjs');
    const { filter, map, scan } = require('rxjs/operators');
    const { run } = require('./runners/rxjs-runner');

    const observable =
      of(src).pipe(
        map(add1),
        filter(odd),
        map(add1),
        map(add1),
        filter(even),
        scan(sum, 0),
      );
    run(observable, deferred);
  })

  return suite;
};
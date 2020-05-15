import {
  defer,
  isEven,
  sum,
  increment,
  isOdd,
  returns,
  callWith,
  bind,
} from "../lib/functions";
import { benchmarkTest, benchmarkGroup } from "../lib/internal/benchmark";

export const passthrough = <T>(_: T, x: T) => x;
export const createArray = (n: number): ReadonlyArray<number> => {
  const src = new Array(n);
  for (let i = 0; i < src.length; ++i) {
    src[i] = i;
  }
  return src;
};

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    bind<number, readonly number[]>(createArray, n),
    benchmarkTest(
      "enumerable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/enumerable"
        );

        return defer(
          src,
          fromArray(),
          map(increment),
          keep(isOdd),
          map(increment),
          map(increment),
          keep(isEven),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "observable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/observable"
        );

        return defer(
          src,
          fromArray(),
          map(increment),
          keep(isOdd),
          map(increment),
          map(increment),
          keep(isEven),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/runnable"
        );

        return defer(
          src,
          fromArray(),
          map(increment),
          keep(isOdd),
          map(increment),
          map(increment),
          keep(isEven),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { filter, map, reduce } = await import("rxjs/operators");

        return from(src).pipe(
          map(increment),
          filter(isOdd),
          map(increment),
          map(increment),
          filter(isEven),
          reduce(sum, 0),
        );
      },
      x => x.subscribe(),
    ),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    () => createArray(n),
    benchmarkTest(
      "enumerable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/enumerable"
        );

        return defer(
          src,
          fromArray(),
          keep(isEven),
          map(increment),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "observable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/observable"
        );

        return defer(
          src,
          fromArray(),
          keep(isEven),
          map(increment),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, keep, map, reduce } = await import(
          "../lib/runnable"
        );

        return defer(
          src,
          fromArray(),
          keep(isEven),
          map(increment),
          reduce(sum, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { filter, map, reduce } = await import("rxjs/operators");

        return from(src).pipe(filter(isEven), map(increment), reduce(sum, 0));
      },
      x => x.subscribe(),
    ),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    () => createArray(n),
    benchmarkTest(
      "enumerable",
      async src => {
        const { fromArray, reduce, scan } = await import("../lib/enumerable");

        return defer(
          src,
          fromArray(),
          scan(sum, returns(0)),
          reduce(passthrough, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "observable",
      async src => {
        const { fromArray, reduce, scan } = await import(
          "../lib/observable"
        );

        return defer(
          src,
          fromArray(),
          scan(sum, returns(0)),
          reduce(passthrough, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, reduce, scan } = await import("../lib/runnable");

        return defer(
          src,
          fromArray(),
          scan(sum, returns(0)),
          reduce<number, number>(passthrough, returns(0)),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { scan, reduce } = await import("rxjs/operators");

        return from(src).pipe(scan(sum, 0), reduce(passthrough, 0));
      },
      x => x.subscribe(),
    ),
  );

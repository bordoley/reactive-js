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

const createMapPerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { toArray } = await import("../lib/runnable");

      return defer(
        src,
        m.fromArray(),
        m.map(increment),
        m.toRunnable(),
        toArray(),
      );
    },
    callWith(),
  );

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    bind<number, readonly number[]>(createArray, n),
    createMapPerfTest("enumerable", "../lib/enumerable"),
    createMapPerfTest("observable", "../lib/observable"),
    createMapPerfTest("runnable", "../lib/runnable"),
    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { map, toArray } = await import("rxjs/operators");

        return from(src).pipe(map(increment), toArray());
      },
      x => x.subscribe(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src => {
        const { map } = await import("../lib/readonlyArray");

        return defer(
          src,
          map(increment),
        );
      },
      callWith()
    ),
    benchmarkTest(
      "array methods",
      async src => {
        return src;
      },
      src => src.map(increment),
    ),
  );

const createFilterMapFusionPerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { reduce } = await import("../lib/runnable");

      return defer(
        src,
        m.fromArray(),
        m.map(increment),
        m.keep(isOdd),
        m.map(increment),
        m.map(increment),
        m.keep(isEven),
        m.toRunnable(),
        reduce(sum, returns(0)),
      );
    },
    callWith(),
  );

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    bind<number, readonly number[]>(createArray, n),
    createFilterMapFusionPerfTest("enumerable", "../lib/enumerable"),
    createFilterMapFusionPerfTest("observable", "../lib/observable"),
    createFilterMapFusionPerfTest("runnable", "../lib/runnable"),
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
    benchmarkTest(
      "array methods",
      async src => {
        return src;
      },
      src =>
        src
          .map(increment)
          .filter(isOdd)
          .map(increment)
          .map(increment)
          .filter(isEven)
          .reduce((a, b) => sum(a, b), 0),
    ),
  );

const createFilterMapReducePerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { reduce } = await import("../lib/runnable");

      return defer(
        src,
        m.fromArray(),
        m.keep(isEven),
        m.map(increment),
        m.toRunnable(),
        reduce(sum, returns(0)),
      );
    },
    callWith(),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    () => createArray(n),
    createFilterMapReducePerfTest("enumerable", "../lib/enumerable"),
    createFilterMapReducePerfTest("observable", "../lib/observable"),
    createFilterMapReducePerfTest("runnable", "../lib/runnable"),

    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { filter, map, reduce } = await import("rxjs/operators");

        return from(src).pipe(filter(isEven), map(increment), reduce(sum, 0));
      },
      x => x.subscribe(),
    ),
    benchmarkTest(
      "array methods",
      async src => {
        return src;
      },
      src =>
        src
          .filter(isEven)
          .map(increment)
          .reduce((a, b) => sum(a, b), 0),
    ),
  );

const createScanReducePerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { reduce } = await import("../lib/runnable");

      return defer(
        src,
        m.fromArray(),
        m.scan(sum, returns(0)),
        m.toRunnable(),
        reduce<number, number>(passthrough, returns(0)),
      );
    },
    callWith(),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    () => createArray(n),
    createScanReducePerfTest("enumerable", "../lib/enumerable"),
    createScanReducePerfTest("observable", "../lib/observable"),
    createScanReducePerfTest("runnable", "../lib/runnable"),
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

export const every = (n: number) =>
  benchmarkGroup(
    `every ${n} integers`,
    () => createArray(n),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, everySatisfy } = await import("../lib/runnable");
        return defer(
          src,
          fromArray(),
          everySatisfy(i => i < 0),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src => {
        const { everySatisfy } = await import("../lib/readonlyArray");
        return defer(
          src,
          everySatisfy(i => i < 0),
        );
      },
      callWith(),
    ),
    benchmarkTest(
      "array methods",
      async src => {
        return src;
      },
      src => src.every(i => i < 0), 
    ),
  );

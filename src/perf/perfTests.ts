import { benchmarkTest, benchmarkGroup } from "../experimental/benchmark";
import {
  defer,
  isEven,
  sum,
  increment,
  isOdd,
  returns,
  callWith,
} from "../functions";

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
      const { toArray } = await import("../runnable");

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
    defer<number, readonly number[]>(n, createArray),
    createMapPerfTest("enumerable", "../enumerable"),
    createMapPerfTest("observable", "../observable"),
    createMapPerfTest("runnable", "../runnable"),
    createMapPerfTest("sequence", "../sequence"),
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
      "wonka",
      async src => {
        const Wonka = await import ("wonka");
        return () => Wonka.pipe(
          Wonka.fromArray(src as number[]),
          Wonka.map(increment),
          Wonka.toArray
        );
      },
      x => x(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src => {
        const { map } = await import("../readonlyArray");

        return defer(src, map(increment));
      },
      callWith(),
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
      const { reduce } = await import("../runnable");

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
    defer<number, readonly number[]>(n, createArray),
    createFilterMapFusionPerfTest("enumerable", "../enumerable"),
    createFilterMapFusionPerfTest("observable", "../observable"),
    createFilterMapFusionPerfTest("runnable", "../runnable"),
    createFilterMapFusionPerfTest("sequence", "../sequence"),
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
      "wonka",
      async src => {
        const Wonka = await import ("wonka");
        return () => Wonka.pipe(
          Wonka.fromArray(src as number[]),
          Wonka.map(increment),
          Wonka.filter(isOdd),
          Wonka.map(increment),
          Wonka.map(increment),
          Wonka.filter(isEven),
          Wonka.scan(sum, 0),
          Wonka.takeLast(1),
          Wonka.toArray,
        );
      },
      x => x(),
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
      const { reduce } = await import("../runnable");

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
    defer<number, readonly number[]>(n, createArray),
    createFilterMapReducePerfTest("enumerable", "../enumerable"),
    createFilterMapReducePerfTest("observable", "../observable"),
    createFilterMapReducePerfTest("runnable", "../runnable"),
    createFilterMapReducePerfTest("sequence", "../sequence"),
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
    benchmarkTest(
      "wonka",
      async src => {
        const Wonka = await import ("wonka");
        return () => Wonka.pipe(
          Wonka.fromArray(src as number[]),
          Wonka.filter(isEven),
          Wonka.map(increment),
          Wonka.scan(sum, 0),
          Wonka.takeLast(1),
          Wonka.toArray,
        );
      },
      x => x(),
    ),
  );

const createScanReducePerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { reduce } = await import("../runnable");

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
    defer<number, readonly number[]>(n, createArray),
    createScanReducePerfTest("enumerable", "../enumerable"),
    createScanReducePerfTest("observable", "../observable"),
    createScanReducePerfTest("runnable", "../runnable"),
    createScanReducePerfTest("sequence", "../sequence"),
    benchmarkTest(
      "rx-js",
      async src => {
        const { from } = await import("rxjs");
        const { scan, reduce } = await import("rxjs/operators");

        return from(src).pipe(scan(sum, 0), reduce(passthrough, 0));
      },
      x => x.subscribe(),
    ),
    benchmarkTest(
      "wonka",
      async src => {
        const Wonka = await import ("wonka");
        return () => Wonka.pipe(
          Wonka.fromArray(src as number[]),
          Wonka.scan(sum, 0),
          Wonka.scan(passthrough, 0),
          Wonka.takeLast(1),
          Wonka.toArray,
        );
      },
      x => x(),
    ),
  );

export const every = (n: number) =>
  benchmarkGroup(
    `every ${n} integers`,
    () => createArray(n),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, everySatisfy } = await import("../runnable");
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
        const { everySatisfy } = await import("../readonlyArray");
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

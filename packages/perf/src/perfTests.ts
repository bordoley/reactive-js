import { benchmarkTest, benchmarkGroup } from "@reactive-js/core/benchmark";
import {
  defer,
  isEven,
  sum,
  increment,
  isOdd,
  returns,
  callWith,
} from "@reactive-js/core/functions";

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
      const { toArray } = await import("@reactive-js/core/runnable");

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
    createMapPerfTest("enumerable", "@reactive-js/core/enumerable"),
    createMapPerfTest("observable", "@reactive-js/core/observable"),
    createMapPerfTest("runnable", "@reactive-js/core/runnable"),
    createMapPerfTest("sequence", "@reactive-js/core/sequence"),
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
        const Wonka = await import("wonka");
        return () =>
          Wonka.pipe(
            Wonka.fromArray(src as number[]),
            Wonka.map(increment),
            Wonka.toArray,
          );
      },
      x => x(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src => {
        const { map } = await import("@reactive-js/core/readonlyArray");

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
      const { reduce } = await import("@reactive-js/core/runnable");

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
    createFilterMapFusionPerfTest("enumerable", "@reactive-js/core/enumerable"),
    createFilterMapFusionPerfTest("observable", "@reactive-js/core/observable"),
    createFilterMapFusionPerfTest("runnable", "@reactive-js/core/runnable"),
    createFilterMapFusionPerfTest("sequence", "@reactive-js/core/sequence"),
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
        const Wonka = await import("wonka");
        return () =>
          Wonka.pipe(
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
      const { reduce } = await import("@reactive-js/core/runnable");

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
    createFilterMapReducePerfTest("enumerable", "@reactive-js/core/enumerable"),
    createFilterMapReducePerfTest("observable", "@reactive-js/core/observable"),
    createFilterMapReducePerfTest("runnable", "@reactive-js/core/runnable"),
    createFilterMapReducePerfTest("sequence", "@reactive-js/core/sequence"),
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
        const Wonka = await import("wonka");
        return () =>
          Wonka.pipe(
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
    benchmarkTest(
      "most",
      async src => {
        const { map, filter } = await import("@most/core");
        const { reduce } = await import("./most/reduce");
        const { fromArray } = await import("./most/fromArray");

        return () =>
          reduce(sum, 0, map(increment, filter(isEven, fromArray(src))));
      },
      f => f(),
    ),
  );

const createScanReducePerfTest = (name: string, module: string) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) => {
      const m: any = await import(module);
      const { reduce } = await import("@reactive-js/core/runnable");

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
    createScanReducePerfTest("enumerable", "@reactive-js/core/enumerable"),
    createScanReducePerfTest("observable", "@reactive-js/core/observable"),
    createScanReducePerfTest("runnable", "@reactive-js/core/runnable"),
    createScanReducePerfTest("sequence", "@reactive-js/core/sequence"),
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
        const Wonka = await import("wonka");
        return () =>
          Wonka.pipe(
            Wonka.fromArray(src as number[]),
            Wonka.scan(sum, 0),
            Wonka.scan(passthrough, 0),
            Wonka.takeLast(1),
            Wonka.toArray,
          );
      },
      x => x(),
    ),
    benchmarkTest(
      "most",
      async src => {
        const { scan } = await import("@most/core");
        const { reduce } = await import("./most/reduce");
        const { fromArray } = await import("./most/fromArray");

        return () =>
          reduce<number, number>(passthrough, 0, scan(sum, 0, fromArray(src)));
      },
      f => f(),
    ),
  );

export const every = (n: number) =>
  benchmarkGroup(
    `every ${n} integers`,
    () => createArray(n),
    benchmarkTest(
      "runnable",
      async src => {
        const { fromArray, everySatisfy } = await import("@reactive-js/core/runnable");
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
        const { everySatisfy } = await import("@reactive-js/core/readonlyArray");
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

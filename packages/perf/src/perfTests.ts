import { benchmarkTest, benchmarkGroup } from "./benchmark.js";
import {
  pipeLazy,
  isEven,
  increment,
  isOdd,
  returns,
  none,
  Optional,
} from "@reactive-js/core/functions";

/**
 * A function that returns the result of summing
 * it's arguments.
 */
const sum = (...args: number[]) => {
  let acc = 0;
  const length = args.length;
  for (let i = 0; i < length; i++) {
    acc += args[i];
  }
  return acc;
};

export const passthrough = <T>(_: T, x: T) => x;
export const createArray = (n: number): ReadonlyArray<number> => {
  const src = new Array(n);
  for (let i = 0; i < src.length; ++i) {
    src[i] = i;
  }
  return src;
};

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    benchmarkTest("Observable", async (src: readonly number[]) => {
      const Observable = await import(
        "@reactive-js/core/concurrent/Observable"
      );

      return pipeLazy(
        src,
        Observable.fromReadonlyArray(),
        Observable.map(increment),
        Observable.reduce(
          (_, x) => x,
          () => 0,
        ),
      );
    }),
    benchmarkTest("Deferable", async (src: readonly number[]) => {
      const Deferable = await import(
        "@reactive-js/core/computations/Deferable"
      );

      return pipeLazy(
        src,
        Deferable.fromReadonlyArray(),
        Deferable.map(increment),
        Deferable.reduce(
          (_, x) => x,
          () => 0,
        ),
      );
    }),
    benchmarkTest("rx-js Observable", async (src: readonly number[]) => {
      const Observable = await import("rxjs");

      return () => {
        let result: Optional<number> = none;
        Observable.from(src)
          .pipe(
            Observable.map(increment),
            Observable.reduce((_, x) => x, 0),
          )
          .subscribe(x => {
            result = x;
          });
        return result;
      };
    }),
    benchmarkTest("array methods", async src => {
      return () => src.map(increment).reduce((_, x) => x, 0);
    }),
    benchmarkTest("most", async src => {
      const { map } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return pipeLazy(
        src,
        fromArray,
        x => map(increment, x),
        x => reduce((_, x: number) => x, 0, x),
      );
    }),
  );

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    benchmarkTest("Observable", async (src: readonly number[]) => {
      const Observable = await import(
        "@reactive-js/core/concurrent/Observable"
      );

      return pipeLazy(
        src,
        Observable.fromReadonlyArray(),
        Observable.map(increment),
        Observable.keep(isOdd),
        Observable.map(increment),
        Observable.map(increment),
        Observable.keep(isEven),
        Observable.reduce(sum, () => 0),
      );
    }),
    benchmarkTest("Deferable", async (src: readonly number[]) => {
      const Deferable = await import(
        "@reactive-js/core/computations/Deferable"
      );

      return pipeLazy(
        src,
        Deferable.fromReadonlyArray(),
        Deferable.map(increment),
        Deferable.keep(isOdd),
        Deferable.map(increment),
        Deferable.map(increment),
        Deferable.keep(isEven),
        Deferable.reduce(sum, () => 0),
      );
    }),
    benchmarkTest("rx-js Observable", async (src: readonly number[]) => {
      const Observable = await import("rxjs");

      return () => {
        let result: Optional<number> = none;
        Observable.from(src)
          .pipe(
            Observable.map(increment),
            Observable.filter(isOdd),
            Observable.map(increment),
            Observable.map(increment),
            Observable.filter(isEven),
            Observable.reduce(sum, 0),
          )
          .subscribe(x => {
            result = x;
          });

        return result;
      };
    }),
    benchmarkTest(
      "array methods",
      async src => () =>
        src
          .map(increment)
          .filter(isOdd)
          .map(increment)
          .map(increment)
          .filter(isEven)
          .reduce((a, b) => sum(a, b), 0),
    ),
    benchmarkTest("most", async src => {
      const { map, filter } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return pipeLazy(
        src,
        fromArray,
        x => map(increment, x),
        x => filter(isOdd, x),
        x => map(increment, x),
        x => map(increment, x),
        x => filter(isEven, x),
        x => reduce(sum, 0, x),
      );
    }),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    benchmarkTest("Observable", async (src: readonly number[]) => {
      const Observable = await import(
        "@reactive-js/core/concurrent/Observable"
      );
      return pipeLazy(
        src,
        Observable.fromReadonlyArray(),
        Observable.keep(isEven),
        Observable.map(increment),
        Observable.reduce(sum, () => 0),
      );
    }),
    benchmarkTest("Deferable", async (src: readonly number[]) => {
      const Deferable = await import(
        "@reactive-js/core/computations/Deferable"
      );
      return pipeLazy(
        src,
        Deferable.fromReadonlyArray(),
        Deferable.keep(isEven),
        Deferable.map(increment),
        Deferable.reduce(sum, () => 0),
      );
    }),
    benchmarkTest("rx-js Observable", async (src: readonly number[]) => {
      const Observable = await import("rxjs");

      return () => {
        let result: Optional<number> = none;
        Observable.from(src)
          .pipe(
            Observable.filter(isEven),
            Observable.map(increment),
            Observable.reduce(sum, 0),
          )
          .subscribe(x => {
            result = x;
          });

        return result;
      };
    }),
    benchmarkTest(
      "array methods",
      async src => () =>
        src
          .filter(isEven)
          .map(increment)
          .reduce((a, b) => sum(a, b), 0),
    ),
    benchmarkTest("most", async src => {
      const { map, filter } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return pipeLazy(
        src,
        fromArray,
        x => filter(isEven, x),
        x => map(increment, x),
        x => reduce(sum, 0, x),
      );
    }),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    benchmarkTest("Observable", async (src: readonly number[]) => {
      const Observable = await import(
        "@reactive-js/core/concurrent/Observable"
      );
      return pipeLazy(
        src,
        Observable.fromReadonlyArray(),
        Observable.scan(sum, returns(0)),
        Observable.reduce(passthrough, () => 0),
      );
    }),
    benchmarkTest("Deferable", async (src: readonly number[]) => {
      const Deferable = await import(
        "@reactive-js/core/computations/Deferable"
      );
      return pipeLazy(
        src,
        Deferable.fromReadonlyArray(),
        Deferable.scan(sum, returns(0)),
        Deferable.reduce(passthrough, () => 0),
      );
    }),
    benchmarkTest("rx-js Observable", async (src: readonly number[]) => {
      const Observable = await import("rxjs");

      return () => {
        let result: Optional<number> = none;
        Observable.from(src)
          .pipe(Observable.scan(sum, 0), Observable.reduce(passthrough, 0))
          .subscribe(x => {
            result = x;
          });

        return result;
      };
    }),
    benchmarkTest("most", async src => {
      const { scan } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return pipeLazy(
        src,
        fromArray,
        x => scan(sum, 0, x),
        x => reduce(passthrough, 0, x),
      );
    }),
  );

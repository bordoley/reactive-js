import { increment } from "@reactive-js/core/math";
import { benchmarkTest, benchmarkGroup } from "./benchmark.js";
import {
  pipeLazy,
  isEven,
  isOdd,
  returns,
  none,
  Optional,
} from "@reactive-js/core/functions";
import * as SynchronousObservable from  "@reactive-js/core/computations/SynchronousObservable"
import * as Computation from "@reactive-js/core/computations/Computation";
import * as Runnable from "@reactive-js/core/computations/Runnable";

const m = Computation.makeModule<SynchronousObservable.Computation>()(SynchronousObservable);

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
      return pipeLazy(
        src,
        Computation.fromReadonlyArray(m),
        SynchronousObservable.map(increment),
        SynchronousObservable.toRunnable(),
        Runnable.last(),
      );
    }),
    benchmarkTest("Runnable", async (src: readonly number[]) => {
      return pipeLazy(
        src,
        Runnable.fromReadonlyArray(),
        Runnable.map(increment),
        Runnable.last(),
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
      return pipeLazy(
        src,
        Computation.fromReadonlyArray(m),
        SynchronousObservable.map(increment),
        SynchronousObservable.keep(isOdd),
        SynchronousObservable.map(increment),
        SynchronousObservable.map(increment),
        SynchronousObservable.keep(isEven),
        SynchronousObservable.toRunnable(),
        Runnable.last(),
      );
    }),
    benchmarkTest("Runnable", async (src: readonly number[]) => {
      return pipeLazy(
        src,
        Runnable.fromReadonlyArray(),
        Runnable.map(increment),
        Runnable.keep(isOdd),
        Runnable.map(increment),
        Runnable.map(increment),
        Runnable.keep(isEven),
        Runnable.last(),
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
      return pipeLazy(
        src,
        Computation.fromReadonlyArray(m),
        SynchronousObservable.keep(isEven),
        SynchronousObservable.map(increment),
        SynchronousObservable.toRunnable(),
        Runnable.last(),
      );
    }),
    benchmarkTest("Runnable", async (src: readonly number[]) => {
      return pipeLazy(
        src,
        Runnable.fromReadonlyArray(),
        Runnable.keep(isEven),
        Runnable.map(increment),
        Runnable.last(),
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
      return pipeLazy(
        src,
        Computation.fromReadonlyArray(m),
        SynchronousObservable.scan(sum, returns(0)),
        SynchronousObservable.toRunnable(),
        Runnable.last()
      );
    }),
    benchmarkTest("Runnable", async (src: readonly number[]) => {
      return pipeLazy(
        src,
        Runnable.fromReadonlyArray(),
        Runnable.scan(sum, returns(0)),
        Runnable.last(),
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

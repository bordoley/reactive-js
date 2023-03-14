import { benchmarkTest, benchmarkGroup } from "./benchmark.js";
import {
  pipeLazy,
  isEven,
  increment,
  isOdd,
  returns,
  callWith,
} from "@reactive-js/core/functions";
import {
  ContainerLike,
  FromReadonlyArray,
  Keep,
  Map,
  Scan,
  ToReadonlyArray,
} from "@reactive-js/core/containers";
import * as Enumerable from "@reactive-js/core/rx/Enumerable";
import * as ReadonlyArray from "@reactive-js/core/containers/ReadonlyArray";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { ToRunnable } from "@reactive-js/core/rx";

/**
 * A function that returns the result of summing
 * it's arguments.
 */
const sum = (...args: number[]) => {
  let acc = 0;
  const length = ReadonlyArray.getLength(args);
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

const createMapPerfTest = <C extends ContainerLike>(
  name: string,
  m: FromReadonlyArray<C> & Map<C> & ToReadonlyArray<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromReadonlyArray(),
        m.map(increment),
        m.toReadonlyArray(),
      ),
    callWith(),
  );

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createMapPerfTest("Enumerable", Enumerable),
    createMapPerfTest("Runnable", Runnable),
    createMapPerfTest("readonlyArray", ReadonlyArray),
    benchmarkTest(
      "array methods",
      async src => {
        return src;
      },
      src => src.map(increment),
    ),
  );

const createFilterMapFusionPerfTest = <C extends ContainerLike>(
  name: string,
  m: FromReadonlyArray<C> & Keep<C> & Map<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromReadonlyArray(),
        m.map(increment),
        m.keep(isOdd),
        m.map(increment),
        m.map(increment),
        m.keep(isEven),
        m.toRunnable(),
        Runnable.reduce(sum, returns(0)),
        Runnable.first(),
      ),
    callWith(),
  );

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapFusionPerfTest("Enumerable", Enumerable),
    createFilterMapFusionPerfTest("Runnable", Runnable),
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

const createFilterMapReducePerfTest = <C extends ContainerLike>(
  name: string,
  m: FromReadonlyArray<C> & Keep<C> & Map<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromReadonlyArray(),
        m.keep(isEven),
        m.map(increment),
        m.toRunnable(),
        Runnable.reduce(sum, returns(0)),
        Runnable.first(),
      ),
    callWith(),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapReducePerfTest("Enumerable", Enumerable),
    createFilterMapReducePerfTest("Runnable", Runnable),
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
      "most",
      async src => {
        const { map, filter } = await import("@most/core");
        const { reduce } = await import("./most/reduce.js");
        const { fromArray } = await import("./most/fromArray.js");

        return () =>
          reduce(sum, 0, map(increment, filter(isEven, fromArray(src))));
      },
      f => f(),
    ),
  );

const createScanReducePerfTest = <C extends ContainerLike>(
  name: string,
  m: FromReadonlyArray<C> & Map<C> & Scan<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromReadonlyArray(),
        m.scan(sum, returns(0)),
        m.toRunnable(),
        Runnable.reduce<number, number>(passthrough, returns(0)),
        Runnable.first(),
      ),
    callWith(),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createScanReducePerfTest("Enumerable", Enumerable),
    createScanReducePerfTest("Runnable", Runnable),
    benchmarkTest(
      "most",
      async src => {
        const { scan } = await import("@most/core");
        const { reduce } = await import("./most/reduce.js");
        const { fromArray } = await import("./most/fromArray.js");

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
      "Runnable",
      async src =>
        pipeLazy(
          src,
          Runnable.fromReadonlyArray(),
          Runnable.everySatisfy(i => i < 0),
          Runnable.first(),
        ),
      callWith(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src =>
        pipeLazy(
          src,
          ReadonlyArray.every(i => i < 0),
        ),
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

import { benchmarkTest, benchmarkGroup } from "./benchmark.js";
import {
  pipeLazy,
  isEven,
  increment,
  isOdd,
  returns,
} from "@reactive-js/core/functions";
import * as Enumerable from "@reactive-js/core/Enumerable";
import * as ReadonlyArray from "@reactive-js/core/ReadonlyArray";
import * as Runnable from "@reactive-js/core/Runnable";
import * as Types from "@reactive-js/core/types";
import { Container } from "@reactive-js/core/types";

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

const createMapPerfTest = <C extends Container>(
  name: string,
  m: Types.RunnableContainerTypeClass<C>,
) =>
  benchmarkTest(name, async (src: readonly number[]) =>
    pipeLazy(src, m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray()),
  );

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createMapPerfTest<Enumerable.Type>("Enumerable", Enumerable),
    createMapPerfTest("Runnable", Runnable),
    createMapPerfTest<ReadonlyArray.Type>("readonlyArray", ReadonlyArray),
    benchmarkTest("array methods", async src => {
      return () => src.map(increment);
    }),
  );

const createFilterMapFusionPerfTest = <C extends Container>(
  name: string,
  m: Types.RunnableContainerTypeClass<C>,
) =>
  benchmarkTest(name, async (src: readonly number[]) =>
    pipeLazy(
      src,
      m.fromReadonlyArray(),
      m.map(increment),
      m.keep(isOdd),
      m.map(increment),
      m.map(increment),
      m.keep(isEven),
      m.toReadonlyArray(),
    ),
  );

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapFusionPerfTest("Enumerable", Enumerable),
    createFilterMapFusionPerfTest("Runnable", Runnable),
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
  );

const createFilterMapReducePerfTest = <C extends Container>(
  name: string,
  m: Types.RunnableContainerTypeClass<C>,
) =>
  benchmarkTest(name, async (src: readonly number[]) =>
    pipeLazy(
      src,
      m.fromReadonlyArray(),
      m.keep(isEven),
      m.map(increment),
      m.toReadonlyArray(),
    ),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapReducePerfTest("Enumerable", Enumerable),
    createFilterMapReducePerfTest("Runnable", Runnable),
    benchmarkTest(
      "array methods",
      async src => () => src.filter(isEven).map(increment),
    ),
    benchmarkTest("most", async src => {
      const { map, filter } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return () =>
        reduce(sum, 0, map(increment, filter(isEven, fromArray(src))));
    }),
  );

const createScanReducePerfTest = <C extends Container>(
  name: string,
  m: Types.RunnableContainerTypeClass<C>,
) =>
  benchmarkTest(name, async (src: readonly number[]) =>
    pipeLazy(
      src,
      m.fromReadonlyArray(),
      m.scan(sum, returns(0)),
      m.toReadonlyArray(),
    ),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createScanReducePerfTest("Enumerable", Enumerable),
    createScanReducePerfTest("Runnable", Runnable),
    benchmarkTest("most", async src => {
      const { scan } = await import("@most/core");
      const { reduce } = await import("./most/reduce.js");
      const { fromArray } = await import("./most/fromArray.js");

      return () =>
        reduce<number, number>(passthrough, 0, scan(sum, 0, fromArray(src)));
    }),
  );

export const every = (n: number) =>
  benchmarkGroup(
    `every ${n} integers`,
    () => createArray(n),
    benchmarkTest("Runnable", async src =>
      pipeLazy(
        src,
        Runnable.fromReadonlyArray(),
        Runnable.everySatisfy(i => i < 0),
      ),
    ),
    benchmarkTest("readonlyArray", async src =>
      pipeLazy(
        src,
        ReadonlyArray.everySatisfy(i => i < 0),
      ),
    ),
    benchmarkTest("array methods", async src => () => src.every(i => i < 0)),
  );

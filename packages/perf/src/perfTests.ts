import { benchmarkTest, benchmarkGroup } from "./benchmark";
import {
  pipeLazy,
  isEven,
  sum,
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
import * as _x from "@reactive-js/core/__internal__/mixins"

import * as Enumerable from "@reactive-js/core/ix/Enumerable";
import * as RunnableObservable from "@reactive-js/core/rx/RunnableObservable";
import * as ReadonlyArray from "@reactive-js/core/containers/ReadonlyArray";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import * as Sequence from "@reactive-js/core/containers/Sequence";
import { ToRunnable } from "@reactive-js/core/rx";

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
      pipeLazy(src, m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray()),
    callWith(),
  );

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createMapPerfTest("Enumerable", Enumerable),
    createMapPerfTest("Observable", RunnableObservable),
    createMapPerfTest("Runnable", Runnable),
    createMapPerfTest("Sequence", Sequence),
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
    createFilterMapFusionPerfTest("Observable", RunnableObservable),
    createFilterMapFusionPerfTest("Runnable", Runnable),
    createFilterMapFusionPerfTest("Sequence", Sequence),
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
    createFilterMapReducePerfTest("Observable", RunnableObservable),
    createFilterMapReducePerfTest("Runnable", Runnable),
    createFilterMapReducePerfTest("Sequence", Sequence),
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
        const { reduce } = await import("./most/reduce");
        const { fromArray } = await import("./most/fromArray");

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
    createScanReducePerfTest("Observable", RunnableObservable),
    createScanReducePerfTest("Runnable", Runnable),
    createScanReducePerfTest("Sequence", Sequence),
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

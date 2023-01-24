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
  FromArray,
  Keep,
  Map,
  Scan,
  ToReadonlyArray,
} from "@reactive-js/core/containers";

import * as EnumerableLike from "@reactive-js/core/ix/EnumerableLike";
import * as ObservableLike from "@reactive-js/core/rx/ObservableLike";
import * as ReadonlyArrayLike from "@reactive-js/core/containers/ReadonlyArrayLike";
import * as RunnableLike from "@reactive-js/core/rx/RunnableLike";
import * as SequenceLike from "@reactive-js/core/containers/SequenceLike";
import { ToRunnable } from "@reactive-js/core/rx";
import { __memo, __observe, async } from "@reactive-js/core/effects";

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
  m: FromArray<C> & Map<C> & ToReadonlyArray<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(src, m.fromArray(), m.map(increment), m.toReadonlyArray()),
    callWith(),
  );

export const map = (n: number) =>
  benchmarkGroup(
    `map ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createMapPerfTest("enumerable", EnumerableLike),
    createMapPerfTest("observable", ObservableLike),
    createMapPerfTest("runnable", RunnableLike),
    createMapPerfTest("sequence", SequenceLike),
    benchmarkTest(
      "observable__observe",
      async src => {
        const arrObs = ObservableLike.fromArray<number>()(src);
        return pipeLazy(
          async(
            () => {
              const v = __observe(arrObs) ?? 0;
              return increment(v);
            },
            { mode: "combine-latest" },
          ),
          ObservableLike.toReadonlyArray(),
        );
      },
      callWith(),
    ),
    createMapPerfTest("readonlyArray", ReadonlyArrayLike),
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
  m: FromArray<C> & Keep<C> & Map<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromArray(),
        m.map(increment),
        m.keep(isOdd),
        m.map(increment),
        m.map(increment),
        m.keep(isEven),
        m.toRunnable(),
        RunnableLike.reduce(sum, returns(0)),
        RunnableLike.first(),
      ),
    callWith(),
  );

export const filterMapFusion = (n: number) =>
  benchmarkGroup(
    `filter -> map -> fusion with ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapFusionPerfTest("enumerable", EnumerableLike),
    createFilterMapFusionPerfTest("observable", ObservableLike),
    createFilterMapFusionPerfTest("runnable", RunnableLike),
    createFilterMapFusionPerfTest("sequence", SequenceLike),
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
  m: FromArray<C> & Keep<C> & Map<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromArray(),
        m.keep(isEven),
        m.map(increment),
        m.toRunnable(),
        RunnableLike.reduce(sum, returns(0)),
        RunnableLike.first(),
      ),
    callWith(),
  );

export const filterMapReduce = (n: number) =>
  benchmarkGroup(
    `filter -> map -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createFilterMapReducePerfTest("enumerable", EnumerableLike),
    createFilterMapReducePerfTest("observable", ObservableLike),
    createFilterMapReducePerfTest("runnable", RunnableLike),
    createFilterMapReducePerfTest("sequence", SequenceLike),
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
  m: FromArray<C> & Map<C> & Scan<C> & ToRunnable<C>,
) =>
  benchmarkTest(
    name,
    async (src: readonly number[]) =>
      pipeLazy(
        src,
        m.fromArray(),
        m.scan(sum, returns(0)),
        m.toRunnable(),
        RunnableLike.reduce<number, number>(passthrough, returns(0)),
        RunnableLike.first(),
      ),
    callWith(),
  );

export const scanReduce = (n: number) =>
  benchmarkGroup(
    `scan -> reduce ${n} integers`,
    pipeLazy<number, readonly number[]>(n, createArray),
    createScanReducePerfTest("enumerable", EnumerableLike),
    createScanReducePerfTest("observable", ObservableLike),
    createScanReducePerfTest("runnable", RunnableLike),
    createScanReducePerfTest("sequence", SequenceLike),
    benchmarkTest(
      "observable__observe",
      async src => {
        const arrObs = ObservableLike.fromArray<number>()(src);
        const createRef = (current: number) => ({ current });

        return pipeLazy(
          async(
            () => {
              const ref = __memo(createRef, 0);
              const v = __observe(arrObs) ?? 0;
              const result = sum(ref.current, v);

              // mutating variables in effects like this isn't really safe
              // it only works because the mode is combine latest, running with a
              // hot source that never yields to the scheduler, and the scheduler
              // never requests the source to yield.
              ref.current = result;
              return result;
            },
            { mode: "combine-latest" },
          ),
          ObservableLike.toRunnable(),
          RunnableLike.reduce<number, number>(passthrough, returns(0)),
          RunnableLike.first(),
        );
      },
      callWith(),
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
      async src =>
        pipeLazy(
          src,
          RunnableLike.fromArray(),
          RunnableLike.everySatisfy(i => i < 0),
          RunnableLike.first(),
        ),
      callWith(),
    ),
    benchmarkTest(
      "readonlyArray",
      async src =>
        pipeLazy(
          src,
          ReadonlyArrayLike.every(i => i < 0),
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

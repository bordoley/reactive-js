import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../__internal__/testing.js";
import {
  ContainerLike,
  ForEach,
  FromReadonlyArray,
  Keep,
  Map,
} from "../containers.js";
import { greaterThan, increment, pipe, pipeLazy } from "../functions.js";
import { ToEnumerable, ToRunnable } from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Runnable from "../rx/Runnable.js";

export const forEachTests = <C extends ContainerLike>(
  m: ForEach<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "forEach",
    test("invokes the effect for each notified value", () => {
      const result: number[] = [];
      pipe(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.forEach(x => {
          result.push(x + 10);
        }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );

      pipe(result, expectArrayEquals([11, 12, 13]));
    }),

    test("when the effect function throws", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.forEach(_ => {
            throw err;
          }),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const fromReadonlyArrayTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "fromReadonlyArray",
    test("negative count with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -3, start: 4 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([5, 4, 3]),
      );
    }),
    test("positive count with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 3, start: 4 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([5, 6, 7]),
      );
    }),
    test("negative count exceeding bounds with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -100, start: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([4, 3, 2, 1]),
      );
    }),
    test("positive count exceeding bounds with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 100, start: 7 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([8, 9]),
      );
    }),
    test("negative count without start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([9, 8, 7]),
      );
    }),
    test("positive count without start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
    }),
  );

export const keepTests = <C extends ContainerLike>(
  m: Keep<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "keep",
    test(
      "keeps only values greater than 5",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromReadonlyArray(),
        m.keep(greaterThan(5)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test("when predicate throws", () => {
      const err = new Error();
      const predicate = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.keep(predicate),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const mapTests = <C extends ContainerLike>(
  m: Map<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "map",
    test(
      "maps every value",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.map(increment),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test("when selector throws", () => {
      const err = new Error();
      const selector = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.map(selector),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const toEnumerableTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToEnumerable<C>,
) =>
  describe(
    "toEnumerable",
    test(
      "with an enumerable observable",
      pipeLazy(
        [1, 2, 3, 4],
        m.fromReadonlyArray(),
        m.toEnumerable(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  );

const toRunnableTest = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnable<C>,
) =>
  test(
    "without delay",
    pipeLazy(
      [1, 2, 3, 4, 5],
      m.fromReadonlyArray(),
      m.toRunnable(),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4, 5]),
    ),
  );

export const toRunnableWithDelayTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> &
    ToRunnable<
      C,
      {
        readonly delay?: number;
        readonly delayStart?: boolean;
      }
    >,
) =>
  describe(
    "toRunnable",
    toRunnableTest(m),
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        m.fromReadonlyArray(),
        m.toRunnable({ delay: 2 }),
        Runnable.withCurrentTime(t => t),
        Runnable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
      ),
    ),
  );

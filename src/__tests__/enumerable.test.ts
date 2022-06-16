import {
  ContainerLike,
  FromArray,
  Generate,
  Map,
  Zip,
  zipWith,
} from "../container";
import {
  concat,
  concatAll,
  distinctUntilChanged,
  fromArray,
  fromArrayT,
  fromIterable,
  generate,
  keepT,
  map,
  repeat,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  toIterable,
  toRunnable,
  zip,
} from "../enumerable";
import { arrayEquality, defer, increment, pipe, returns } from "../functions";
import { ToRunnable, toArray } from "../runnable";
import { describe, expectArrayEquals, test } from "../testing";
import { createRunnableTests } from "./runnable.test";

export const createZippableTests = <C extends ContainerLike>(
  m: FromArray<C> & Generate<C> & Map<C> & ToRunnable<C> & Zip<C>,
) =>
  describe(
    "ZippableContainer",
    test(
      "zip",
      defer(
        [1, 2, 3],
        m.fromArray(),
        zipWith(m, m.fromArray<number>()([1, 2, 3, 4, 5])),
        m.map(([a, b]) => a + b),
        m.toRunnable(),
        toArray(),
        expectArrayEquals([2, 4, 6]),
      ),
    ),
    test(
      "with non-delayed sources",
      defer(
        m.zip(
          pipe([1, 2], m.fromArray()),
          pipe([1, 2], m.fromArray(), m.map(increment)),
          m.generate(increment, returns<number>(2)),
        ),
        m.toRunnable(),
        toArray(),
        expectArrayEquals(
          [
            [1, 2, 3],
            [2, 3, 4],
          ],
          arrayEquality(),
        ),
      ),
    ),
  );

export const tests = describe(
  "enumerable",
  test(
    "toIterable",
    defer(
      [1, 2, 3],
      fromArray(),
      toIterable(),
      fromIterable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  createRunnableTests({
    ...fromArrayT,
    ...keepT,
    concat,
    concatAll,
    distinctUntilChanged,
    generate,
    map,
    repeat,
    scan,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable,
  }),
  createZippableTests({ ...fromArrayT, generate, map, toRunnable, zip }),
);

import {
  fromIterable,
  toIterable,
  zipWith,
  concat,
  concatMap,
  distinctUntilChanged,
  empty,
  endWith,
  fromArray,
  fromValue,
  generate,
  keep,
  map,
  mapTo,
  repeat,
  scan,
  skipFirst,
  startWith,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
} from "./enumerable";
import { defer } from "./functions";
import { createMonadTests } from "./monad.test";
import { toArray } from "./runnable";
import { test, describe, expectArrayEquals } from "./testing";

const Enumerable = {
  concat,
  concatMap,
  distinctUntilChanged,
  empty,
  endWith,
  fromArray,
  fromValue,
  generate,

  keep,
  map,
  mapTo,
  repeat,
  scan,
  skipFirst,
  startWith,
  takeFirst,
  takeLast,
  takeWhile,
  toRunnable,
};

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
  test(
    "zip",
    defer(
      [1, 2, 3],
      fromArray(),
      zipWith(fromArray<number>()([1, 2, 3, 4, 5])),
      map(([a, b]) => a + b),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 4, 6]),
    ),
  ),
  createMonadTests(Enumerable),
);

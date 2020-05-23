import {
  fromArray,
  fromIterable,
  map,
  toIterable,
  toRunnable,
  zipWith,
} from "./enumerable";
import * as Enumerable from "./enumerable";
import { test, describe, expectArrayEquals } from "./experimental/testing";
import { defer } from "./functions";
import { toArray } from "./runnable";
import { createMonadTests } from "./monad.test";

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

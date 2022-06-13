import {
  fromArray,
  fromIterable,
  map,
  toIterable,
  toRunnable,
  zipWith,
} from "../enumerable";
import { defer } from "../functions";
import { toArray } from "../runnable";
import { describe, expectArrayEquals, test } from "../testing";
import { createMonadTests } from "./monad.test";

import * as Enumerable from "../enumerable";

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

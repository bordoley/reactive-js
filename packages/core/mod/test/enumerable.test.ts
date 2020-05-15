import {
  fromArray,
  fromIterable,
  map,
  toIterable,
  toRunnable,
  zipWith,
} from "../lib/enumerable.ts";
import { toArray } from "../lib/runnable.ts";
import * as Enumerable from "../lib/enumerable.ts";
import { defer } from "../lib/functions.ts";
import { test, describe, expectArrayEquals } from "../lib/internal/testing.ts";
import { createMonadTests } from "./monadTests.ts";

export const tests = describe(
  "enumerable",
  test(
    "toIterable",
    defer(
      [1, 2, 3],
      fromArray(),
      toIterable,
      fromIterable,
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

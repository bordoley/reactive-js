import { fromArray, fromIterable, map, toIterable, toRunnable, zipWith, } from "../lib/enumerable.js";
import * as Enumerable from "../lib/enumerable.js";
import { defer } from "../lib/functions.js";
import { test, describe, expectArrayEquals } from "../lib/experimental/testing.js";
import { toArray } from "../lib/runnable.js";
import { createMonadTests } from "./monad.test.js";
export const tests = describe("enumerable", test("toIterable", defer([1, 2, 3], fromArray(), toIterable(), fromIterable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("zip", defer([1, 2, 3], fromArray(), zipWith(fromArray()([1, 2, 3, 4, 5])), map(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

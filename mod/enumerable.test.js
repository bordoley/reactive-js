import { fromArray, fromIterable, map, toIterable, toRunnable, zipWith, } from "./enumerable.js";
import * as Enumerable from "./enumerable.js";
import { test, describe, expectArrayEquals } from "./experimental/testing.js";
import { defer } from "./functions.js";
import { createMonadTests } from "./monad.test.js";
import { toArray } from "./runnable.js";
export const tests = describe("enumerable", test("toIterable", defer([1, 2, 3], fromArray(), toIterable(), fromIterable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("zip", defer([1, 2, 3], fromArray(), zipWith(fromArray()([1, 2, 3, 4, 5])), map(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { identity, pipeLazy } from "../../functions.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "ReadonlyArray",
  KeyedCollectionModuleTests(ReadonlyArray, <T>() => identity<readonly T[]>),
  describe(
    "entries",
    test(
      "starting at index greater than 0",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1 }),
        Enumerable.map(([_k, v]) => v),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1, count: 2 }),
        Enumerable.map(([_k, v]) => v),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1, count: 10 }),
        Enumerable.map(([_k, v]) => v),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.entries({ count: -2 }),
        Enumerable.map(([_k, v]) => v),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.entries({ start: 2, count: -2 }),
        Enumerable.map(([_k, v]) => v),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([3, 2]),
      ),
    ),
  ),
  describe(
    "values",
    test(
      "starting at index greater than 0",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.values({ start: 1 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.values({ start: 1, count: 2 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.values({ start: 1, count: 10 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.values({ count: -2 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.values({ start: 2, count: -2 }),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([3, 2]),
      ),
    ),
  ),
  describe(
    "toReadonlyArray",
    test(
      "starting at index greater than 0",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.toReadonlyArray({ start: 1 }),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.toReadonlyArray({ start: 1, count: 2 }),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.toReadonlyArray({ start: 1, count: 10 }),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.toReadonlyArray({ count: -2 }),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.toReadonlyArray({ start: 2, count: -2 }),
        expectArrayEquals([3, 2]),
      ),
    ),
  ),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);

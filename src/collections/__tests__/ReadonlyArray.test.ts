import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { identity, pipeLazy } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";

testModule(
  "ReadonlyArray",
  CollectionModuleTests(ReadonlyArray, <T>() => identity<readonly T[]>),
  describe(
    "entries",
    test(
      "starting at index greater than 0",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1 }),
        ReadonlyArray.fromIterable(),
        ReadonlyArray.map(([_k, v]) => v),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1, count: 2 }),
        ReadonlyArray.fromIterable(),
        ReadonlyArray.map(([_k, v]) => v),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ start: 1, count: 10 }),
        ReadonlyArray.fromIterable(),
        ReadonlyArray.map(([_k, v]) => v),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.entries({ count: -2 }),
        ReadonlyArray.fromIterable(),
        ReadonlyArray.map(([_k, v]) => v),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.entries({ start: 2, count: -2 }),
        ReadonlyArray.fromIterable(),
        ReadonlyArray.map(([_k, v]) => v),
        expectArrayEquals([3, 2]),
      ),
    ),
  ),
  describe(
    "slice",
    test(
      "starting at index greater than 0",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.slice({ start: 1 }),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.slice({ start: 1, count: 2 }),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.slice({ start: 1, count: 10 }),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],

        ReadonlyArray.slice({ count: -2 }),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.slice({ start: 2, count: -2 }),
        expectArrayEquals([3, 2]),
      ),
    ),
    test(
      "copying the full array",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.slice({ start: 0 }),
        expectArrayEquals([1, 2, 3, 4]),
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
        ReadonlyArray.fromIterable(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "starting at index greater than 0 with count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.values({ start: 1, count: 2 }),
        ReadonlyArray.fromIterable(),
        expectArrayEquals([2, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with count exceeding the length",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.values({ start: 1, count: 10 }),
        ReadonlyArray.fromIterable(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test(
      "negative count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.values({ count: -2 }),
        ReadonlyArray.fromIterable(),
        expectArrayEquals([4, 3]),
      ),
    ),
    test(
      "starting at index greater than 0 with negative count",
      pipeLazy(
        [1, 2, 3, 4],
        ReadonlyArray.values({ start: 2, count: -2 }),
        ReadonlyArray.fromIterable(),
        expectArrayEquals([3, 2]),
      ),
    ),
  ),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);

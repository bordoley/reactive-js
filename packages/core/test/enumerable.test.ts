import {
  test,
  describe,
  expectNone,
  expectEquals,
  expectArrayEquals,
} from "../src/testing";
import { fromArray, first, empty, keep, toArray } from "../src/enumerable";
import { pipe } from "../src/functions";

export const tests = describe(
  "enumerable",
  describe(
    "first",
    test("when enumerable is not empty", () =>
      pipe(fromArray([1, 2, 3]), first, expectEquals(1))),
    test("when enumerable is empty", () => pipe(empty(), first, expectNone)),
  ),
  test("keep", () =>
    pipe(
      fromArray([4, 8, 10, 7]),
      keep(x => x > 5),
      toArray,
      expectArrayEquals([8, 10, 7]),
    )),
);

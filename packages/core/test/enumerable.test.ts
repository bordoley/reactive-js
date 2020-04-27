import {
  test,
  describe,
  expectEqual,
  expectNone,
  expectArraysEqual,
} from "../src/testing";
import { fromArray, first, empty, keep, toArray } from "../src/enumerable";
import { pipe } from "../src/pipe";

export const tests = describe(
  "enumerable",
  describe(
    "first",
    test("when enumerable is not empty", () => {
      const v = pipe(fromArray([1, 2, 3]), first);
      expectEqual(v, 1);
    }),
    test("when enumerable is empty", () => {
      const v = pipe(empty(), first);
      expectNone(v);
    }),
  ),
  test("keep", () => {
    const result = pipe(
      fromArray([4, 8, 10, 7]),
      keep(x => x > 5),
      toArray,
    ) as number[];
    expectArraysEqual(result, [8, 10, 7]);
  }),
);

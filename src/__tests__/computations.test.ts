import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import * as Enumerable from "../collections/Enumerable.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import { keepType, mapTo, pick } from "../computations.js";
import {
  Optional,
  Tuple6,
  isSome,
  none,
  pipe,
  pipeLazy,
  tuple,
} from "../functions.js";

testModule(
  "computations",
  describe(
    "keepType",
    test(
      "filters null values",
      pipeLazy(
        ["b", none, "v"],
        ReadonlyArray.values(),
        keepType<Enumerable.Type, Optional<string>, string>(Enumerable, isSome),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(["b", "v"]),
      ),
    ),
  ),
  describe(
    "mapTo",
    test(
      "maps every value in the source to v",
      pipeLazy(
        [
          ["a", "b"],
          ["c", "d"],
          ["e", "f"],
        ],
        ReadonlyArray.values(),
        mapTo<Enumerable.Type, number>(Enumerable, 2),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([2, 2, 2]),
      ),
    ),
  ),
  describe(
    "pick",
    test("with object and symbol keys", () => {
      const keyA = Symbol();
      const keyB = Symbol();

      const obj = {
        [keyA]: {
          [keyB]: "value",
        },
      };

      pipe(
        [obj],
        ReadonlyArray.values(),
        pick<
          Enumerable.Type,
          { [keyA]: { [keyB]: string } },
          typeof keyA,
          typeof keyB
        >(Enumerable, keyA, keyB),
        Enumerable.toReadonlyArray<string>(),
        expectArrayEquals<string>(["value"]),
      );
    }),
    test("with object and string keys", () => {
      const obj = {
        keyA: {
          keyB: "value",
        },
      };

      pipe(
        [obj],
        ReadonlyArray.values(),
        pick<Enumerable.Type, { keyA: { keyB: string } }, "keyA", "keyB">(
          Enumerable,
          "keyA",
          "keyB",
        ),
        Enumerable.toReadonlyArray<string>(),
        expectArrayEquals<string>(["value"]),
      );
    }),
    test("with array", () => {
      const obj = tuple(1, 2, 3, 4, 5, 6);

      pipe(
        [obj],
        ReadonlyArray.values<
          Tuple6<number, number, number, number, number, number>
        >(),
        pick<
          Enumerable.Type,
          Tuple6<number, number, number, number, number, number>,
          number
        >(Enumerable, 3),
        Enumerable.toReadonlyArray<number>(),
        expectArrayEquals<number>([4]),
      );
    }),
  ),
);

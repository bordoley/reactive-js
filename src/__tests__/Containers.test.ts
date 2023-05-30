import * as Containers from "../Containers.js";
import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  Optional,
  Tuple2,
  Tuple6,
  isSome,
  none,
  pipe,
  pipeLazy,
} from "../functions.js";

testModule(
  "Containers",
  describe(
    "keepType",
    test(
      "filters null values",
      pipeLazy(
        ["b", none, "v"],
        Observable.fromReadonlyArray<Optional<string>>(),
        Containers.keepType<
          Observable.EnumerableContainer,
          Optional<string>,
          string
        >(Observable, isSome),
        Observable.toReadonlyArray(),
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
        Observable.fromReadonlyArray<Tuple2<string, string>>(),
        Containers.mapTo<Runnable.Type, number>(Observable, 2),
        Observable.toReadonlyArray(),
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
        Observable.fromReadonlyArray(),
        Containers.pick<
          Runnable.Type,
          { [keyA]: { [keyB]: string } },
          typeof keyA,
          typeof keyB
        >(Observable, keyA, keyB),
        Observable.toReadonlyArray<string>(),
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
        Observable.fromReadonlyArray(),
        Containers.pick<
          Runnable.Type,
          { keyA: { keyB: string } },
          "keyA",
          "keyB"
        >(Observable, "keyA", "keyB"),
        Observable.toReadonlyArray<string>(),
        expectArrayEquals<string>(["value"]),
      );
    }),
    test("with array", () => {
      const obj: Tuple6<number, number, number, number, number, number> = [
        1, 2, 3, 4, 5, 6,
      ];

      pipe(
        [obj],
        Observable.fromReadonlyArray<
          Tuple6<number, number, number, number, number, number>
        >(),
        Containers.pick<
          Runnable.Type,
          Tuple6<number, number, number, number, number, number>,
          number
        >(Observable, 3),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals<number>([4]),
      );
    }),
  ),
);

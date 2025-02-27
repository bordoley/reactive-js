import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { keepType, mapTo, pick } from "../computations.js";
import * as Observable from "../concurrent/Observable.js";
import { PureRunnableLike } from "../concurrent.js";
import { Optional, isSome, none, pipe, pipeLazy, tuple } from "../functions.js";

testModule(
  "computations",
  describe(
    "keepType",
    test(
      "filters null values",
      pipeLazy(
        ["b", none, "v"],
        Observable.fromReadonlyArray(),
        keepType<PureRunnableLike, Observable.PureRunnableComputation>(
          Observable.keep,
        )<Optional<string>, string>(isSome),
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
        Observable.fromReadonlyArray(),
        mapTo<PureRunnableLike, Observable.PureRunnableComputation>(
          Observable.map,
        )(2),
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
        pick<PureRunnableLike, Observable.PureRunnableComputation>(
          Observable.map,
        )(keyA, keyB),
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
        pick<PureRunnableLike, Observable.PureRunnableComputation>(
          Observable.map,
        )("keyA", "keyB"),
        Observable.toReadonlyArray<string>(),
        expectArrayEquals<string>(["value"]),
      );
    }),
    test("with array", () => {
      const obj = tuple(1, 2, 3, 4, 5, 6);

      pipe(
        [obj],
        Observable.fromReadonlyArray(),
        pick<PureRunnableLike, Observable.PureRunnableComputation>(
          Observable.map,
        )(3),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals<number>([4]),
      );
    }),
  ),
);

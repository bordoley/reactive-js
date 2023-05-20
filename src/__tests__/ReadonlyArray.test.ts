import * as EnumeratorFactory from "../EnumeratorFactory.js";
import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Runnable from "../Runnable.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { arrayEquality, pipe, pipeLazy, returns } from "../functions.js";
import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";

testModule(
  "ReadonlyArray",
  ...EnumerableTypeClassTests(ReadonlyArray),
  describe(
    "entries",
    test(
      "enumerates all entries",
      pipeLazy(
        ["b", "d"],
        ReadonlyArray.entries(),
        EnumeratorFactory.toReadonlyArray(),
        expectArrayEquals(
          [
            [0, "b"],
            [1, "d"],
          ],
          arrayEquality(),
        ),
      ),
    ),
  ),
  describe(
    "forEachWithKey",
    test("iterate and imperatively sum the keys", () => {
      let result = 0;

      pipe(
        ["b", "d", "v"],
        ReadonlyArray.forEachWithKey((_, key) => {
          result = result + key;
        }),
      );

      pipe(result, expectEquals(3));
    }),
  ),
  describe(
    "keepWithKey",
    test(
      "filters out entries by key",
      pipeLazy(
        ["b", "d", "v"],
        ReadonlyArray.keepWithKey((_, key) => key === 1),
        expectArrayEquals(["d"]),
      ),
    ),
  ),
  describe(
    "mapWithKey",
    test(
      "mapping every value to its key",
      pipeLazy(
        ["b", "d", "f"],
        ReadonlyArray.mapWithKey((_, key) => key),
        expectArrayEquals([0, 1, 2]),
      ),
    ),
  ),
  describe(
    "reduceWithKey",
    test(
      "summing the keys",
      pipeLazy(
        ["a", "B", "c"],
        ReadonlyArray.reduceWithKey(
          (acc: number, _: string, key: number) => acc + key,
          returns(0),
        ),
        expectEquals(3),
      ),
    ),
  ),
  describe(
    "toObservable",
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        ReadonlyArray.toObservable({ delay: 2 }),
        Observable.withCurrentTime(t => t),
        Runnable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
      ),
    ),
  ),
  describe("values"),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);

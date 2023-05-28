import {
  IndexedKeyedContainerModule,
  IndexedKeyedContainer,
} from "../../types.js";
import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../__internal__/testing.js";
import {
  arrayEquality,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import EnumerableContainerModuleTests from "./EnumerableContainerModuleTests.js";

const IndexedKeyedContainerModuleTests = <C extends IndexedKeyedContainer>(
  m: IndexedKeyedContainerModule<C>,
) =>
  describe(
    "IndexedKeyedContainerModuleTests",

    ...EnumerableContainerModuleTests(ReadonlyArray),
    describe(
      "entries",
      test(
        "enumerates all entries",
        pipeLazy(
          ["b", "d"],
          m.fromReadonlyArray(),
          m.entries(),
          m.toReadonlyArray(),
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
      "flatMapIterable",
      test(
        "maps the incoming value with the inline generator function",
        pipeLazy(
          [none, none],
          m.fromReadonlyArray(),
          m.flatMapIterable(function* (_) {
            yield 1;
            yield 2;
            yield 3;
          }),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "forEachWithKey",
      test("iterate and imperatively sum the keys", () => {
        let result = 0;

        pipe(
          ["b", "d", "v"],
          m.fromReadonlyArray(),
          m.forEachWithKey((_, key) => {
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
          m.fromReadonlyArray(),
          m.keepWithKey((_, key) => key === 1),
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
          m.fromReadonlyArray(),
          m.mapWithKey((_, key) => key),
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
          m.fromReadonlyArray(),
          m.reduceWithKey(
            (acc: number, _: string, key: number) => acc + key,
            returns(0),
          ),
          expectEquals(3),
        ),
      ),
    ),
    describe("values"),
  );

export default IndexedKeyedContainerModuleTests;

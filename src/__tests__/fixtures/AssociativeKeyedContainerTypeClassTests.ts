import * as Enumerator from "../../Enumerator.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../__internal__/testing.js";
import {
  Optional,
  arrayEquality,
  isSome,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  AssociativeKeyedContainerTypeClass,
  ConcreteAssociativeKeyedContainerTypeClass,
} from "../../type-classes.js";
import { KeyedContainer } from "../../types.js";

const AssociativeKeyedContainerTypeClassTests = <
  C extends KeyedContainer<string>,
>(
  m: AssociativeKeyedContainerTypeClass<C, string> &
    ConcreteAssociativeKeyedContainerTypeClass<C, string>,
) =>
  describe(
    "ConcreteAssociativeKeyedContainerTypeClassTests",
    describe(
      "entries",
      test(
        "enumerates all entries",
        pipeLazy(
          [
            ["a", "b"],
            ["c", "d"],
          ],
          ReadonlyArray.enumerate<[string, string]>(),
          m.fromEntries(),
          m.entries(),
          Enumerator.toReadonlyArray(),
          expectArrayEquals(
            [
              ["a", "b"],
              ["c", "d"],
            ],
            arrayEquality(),
          ),
        ),
      ),
      describe(
        "forEach",
        test("iterate and imperatively sum the keys", () => {
          let result = "";

          pipe(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.forEach(value => {
              result = result + value;
            }),
          );

          pipe(result, expectEquals("bdv"));
        }),
      ),
      describe(
        "forEachWithKey",
        test("iterate and imperatively sum the keys", () => {
          let result = "";

          pipe(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.forEachWithKey((_, key) => {
              result = result + key;
            }),
          );

          pipe(result, expectEquals("ace"));
        }),
      ),
      describe(
        "keep",
        test(
          "filters out entries by value",
          pipeLazy(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.keep(value => value === "d"),
            m.keys(),
            Enumerator.toReadonlyArray(),
            expectArrayEquals(["c"]),
          ),
        ),
      ),
      describe(
        "keepWithKey",
        test(
          "filters out entries by key",
          pipeLazy(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.keepWithKey((_, key) => key === "c"),
            m.values(),
            Enumerator.toReadonlyArray(),
            expectArrayEquals(["d"]),
          ),
        ),
      ),
      describe(
        "keepType",
        test(
          "filters null values",
          pipeLazy(
            [
              ["a", "b"],
              ["c", none],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, Optional<string>]>(),
            m.fromEntries(),
            m.keepType<Optional<string>, string, string>(isSome),
            m.values(),
            Enumerator.toReadonlyArray(),
            expectArrayEquals(["b", "v"]),
          ),
        ),
      ),
      describe(
        "keySet",
        test("returns a keyset with all the keys", () => {
          const keys = pipe(
            [
              ["a", "b"],
              ["c", none],
              ["e", "v"],
            ],
            ReadonlyArray.enumerate<[string, Optional<string>]>(),
            m.fromEntries(),
            m.keySet(),
          );

          pipe(keys.size, expectEquals(3));
          pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
        }),
      ),
      describe(
        "map",
        test(
          "mapping every value to a number",
          pipeLazy(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "f"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.map(_ => 1),
            m.values(),
            Enumerator.toReadonlyArray(),
            expectArrayEquals([1, 1, 1]),
          ),
        ),
      ),
      describe(
        "mapWithKey",
        test(
          "mapping every value to its key",
          pipeLazy(
            [
              ["a", "b"],
              ["c", "d"],
              ["e", "f"],
            ],
            ReadonlyArray.enumerate<[string, string]>(),
            m.fromEntries(),
            m.mapWithKey((_, key) => key),
            m.values(),
            Enumerator.toReadonlyArray(),
            expectArrayEquals(["a", "c", "e"]),
          ),
        ),
      ),
      describe(
        "reduce",
        test(
          "summing the values",
          pipeLazy(
            [
              ["a", 1],
              ["c", 2],
              ["e", 3],
            ],
            ReadonlyArray.enumerate<[string, number]>(),
            m.fromEntries(),
            m.reduce((acc: number, next: number) => acc + next, returns(0)),
            expectEquals(6),
          ),
        ),
      ),
      describe(
        "reduceWithKey",
        test(
          "summing the keys",
          pipeLazy(
            [
              ["a", 1],
              ["c", 2],
              ["e", 3],
            ],
            ReadonlyArray.enumerate<[string, number]>(),
            m.fromEntries(),
            m.reduceWithKey(
              (acc: string, _: number, key: string) => acc + key,
              returns(""),
            ),
            expectEquals("ace"),
          ),
        ),
      ),
    ),
  );

export default AssociativeKeyedContainerTypeClassTests;

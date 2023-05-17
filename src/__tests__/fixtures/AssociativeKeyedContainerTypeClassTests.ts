import * as Enumerator from "../../Enumerator.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../__internal__/testing.js";
import {
  Optional,
  arrayEquality,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  AssociativeKeyedContainerTypeClass,
  KeyedContainer,
} from "../../types.js";

const AssociativeKeyedContainerTypeClassTests = <
  C extends KeyedContainer<string>,
>(
  m: AssociativeKeyedContainerTypeClass<C, string>,
) =>
  describe(
    "AssociativeKeyedContainerTypeClassTests",
    describe(
      "entries",
      test(
        "enumerates all entries",
        pipeLazy(
          { a: "b", c: "d" },
          m.fromReadonlyObjectMap<string, string>(),
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
            { a: "b", c: "d", e: "v" },
            m.fromReadonlyObjectMap<string, string>(),
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
            { a: "b", c: "d", e: "v" },
            m.fromReadonlyObjectMap<string, string>(),
            m.forEachWithKey((_, key) => {
              result = result + key;
            }),
          );

          pipe(result, expectEquals("ace"));
        }),
      ),
      describe(
        "keySet",
        test("returns a keyset with all the keys", () => {
          const keys = pipe(
            { a: "b", c: none, e: "v" },
            m.fromReadonlyObjectMap<Optional<string>, string>(),
            m.keySet(),
          );

          pipe(keys.size, expectEquals(3));
          pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
        }),
      ),
      describe(
        "reduce",
        test(
          "summing the values",
          pipeLazy(
            { a: 1, c: 2, e: 3 },
            m.fromReadonlyObjectMap<number, string>(),
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
            { a: 1, c: 2, e: 3 },
            m.fromReadonlyObjectMap<number, string>(),
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

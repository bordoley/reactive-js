import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { CollectionLike_count, KeyedLike_get } from "../../collections.js";
import {
  Optional,
  Tuple2,
  arrayEquality,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";

testModule(
  "ReadonlyObjectMap",
  describe(
    "empty",
    test(
      "returns an empty enumerator",
      pipeLazy(
        ReadonlyObjectMap.empty<number>(),
        ReadonlyObjectMap.values(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals<number>([]),
      ),
    ),
  ),
  describe(
    "entries",
    test(
      "enumerates all entries",
      pipeLazy(
        [
          ["0", "b"],
          ["1", "d"],
        ],
        ReadonlyArray.values<Tuple2<string, string>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.entries<string, string>(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals<Tuple2<string, string>>(
          [
            ["0", "b"],
            ["1", "d"],
          ],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
  ),
  describe(
    "keySet",
    test("returns a keyset with all the keys", () => {
      const keys: ReadonlySet<string> = pipe(
        [
          ["0", "b"],
          ["1", none],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.keySet(),
      );

      pipe(keys.size, expectEquals(3));
      pipe(Array.from(keys), expectArrayEquals(["0", "1", "2"]));
    }),
  ),
  describe(
    "map",
    test(
      "mapping every value to its key",
      pipeLazy(
        [
          ["0", "b"],
          ["1", "d"],
          ["2", "f"],
        ],
        ReadonlyArray.values<Tuple2<string, string>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.map<string, string, string>((_, key: string) => key),
        ReadonlyObjectMap.values(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(["0", "1", "2"]),
      ),
    ),
  ),
  describe(
    "reduce",
    test(
      "summing the keys",
      pipeLazy(
        [
          ["0", "a"],
          ["1", "B"],
          ["2", "c"],
        ],
        ReadonlyArray.values<Tuple2<string, string>>(),
        ReadonlyObjectMap.fromEntries<string, string>(),
        ReadonlyObjectMap.reduce(
          (acc: string, value: string, _: string) => acc + value,
          returns(""),
        ),
        expectEquals("aBc"),
      ),
    ),
  ),

  describe(
    "toDictionary",
    test("count", () => {
      const dict = pipe(
        [
          ["0", "b"],
          ["1", none],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary(),
      );

      expectEquals(3)(dict[CollectionLike_count]);
    }),
    test("get values", () => {
      const dict = pipe(
        [
          ["0", "b"],
          ["1", none],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary(),
      );

      pipe(
        dict,
        Dictionary.values(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(["b", none, "v"]),
      );
    }),
    test(
      "keys",
      pipeLazy(
        [
          ["0", "b"],
          ["1", none],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
        Dictionary.keys(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(["0", "1", "2"]),
      ),
    ),
    test("get returns none if a key is missing", () => {
      const dict = pipe(
        [
          ["0", "b"],
          ["1", "c"],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
      );

      pipe(dict[KeyedLike_get]("5"), expectIsNone);
    }),
    test("get returns value of the key", () => {
      const dict = pipe(
        [
          ["0", "b"],
          ["1", "c"],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
      );

      pipe(dict[KeyedLike_get]("0"), expectEquals<Optional<string>>("b"));
    }),
  ),
  describe(
    "toReadonlyMap",
    test("from non-empty map", () => {
      const dict = pipe(
        [
          ["0", "b"],
          ["1", "d"],
          ["2", "v"],
        ],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toReadonlyMap(),
      );

      pipe(
        dict,
        ReadonlyMap.keys(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals(["0", "1", "2"]),
      );
    }),
  ),
);

((_: ReadonlyObjectMap.Signature) => {})(ReadonlyObjectMap);

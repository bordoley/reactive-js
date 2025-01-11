import { Array_length } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { DictionaryLike_get, DictionaryLike_keys } from "../../collections.js";
import {
  Optional,
  Tuple2,
  arrayEquality,
  none,
  pipe,
  pipeLazy,
  returns,
  tuple,
} from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";

testModule(
  "ReadonlyObjectMap",
  DictionaryCollectionModuleTests(ReadonlyObjectMap),
  describe(
    "empty",
    test(
      "returns an empty enumerator",
      pipeLazy(
        ReadonlyObjectMap.empty<number>(),
        ReadonlyObjectMap.values(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals<number>([]),
      ),
    ),
  ),
  describe(
    "entries",
    test(
      "enumerates all entries",
      pipeLazy(
        [tuple("0", "b"), tuple("1", "d")],
        ReadonlyArray.values(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.entries(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals([tuple("0", "b"), tuple("1", "d")], {
          valuesEquality: arrayEquality(),
        }),
      ),
    ),
  ),
  describe(
    "map",
    test(
      "mapping every value to its key",
      pipeLazy(
        [tuple("0", "b"), tuple("1", "d"), tuple("2", "f")],
        ReadonlyArray.values(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.map<string, string, string>((_, key: string) => key),
        ReadonlyObjectMap.values(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals(["0", "1", "2"]),
      ),
    ),
  ),
  describe(
    "reduce",
    test(
      "summing the keys",
      pipeLazy(
        [tuple("0", "a"), tuple("1", "B"), tuple("2", "c")],
        ReadonlyArray.values(),
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
        [tuple("0", "b"), tuple("1", none), tuple("2", "v")],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary(),
      );

      pipe(
        dict[DictionaryLike_keys],
        ReadonlyArray.fromIterable(),
        x => x[Array_length],
        expectEquals(3),
      );
    }),
    test("get values", () => {
      const dict = pipe(
        [tuple("0", "b"), tuple("1", none), tuple("2", "v")],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary(),
      );

      pipe(
        dict,
        Dictionary.values(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals(["b", none, "v"]),
      );
    }),
    test(
      "keys",
      pipeLazy(
        [tuple("0", "b"), tuple("1", none), tuple("2", "v")],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
        Dictionary.keys(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals(["0", "1", "2"]),
      ),
    ),
    test("get returns none if a key is missing", () => {
      const dict = pipe(
        [tuple("0", "b"), tuple("1", "c"), tuple("2", "v")],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
      );

      pipe(dict[DictionaryLike_get]("5"), expectIsNone);
    }),
    test("get returns value of the key", () => {
      const dict = pipe(
        [tuple("0", "b"), tuple("1", "c"), tuple("2", "v")],
        ReadonlyArray.values<Tuple2<string, Optional<string>>>(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toDictionary<Optional<string>, string>(),
      );

      pipe(dict[DictionaryLike_get]("0"), expectEquals<Optional<string>>("b"));
    }),
  ),
  describe(
    "toReadonlyMap",
    test("from non-empty map", () => {
      const dict = pipe(
        [tuple("0", "b"), tuple("1", "d"), tuple("2", "v")],
        ReadonlyArray.values(),
        ReadonlyObjectMap.fromEntries(),
        ReadonlyObjectMap.toReadonlyMap(),
      );

      pipe(
        dict,
        ReadonlyMap.keys(),
        ReadonlyArray.fromIterable(),
        expectArrayEquals(["0", "1", "2"]),
      );
    }),
  ),
);

((_: ReadonlyObjectMap.Signature) => {})(ReadonlyObjectMap);

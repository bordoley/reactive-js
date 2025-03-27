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
import { Optional, compose, pipe } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";

testModule(
  "Dictionary",
  CollectionModuleTests(Dictionary, <T>() =>
    compose(ReadonlyArray.entries<T, number>(), Dictionary.fromEntries()),
  ),
  DictionaryCollectionModuleTests(Dictionary),
  describe(
    "map",
    test("using mapped value", () => {
      const mapped = pipe(
        ["b", "d", "f"],

        ReadonlyArray.entries<string, number>(),
        Dictionary.fromEntries(),

        Dictionary.map<string, number, number>((_, key: number) => key),
      );

      pipe(
        mapped[DictionaryLike_keys],
        ReadonlyArray.fromIterable(),
        x => x[Array_length],
        expectEquals(3),
      );
      pipe(mapped[DictionaryLike_get](0), expectEquals<Optional<number>>(0));
      pipe(mapped[DictionaryLike_get](100), expectIsNone);

      pipe(
        mapped[DictionaryLike_keys],
        ReadonlyArray.fromIterable(),
        expectArrayEquals([0, 1, 2]),
      );
    }),
  ),
)();

((_: Dictionary.Signature) => {})(Dictionary);

import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  AssociativeLike_keys,
  CollectionLike_count,
  KeyedLike_get,
} from "../../collections.js";
import { Optional, compose, pipe } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "Dictionary",
  KeyedCollectionModuleTests(Dictionary, <T>() =>
    compose(ReadonlyArray.entries<T, number>(), Dictionary.fromEntries()),
  ),
  DictionaryCollectionModuleTests(Dictionary),
  describe(
    "map",
    test("using mapped value", () => {
      const mapped = pipe(
        ["b", "d", "f"],
        compose(
          ReadonlyArray.entries<string, number>(),
          Dictionary.fromEntries(),
        ),
        Dictionary.map<string, number, number>((_, key: number) => key),
      );

      pipe(mapped[CollectionLike_count], expectEquals(3));
      pipe(mapped[KeyedLike_get](0), expectEquals<Optional<number>>(0));
      pipe(mapped[KeyedLike_get](100), expectIsNone);

      pipe(
        mapped[AssociativeLike_keys],
        Enumerable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2]),
      );
    }),
  ),
);

((_: Dictionary.Signature) => {})(Dictionary);

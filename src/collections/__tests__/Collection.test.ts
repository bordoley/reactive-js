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
import { Optional, compose, pipe, pipeLazy } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";
import * as Collection from "../Collection.js";

testModule(
  "Collection",
  describe("keyset",
    test("returns the keys of a collection", 
        pipeLazy(
          [5,4,3,2,1],
          ReadonlyArray.fromIterable(),
          Collection.keySet<ReadonlyArray.Collection>(ReadonlyArray),
          ReadonlyArray.fromIterable(),
          expectArrayEquals<number>([0,1,2,3,4])
        )
    )
  )
);
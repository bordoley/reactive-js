/// <reference types="./Dictionary.test.d.ts" />

import { Array_length } from "../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectIsNone, test, testModule, } from "../../__internal__/testing.js";
import { DictionaryLike_get, DictionaryLike_keys } from "../../collections.js";
import { compose, pipe } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";
testModule("Dictionary", CollectionModuleTests(Dictionary, () => compose(ReadonlyArray.entries(), Dictionary.fromEntries())), DictionaryCollectionModuleTests(Dictionary), describe("map", test("using mapped value", () => {
    const mapped = pipe(["b", "d", "f"], compose(ReadonlyArray.entries(), Dictionary.fromEntries()), Dictionary.map((_, key) => key));
    pipe(mapped[DictionaryLike_keys], Enumerable.toReadonlyArray(), x => x[Array_length], expectEquals(3));
    pipe(mapped[DictionaryLike_get](0), expectEquals(0));
    pipe(mapped[DictionaryLike_get](100), expectIsNone);
    pipe(mapped[DictionaryLike_keys], Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2]));
})));
((_) => { })(Dictionary);

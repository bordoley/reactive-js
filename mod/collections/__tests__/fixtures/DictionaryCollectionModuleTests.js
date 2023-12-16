/// <reference types="./DictionaryCollectionModuleTests.d.ts" />

import { describe, expectArrayEquals, test, } from "../../../__internal__/testing.js";
import { arrayEquality, pipe, pipeLazy, tuple } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
const DictionaryCollectionModuleTests = (m) => describe("DictionaryCollectionModule", describe("union", test("union of two disjoint Dictionaries", pipeLazy([tuple("a", "a")], ReadonlyArray.values(), m.fromEntries(), m.union(pipe([tuple("b", "b")], ReadonlyArray.values(), m.fromEntries())), m.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([tuple("a", "a"), tuple("b", "b")], {
    valuesEquality: arrayEquality(),
})))));
export default DictionaryCollectionModuleTests;

/// <reference types="./CollectionModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsNone, test, } from "../../../__internal__/testing.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { arrayEquality, greaterThan, none, pipe, pipeLazy, returns, tuple, } from "../../../functions.js";
import * as Dictionary from "../../Dictionary.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const CollectionModuleTests = (m, fromReadonlyArray) => describe("CollectionModule", describe("empty", test("returns an empty enumerator", pipeLazy(m.empty(), m.values(), ReadonlyArray.fromIterable(), expectArrayEquals([])))), describe("entries", test("enumerates all entries", pipeLazy(["b", "d"], fromReadonlyArray(), m.entries(), ReadonlyArray.fromIterable(), expectArrayEquals([tuple(0, "b"), tuple(1, "d")], {
    valuesEquality: arrayEquality(),
})))), describe("forEach", test("summing the keys", () => {
    let result = 0;
    pipe(["a", "B", "c"], fromReadonlyArray(), m.forEach((_, key) => {
        result = result + key;
    }));
    pipe(result, expectEquals(3));
})), describe("keep", test("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], fromReadonlyArray(), m.keep(greaterThan(5)), m.values(), ReadonlyArray.fromIterable(), expectArrayEquals([8, 10, 7])))), describe("keys", test("returns a keyset with all the keys", () => {
    const keys = pipe(["b", none, "v"], fromReadonlyArray(), m.keys(), ReadonlyArray.fromIterable());
    pipe(keys.length, expectEquals(3));
    pipe(keys, expectArrayEquals([0, 1, 2]));
})), describe("map", test("mapping every value to its key", pipeLazy(["b", "d", "f"], fromReadonlyArray(), m.map((_, key) => key), m.values(), ReadonlyArray.fromIterable(), expectArrayEquals([0, 1, 2])))), describe("reduce", test("summing the keys", pipeLazy(["a", "B", "c"], fromReadonlyArray(), m.reduce((acc, _, key) => acc + key, returns(0)), expectEquals(3)))), describe("toDictionary", test("count", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    pipe(dict[DictionaryLike_keys], ReadonlyArray.fromIterable(), x => x.length, expectEquals(3));
}), test("get values", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    pipe(dict, Dictionary.values(), ReadonlyArray.fromIterable(), expectArrayEquals(["b", none, "v"]));
}), test("keys", pipeLazy(["b", none, "v"], fromReadonlyArray(), m.toDictionary(), Dictionary.keys(), ReadonlyArray.fromIterable(), expectArrayEquals([0, 1, 2]))), test("get returns none if a key is missing", () => {
    const dict = pipe(["b", "c", "d"], fromReadonlyArray(), m.toDictionary());
    pipe(dict[DictionaryLike_get](5), expectIsNone);
}), test("get returns value of the key", () => {
    const dict = pipe(["b", "c", "d"], fromReadonlyArray(), m.toDictionary());
    pipe(dict[DictionaryLike_get](0), expectEquals("b"));
})), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe(["b", "d", "v"], fromReadonlyArray(), m.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), ReadonlyArray.fromIterable(), expectArrayEquals([0, 1, 2]));
})));
export default CollectionModuleTests;

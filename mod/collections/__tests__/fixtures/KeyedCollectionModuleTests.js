/// <reference types="./KeyedCollectionModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsNone, test, } from "../../../__internal__/testing.js";
import { CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { arrayEquality, greaterThan, none, pipe, pipeLazy, returns, tuple, } from "../../../functions.js";
import * as Dictionary from "../../Dictionary.js";
import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const KeyedCollectionModuleTests = (m, fromReadonlyArray) => describe("KeyedCollectionModule", describe("empty", test("returns an empty enumerator", pipeLazy(m.empty(), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([])))), describe("entries", test("enumerates all entries", pipeLazy(["b", "d"], fromReadonlyArray(), m.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([tuple(0, "b"), tuple(1, "d")], { valuesEquality: arrayEquality() })))), describe("forEach", test("summing the keys", () => {
    let result = 0;
    pipe(["a", "B", "c"], fromReadonlyArray(), m.forEach((_, key) => {
        result = result + key;
    }));
    pipe(result, expectEquals(3));
})), describe("keep", test("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], fromReadonlyArray(), m.keep(greaterThan(5)), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([8, 10, 7])))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe(["b", none, "v"], fromReadonlyArray(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals([0, 1, 2]));
})), describe("map", test("mapping every value to its key", pipeLazy(["b", "d", "f"], fromReadonlyArray(), m.map((_, key) => key), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2])))), describe("reduce", test("summing the keys", pipeLazy(["a", "B", "c"], fromReadonlyArray(), m.reduce((acc, _, key) => acc + key, returns(0)), expectEquals(3)))), describe("toDictionary", test("count", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    expectEquals(3)(dict[CollectionLike_count]);
}), test("get values", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    pipe(dict, Dictionary.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", none, "v"]));
}), test("keys", pipeLazy(["b", none, "v"], fromReadonlyArray(), m.toDictionary(), Dictionary.keys(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2]))), test("get returns none if a key is missing", () => {
    const dict = pipe(["b", "c", "d"], fromReadonlyArray(), m.toDictionary());
    pipe(dict[KeyedLike_get](5), expectIsNone);
}), test("get returns value of the key", () => {
    const dict = pipe(["b", "c", "d"], fromReadonlyArray(), m.toDictionary());
    pipe(dict[KeyedLike_get](0), expectEquals("b"));
})), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe(["b", "d", "v"], fromReadonlyArray(), m.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2]));
})));
export default KeyedCollectionModuleTests;

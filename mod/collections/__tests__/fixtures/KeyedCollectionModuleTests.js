/// <reference types="./KeyedCollectionModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, test, } from "../../../__internal__/testing.js";
import { CollectionLike_count, } from "../../../collections.js";
import { arrayEquality, none, pipe, pipeLazy, returns, } from "../../../functions.js";
import * as Dictionary from "../../Dictionary.js";
import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const KeyedCollectionModuleTests = (m, fromReadonlyArray) => describe("KeyedCollectionModule", describe("empty", test("returns an empty enumerator", pipeLazy(m.empty(), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([])))), describe("entries", test("enumerates all entries", pipeLazy(["b", "d"], fromReadonlyArray(), m.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([
    [0, "b"],
    [1, "d"],
], { valuesEquality: arrayEquality() })))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe(["b", none, "v"], fromReadonlyArray(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals([0, 1, 2]));
})), describe("map", test("mapping every value to its key", pipeLazy(["b", "d", "f"], fromReadonlyArray(), m.map((_, key) => key), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2])))), describe("reduce", test("summing the keys", pipeLazy(["a", "B", "c"], fromReadonlyArray(), m.reduce((acc, _, key) => acc + key, returns(0)), expectEquals(3)))), describe("toDictionary", test("count", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    expectEquals(3)(dict[CollectionLike_count]);
}), test("get values", () => {
    const dict = pipe(["b", none, "v"], fromReadonlyArray(), m.toDictionary());
    pipe(dict, Dictionary.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", none, "v"]));
}), test("keys", pipeLazy(["b", none, "v"], fromReadonlyArray(), m.toDictionary(), Dictionary.keys(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2])))), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe(["b", "d", "v"], fromReadonlyArray(), m.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), Enumerable.toReadonlyArray(), expectArrayEquals([0, 1, 2]));
})));
export default KeyedCollectionModuleTests;

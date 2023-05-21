/// <reference types="./AssociativeKeyedContainerModuleTests.d.ts" />

import * as Dictionary from "../../Dictionary.js";
import * as EnumeratorFactory from "../../EnumeratorFactory.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { describe, expectArrayEquals, expectEquals, test, } from "../../__internal__/testing.js";
import { arrayEquality, invoke, none, pipe, pipeLazy, returns, } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, } from "../../types.js";
const AssociativeKeyedContainerModuleTests = (m) => describe("AssociativeKeyedContainerModuleTests", describe("entries", test("enumerates all entries", pipeLazy({ a: "b", c: "d" }, m.fromReadonlyObjectMap(), m.entries(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals([
    ["a", "b"],
    ["c", "d"],
], arrayEquality())))), describe("forEach", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.forEach(value => {
        result = result + value;
    }));
    pipe(result, expectEquals("bdv"));
})), describe("forEachWithKey", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.forEachWithKey((_, key) => {
        result = result + key;
    }));
    pipe(result, expectEquals("ace"));
})), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
})), describe("reduce", test("summing the values", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("reduceWithKey", test("summing the keys", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduceWithKey((acc, _, key) => acc + key, returns("")), expectEquals("ace")))), describe("toDictionary", test("count", () => {
    const dict = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary());
    expectEquals(3)(dict[CollectionLike_count]);
}), test("get values", () => {
    const dict = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary());
    pipe(dict, Dictionary.values(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["b", none, "v"]));
}), test("keys", () => {
    const keys = pipeLazy({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary(), invoke(AssociativeCollectionLike_keys));
    pipe(keys, EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["a", "c", "e"]));
})), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["a", "c", "e"]));
})), describe("toReadonlyObjectMap", test("from non-empty map", () => {
    const dict = pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.toReadonlyObjectMap());
    pipe(dict, ReadonlyObjectMap.keys(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["a", "c", "e"]));
})));
export default AssociativeKeyedContainerModuleTests;

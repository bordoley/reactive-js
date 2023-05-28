/// <reference types="./AssociativeKeyedContainerModuleTests.d.ts" />

import * as Dictionary from "../../Dictionary.js";
import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { describe, expectArrayEquals, expectEquals, test, } from "../../__internal__/testing.js";
import { arrayEquality, isSome, none, pick, pipe, pipeLazy, returns, } from "../../functions.js";
import { CollectionLike_count, } from "../../types.js";
const AssociativeKeyedContainerModuleTests = (m) => describe("AssociativeKeyedContainerModuleTests", describe("empty", test("empty container count", pipeLazy(m.empty(), m.toDictionary(), pick(CollectionLike_count), expectEquals(0)))), describe("entries", test("enumerates all entries", pipeLazy({ a: "b", c: "d" }, m.fromReadonlyObjectMap(), m.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([
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
})), describe("keep", test("filters out entries by value", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keep(value => value === "d"), m.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["c"]))), test("validate the count of the returned container", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keep(value => value === "d"), m.toDictionary(), pick(CollectionLike_count), expectEquals(1)))), describe("keepWithKey", test("filters out entries by key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keepWithKey((_, key) => key === "c"), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["d"])))), describe("keepType", test("filters null values", pipeLazy([
    ["a", "b"],
    ["c", none],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keepType(isSome), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
})), describe("map", test("mapping every value to a number", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.map(_ => 1), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 1, 1]))), test("validate mapped count", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.map(_ => 1), m.toDictionary(), pick(CollectionLike_count), expectEquals(3)))), describe("mapWithKey", test("mapping every value to its key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.mapWithKey((_, key) => key), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["a", "c", "e"])))), describe("reduce", test("summing the values", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("reduceWithKey", test("summing the keys", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduceWithKey((acc, _, key) => acc + key, returns("")), expectEquals("ace")))), describe("toDictionary", test("count", () => {
    const dict = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary());
    expectEquals(3)(dict[CollectionLike_count]);
}), test("get values", () => {
    const dict = pipe({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary());
    pipe(dict, Dictionary.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", none, "v"]));
}), test("keys", pipeLazy({ a: "b", c: none, e: "v" }, m.fromReadonlyObjectMap(), m.toDictionary(), Dictionary.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["a", "c", "e"])))), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["a", "c", "e"]));
})), describe("toReadonlyObjectMap", test("from non-empty map", () => {
    const dict = pipe({ a: "b", c: "d", e: "v" }, m.fromReadonlyObjectMap(), m.toReadonlyObjectMap());
    pipe(dict, ReadonlyObjectMap.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["a", "c", "e"]));
})));
export default AssociativeKeyedContainerModuleTests;

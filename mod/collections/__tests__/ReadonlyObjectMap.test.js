/// <reference types="./ReadonlyObjectMap.test.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsNone, test, testModule, } from "../../__internal__/testing.js";
import { CollectionLike_count, KeyedLike_get } from "../../collections.js";
import { arrayEquality, none, pipe, pipeLazy, returns, } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
testModule("ReadonlyObjectMap", describe("empty", test("returns an empty enumerator", pipeLazy(ReadonlyObjectMap.empty(), ReadonlyObjectMap.values(), Enumerable.toReadonlyArray(), expectArrayEquals([])))), describe("entries", test("enumerates all entries", pipeLazy([
    ["0", "b"],
    ["1", "d"],
], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([
    ["0", "b"],
    ["1", "d"],
], { valuesEquality: arrayEquality() })))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe([
        ["0", "b"],
        ["1", none],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals(["0", "1", "2"]));
})), describe("map", test("mapping every value to its key", pipeLazy([
    ["0", "b"],
    ["1", "d"],
    ["2", "f"],
], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.map((_, key) => key), ReadonlyObjectMap.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["0", "1", "2"])))), describe("reduce", test("summing the keys", pipeLazy([
    ["0", "a"],
    ["1", "B"],
    ["2", "c"],
], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.reduce((acc, value, _) => acc + value, returns("")), expectEquals("aBc")))), describe("toDictionary", test("count", () => {
    const dict = pipe([
        ["0", "b"],
        ["1", none],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toDictionary());
    expectEquals(3)(dict[CollectionLike_count]);
}), test("get values", () => {
    const dict = pipe([
        ["0", "b"],
        ["1", none],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toDictionary());
    pipe(dict, Dictionary.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", none, "v"]));
}), test("keys", pipeLazy([
    ["0", "b"],
    ["1", none],
    ["2", "v"],
], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toDictionary(), Dictionary.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["0", "1", "2"]))), test("get returns none if a key is missing", () => {
    const dict = pipe([
        ["0", "b"],
        ["1", "c"],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toDictionary());
    pipe(dict[KeyedLike_get]("5"), expectIsNone);
}), test("get returns value of the key", () => {
    const dict = pipe([
        ["0", "b"],
        ["1", "c"],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toDictionary());
    pipe(dict[KeyedLike_get]("0"), expectEquals("b"));
})), describe("toReadonlyMap", test("from non-empty map", () => {
    const dict = pipe([
        ["0", "b"],
        ["1", "d"],
        ["2", "v"],
    ], ReadonlyArray.values(), ReadonlyObjectMap.fromEntries(), ReadonlyObjectMap.toReadonlyMap());
    pipe(dict, ReadonlyMap.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["0", "1", "2"]));
})));
((_) => { })(ReadonlyObjectMap);

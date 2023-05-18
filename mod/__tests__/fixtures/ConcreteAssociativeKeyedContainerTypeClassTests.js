/// <reference types="./ConcreteAssociativeKeyedContainerTypeClassTests.d.ts" />

import * as EnumeratorFactory from "../../EnumeratorFactory.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import { describe, expectArrayEquals, expectEquals, test, } from "../../__internal__/testing.js";
import { arrayEquality, isSome, none, pipe, pipeLazy, returns, } from "../../functions.js";
import AssociativeKeyedContainerTypeClassTests from "./AssociativeKeyedContainerTypeClassTests.js";
const ConcreteAssociativeKeyedContainerTypeClassTests = (m) => describe("ConcreteAssociativeKeyedContainerTypeClassTests", ...AssociativeKeyedContainerTypeClassTests(m).tests, describe("entries", test("enumerates all entries", pipeLazy([
    ["a", "b"],
    ["c", "d"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.entries(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals([
    ["a", "b"],
    ["c", "d"],
], arrayEquality()))), describe("forEach", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe([
        ["a", "b"],
        ["c", "d"],
        ["e", "v"],
    ], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.forEach(value => {
        result = result + value;
    }));
    pipe(result, expectEquals("bdv"));
})), describe("forEachWithKey", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe([
        ["a", "b"],
        ["c", "d"],
        ["e", "v"],
    ], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.forEachWithKey((_, key) => {
        result = result + key;
    }));
    pipe(result, expectEquals("ace"));
})), describe("keep", test("filters out entries by value", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.keep(value => value === "d"), m.keys(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["c"])))), describe("keepWithKey", test("filters out entries by key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.keepWithKey((_, key) => key === "c"), m.values(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["d"])))), describe("keepType", test("filters null values", pipeLazy([
    ["a", "b"],
    ["c", none],
    ["e", "v"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.keepType(isSome), m.values(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe([
        ["a", "b"],
        ["c", none],
        ["e", "v"],
    ], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
})), describe("map", test("mapping every value to a number", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.map(_ => 1), m.values(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals([1, 1, 1])))), describe("mapWithKey", test("mapping every value to its key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.mapWithKey((_, key) => key), m.values(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals(["a", "c", "e"])))), describe("reduce", test("summing the values", pipeLazy([
    ["a", 1],
    ["c", 2],
    ["e", 3],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("reduceWithKey", test("summing the keys", pipeLazy([
    ["a", 1],
    ["c", 2],
    ["e", 3],
], ReadonlyArray.toEnumeratorFactory(), m.fromEntries(), m.reduceWithKey((acc, _, key) => acc + key, returns("")), expectEquals("ace"))))));
export default ConcreteAssociativeKeyedContainerTypeClassTests;

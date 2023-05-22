/// <reference types="./ConcreteAssociativeKeyedContainerModuleTests.d.ts" />

import * as Enumerable from "../../Enumerable.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
import { describe, expectArrayEquals, expectEquals, test, } from "../../__internal__/testing.js";
import { arrayEquality, isSome, none, pipe, pipeLazy, returns, } from "../../functions.js";
import AssociativeKeyedContainerModuleTests from "./AssociativeKeyedContainerModuleTests.js";
const ConcreteAssociativeKeyedContainerModuleTests = (m) => describe("ConcreteAssociativeKeyedContainerModuleTests", ...AssociativeKeyedContainerModuleTests(m).tests, describe("entries", test("enumerates all entries", pipeLazy([
    ["a", "b"],
    ["c", "d"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.entries(), Enumerable.toReadonlyArray(), expectArrayEquals([
    ["a", "b"],
    ["c", "d"],
], arrayEquality()))), describe("forEach", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe([
        ["a", "b"],
        ["c", "d"],
        ["e", "v"],
    ], ReadonlyArray.toObservable(), m.fromEntries(), m.forEach(value => {
        result = result + value;
    }));
    pipe(result, expectEquals("bdv"));
})), describe("forEachWithKey", test("iterate and imperatively sum the keys", () => {
    let result = "";
    pipe([
        ["a", "b"],
        ["c", "d"],
        ["e", "v"],
    ], ReadonlyArray.toObservable(), m.fromEntries(), m.forEachWithKey((_, key) => {
        result = result + key;
    }));
    pipe(result, expectEquals("ace"));
})), describe("keep", test("filters out entries by value", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keep(value => value === "d"), m.keys(), Enumerable.toReadonlyArray(), expectArrayEquals(["c"])))), describe("keepWithKey", test("filters out entries by key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keepWithKey((_, key) => key === "c"), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["d"])))), describe("keepType", test("filters null values", pipeLazy([
    ["a", "b"],
    ["c", none],
    ["e", "v"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.keepType(isSome), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("keySet", test("returns a keyset with all the keys", () => {
    const keys = pipe([
        ["a", "b"],
        ["c", none],
        ["e", "v"],
    ], ReadonlyArray.toObservable(), m.fromEntries(), m.keySet());
    pipe(keys.size, expectEquals(3));
    pipe(Array.from(keys), expectArrayEquals(["a", "c", "e"]));
})), describe("map", test("mapping every value to a number", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.map(_ => 1), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 1, 1])))), describe("mapWithKey", test("mapping every value to its key", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.toObservable(), m.fromEntries(), m.mapWithKey((_, key) => key), m.values(), Enumerable.toReadonlyArray(), expectArrayEquals(["a", "c", "e"])))), describe("reduce", test("summing the values", pipeLazy([
    ["a", 1],
    ["c", 2],
    ["e", 3],
], ReadonlyArray.toObservable(), m.fromEntries(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("reduceWithKey", test("summing the keys", pipeLazy([
    ["a", 1],
    ["c", 2],
    ["e", 3],
], ReadonlyArray.toObservable(), m.fromEntries(), m.reduceWithKey((acc, _, key) => acc + key, returns("")), expectEquals("ace"))))));
export default ConcreteAssociativeKeyedContainerModuleTests;

/// <reference types="./AssociativeKeyedContainerTypeClassTests.d.ts" />

import * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { describe, expectArrayEquals, expectEquals, test, } from "../../__internal__/testing.js";
import { arrayEquality, none, pipe, pipeLazy, returns, } from "../../functions.js";
const AssociativeKeyedContainerTypeClassTests = (m) => describe("AssociativeKeyedContainerTypeClassTests", describe("entries", test("enumerates all entries", pipeLazy({ a: "b", c: "d" }, m.fromReadonlyObjectMap(), m.entries(), EnumeratorFactory.toReadonlyArray(), expectArrayEquals([
    ["a", "b"],
    ["c", "d"],
], arrayEquality()))), describe("forEach", test("iterate and imperatively sum the keys", () => {
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
})), describe("reduce", test("summing the values", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("reduceWithKey", test("summing the keys", pipeLazy({ a: 1, c: 2, e: 3 }, m.fromReadonlyObjectMap(), m.reduceWithKey((acc, _, key) => acc + key, returns("")), expectEquals("ace"))))));
export default AssociativeKeyedContainerTypeClassTests;

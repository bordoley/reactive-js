/// <reference types="./computations.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import * as Enumerable from "../collections/Enumerable.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import { keepType, mapTo, pick } from "../computations.js";
import { isSome, none, pipe, pipeLazy, tuple, } from "../functions.js";
testModule("computations", describe("keepType", test("filters null values", pipeLazy(["b", none, "v"], ReadonlyArray.values(), keepType(Enumerable, isSome), Enumerable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("mapTo", test("maps every value in the source to v", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], ReadonlyArray.values(), mapTo(Enumerable, 2), Enumerable.toReadonlyArray(), expectArrayEquals([2, 2, 2])))), describe("pick", test("with object and symbol keys", () => {
    const keyA = Symbol();
    const keyB = Symbol();
    const obj = {
        [keyA]: {
            [keyB]: "value",
        },
    };
    pipe([obj], ReadonlyArray.values(), pick(Enumerable, keyA, keyB), Enumerable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with object and string keys", () => {
    const obj = {
        keyA: {
            keyB: "value",
        },
    };
    pipe([obj], ReadonlyArray.values(), pick(Enumerable, "keyA", "keyB"), Enumerable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with array", () => {
    const obj = tuple(1, 2, 3, 4, 5, 6);
    pipe([obj], ReadonlyArray.values(), pick(Enumerable, 3), Enumerable.toReadonlyArray(), expectArrayEquals([4]));
})));

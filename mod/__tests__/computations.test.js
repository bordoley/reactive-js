/// <reference types="./computations.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { keepType, mapTo, pick } from "../computations.js";
import * as Observable from "../concurrent/Observable.js";
import { isSome, none, pipe, pipeLazy, tuple } from "../functions.js";
testModule("computations", describe("keepType", test("filters null values", pipeLazy(["b", none, "v"], Observable.fromReadonlyArray(), keepType(Observable.keep)(isSome), Observable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("mapTo", test("maps every value in the source to v", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], Observable.fromReadonlyArray(), mapTo(Observable.map)(2), Observable.toReadonlyArray(), expectArrayEquals([2, 2, 2])))), describe("pick", test("with object and symbol keys", () => {
    const keyA = Symbol();
    const keyB = Symbol();
    const obj = {
        [keyA]: {
            [keyB]: "value",
        },
    };
    pipe([obj], Observable.fromReadonlyArray(), pick(Observable.map)(keyA, keyB), Observable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with object and string keys", () => {
    const obj = {
        keyA: {
            keyB: "value",
        },
    };
    pipe([obj], Observable.fromReadonlyArray(), pick(Observable.map)("keyA", "keyB"), Observable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with array", () => {
    const obj = tuple(1, 2, 3, 4, 5, 6);
    pipe([obj], Observable.fromReadonlyArray(), pick(Observable.map)(3), Observable.toReadonlyArray(), expectArrayEquals([4]));
})));

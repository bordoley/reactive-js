/// <reference types="./Containers.test.d.ts" />

import * as Containers from "../Containers.js";
import * as Observable from "../Observable.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { isSome, none, pipe, pipeLazy, } from "../functions.js";
testModule("Containers", describe("keepType", test("filters null values", pipeLazy(["b", none, "v"], Observable.fromReadonlyArray(), Containers.keepType(Observable, isSome), Observable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("mapTo", test("maps every value in the source to v", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], Observable.fromReadonlyArray(), Containers.mapTo(Observable, 2), Observable.toReadonlyArray(), expectArrayEquals([2, 2, 2])))), describe("pick", test("with object and symbol keys", () => {
    const keyA = Symbol();
    const keyB = Symbol();
    const obj = {
        [keyA]: {
            [keyB]: "value",
        },
    };
    pipe([obj], Observable.fromReadonlyArray(), Containers.pick(Observable, keyA, keyB), Observable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with object and string keys", () => {
    const obj = {
        keyA: {
            keyB: "value",
        },
    };
    pipe([obj], Observable.fromReadonlyArray(), Containers.pick(Observable, "keyA", "keyB"), Observable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with array", () => {
    const obj = [
        1, 2, 3, 4, 5, 6,
    ];
    pipe([obj], Observable.fromReadonlyArray(), Containers.pick(Observable, 3), Observable.toReadonlyArray(), expectArrayEquals([4]));
})));

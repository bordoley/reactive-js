/// <reference types="./Computation.test.d.ts" />

import { describe, expectArrayEquals, expectToHaveBeenCalledTimes, mockFn, test, testModule, } from "../../__internal__/testing.js";
import { isSome, none, pipe, pipeLazy } from "../../functions.js";
import * as Computation from "../Computation.js";
import * as Iterable from "../Iterable.js";
testModule("Computation", describe("concat", test("concats the input containers in order", pipeLazy(Computation.concat(Iterable)([1, 2, 3], [4, 5, 6]), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy(Computation.concat(Iterable)([1, 2, 3], [4, 5, 6], [7, 8, 8]), Iterable.takeFirst({ count: 5 }), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], Computation.concatMap(Iterable)(() => [1, 2, 3]), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], Computation.concatMapIterable(Iterable)(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("maps the incoming value with the inline generator function, with delayed source", pipeLazy([none, none], Computation.concatMapIterable(Iterable)(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Computation.concatWith(Iterable)([2, 3, 4]), Iterable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Computation.endWith(Iterable)(2, 3, 4), Iterable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Computation.ignoreElements(Iterable)(), Iterable.toReadonlyArray(), expectArrayEquals([]))), test("invokes all side-effects", () => {
    const f = mockFn();
    pipe([1, 2, 3], Iterable.forEach(f), Computation.ignoreElements(Iterable)(), Iterable.toReadonlyArray(), expectArrayEquals([]));
    pipe(f, expectToHaveBeenCalledTimes(3));
})), describe("keepType", test("filters null values", pipeLazy(["b", none, "v"], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("mapTo", test("maps every value in the source to v", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], Computation.mapTo(Iterable)(2), Iterable.toReadonlyArray(), expectArrayEquals([2, 2, 2])))), describe("pick", test("with object and symbol keys", () => {
    const keyA = Symbol();
    const keyB = Symbol();
    const obj = {
        [keyA]: {
            [keyB]: "value",
        },
    };
    pipe([obj], Computation.pick(Iterable)(keyA, keyB), Iterable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with object and string keys", pipeLazy([
    {
        keyA: {
            keyB: "value",
        },
    },
], Computation.pick(Iterable)("keyA", "keyB"), Iterable.toReadonlyArray(), expectArrayEquals(["value"]))), test("with array", pipeLazy([[1, 2, 3, 4, 5, 6]], Computation.pick(Iterable)(3), Iterable.toReadonlyArray(), expectArrayEquals([4])))), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], Computation.startWith(Iterable)(2, 3, 4), Iterable.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))));
((_) => { })(Computation);

/// <reference types="./DeferredTypeClassTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import { describe, expectArrayEquals, expectToThrowError, test, } from "../../__internal__/testing.js";
import { arrayEquality, lessThan, none, pipe, pipeLazy, } from "../../functions.js";
import ContainerTypeClassTests from "./ContainerTypeClassTests.js";
const DeferredTypeClassTests = (m, toReadonlyArray) => describe("DeferredTypeClass", ...ContainerTypeClassTests(m, () => Disposable.disposed, () => (arr) => m.fromReadonlyArray()(arr), () => (c) => toReadonlyArray()(c)).tests, describe("concat", test("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatAll", test("concats the input containers in order", pipeLazy([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
], m.fromReadonlyArray(), m.concatAll(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.endWith(2, 3, 4), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], m.fromReadonlyArray(), m.flatMapIterable(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("fromFactory", test("it produces the factory result", pipeLazy(() => 1, m.fromFactory(), toReadonlyArray(), expectArrayEquals([1])))), describe("fromValue", test("it produces the value", pipeLazy(none, m.fromValue(), toReadonlyArray(), expectArrayEquals([none])))), describe("m.fromReadonlyArray", test("negative count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3, start: 4 }), toReadonlyArray(), expectArrayEquals([5, 4, 3]));
}), test("positive count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3, start: 4 }), toReadonlyArray(), expectArrayEquals([5, 6, 7]));
}), test("negative count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -100, start: 3 }), toReadonlyArray(), expectArrayEquals([4, 3, 2, 1]));
}), test("positive count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 100, start: 7 }), toReadonlyArray(), expectArrayEquals([8, 9]));
}), test("negative count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3 }), toReadonlyArray(), expectArrayEquals([9, 8, 7]));
}), test("positive count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3 }), toReadonlyArray(), expectArrayEquals([1, 2, 3]));
})), describe("repeat", test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(lessThan(1)), toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
        throw err;
    }), toReadonlyArray()), expectToThrowError(err));
})), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.startWith(2, 3, 4), toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("takeLast", test("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 3 }), toReadonlyArray(), expectArrayEquals([3, 4, 5]))), test("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 10 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast(), toReadonlyArray(), expectArrayEquals([5])))), describe("zip", test("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
], arrayEquality()))), test("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()), pipe([1, 2, 3, 4], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([
    [1, 5, 1],
    [2, 4, 2],
    [3, 3, 3],
], arrayEquality())))), describe("zipWith", test("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())), toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality())))));
export default DeferredTypeClassTests;

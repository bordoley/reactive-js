/// <reference types="./RunnableContainerModuleTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectToThrowError, expectTrue, test, } from "../../__internal__/testing.js";
import { alwaysFalse, alwaysTrue, arrayEquality, greaterThan, lessThan, pipe, pipeLazy, returns, } from "../../functions.js";
import ConcreteContainerModuleTests from "./ConcreteContainerModuleTests.js";
const RunnableContainerModuleTests = (m) => [
    ...ConcreteContainerModuleTests(m, () => Disposable.disposed, () => m.toReadonlyArray()),
    describe("RunnableContainerModuleTests", describe("concat", test("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], m.fromReadonlyArray(), m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("contains", describe("strict equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1), expectEquals(false)))), describe("custom equality comparator", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))), test("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(true))), test("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), m.contains(1, { equality: (a, b) => a === b }), expectEquals(false))))), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.endWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("everySatisfy", test("source is empty", pipeLazy([], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(true))), test("source values pass predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysTrue), expectEquals(true))), test("source values fail predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), expectEquals(false)))), describe("first", test("returns the first item in the src", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.first(), expectEquals(1)))), describe("last", test("empty source", () => {
        const result = pipe([], m.fromReadonlyArray(), m.last());
        pipe(result, expectIsNone);
    }), test("it returns the last value", () => {
        const result = pipe([1, 2, 3], m.fromReadonlyArray(), m.last());
        pipe(result, expectEquals(3));
    })), describe("noneSatisfy", test("no values satisfy the predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("empty input", pipeLazy([], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectTrue)), test("some satisfy", pipeLazy([1, 2, 30, 4, 3], m.fromReadonlyArray(), m.noneSatisfy(greaterThan(5)), expectFalse))), describe("reduce", test("summing all values", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("repeat", test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(lessThan(1)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
        const err = new Error();
        pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
            throw err;
        }), m.toReadonlyArray()), expectToThrowError(err));
    })), describe("someSatisfy", test("some satisfies predicate", pipeLazy([1, 2, 30, 4], m.fromReadonlyArray(), m.someSatisfy(greaterThan(5)), expectTrue))), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), m.startWith(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("zip", test("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 5],
        [2, 4],
        [3, 3],
        [4, 2],
        [5, 1],
    ], arrayEquality()))), test("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()), pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 5, 1],
        [2, 4, 2],
        [3, 3, 3],
    ], arrayEquality())))), describe("zipWith", test("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
        [1, 1],
        [2, 2],
        [3, 3],
    ], arrayEquality()))))),
];
export default RunnableContainerModuleTests;

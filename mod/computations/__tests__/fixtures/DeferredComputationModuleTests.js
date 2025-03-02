/// <reference types="./DeferredComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectFalse, expectToThrow, expectToThrowError, expectTrue, test, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { alwaysTrue, increment, lessThan, newInstance, none, pipe, pipeLazy, raise, returns, } from "../../../functions.js";
import * as ComputationM from "../../Computation.js";
const DeferredComputationModuleTests = (m) => describe("DeferredComputationModule", describe("catchError", test("when the source throws", () => {
    const e1 = "e1";
    let result = none;
    pipe(m.raise({ raise: () => e1 }), m.catchError((e) => {
        result = e.message;
    }), m.toReadonlyArray());
    pipe(result, expectEquals(e1));
}), test("when the error handler throws an error", () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    pipe(m.raise({ raise: () => e1 }), m.catchError(_ => {
        throw e2;
    }), m.catchError(e => {
        result = e.cause;
    }), m.toReadonlyArray());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
}), test("when error handler returns a computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), ComputationM.concatWith(m)(m.raise()), m.catchError(pipeLazy([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("fromIterable", test("with array", pipeLazy([1, 2, 3], m.fromIterable(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the iterable throws", pipeLazy(pipeLazy((function* Generator() {
    throw newInstance(Error);
})(), m.fromIterable(), m.last()), expectToThrow))), describe("fromValue", test("with array", pipeLazy(1, m.fromValue(), m.toReadonlyArray(), expectArrayEquals([1])))), describe("generate", test("with count", pipeLazy(m.generate(increment, returns(0), { count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))), describe("fromReadonlyArray", test("starting at index greater than 0", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray({ start: 1 }), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), test("starting at index greater than 0 with count", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray({ start: 1, count: 2 }), m.toReadonlyArray(), expectArrayEquals([2, 3]))), test("starting at index greater than 0 with count exceeding the length", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray({ start: 1, count: 10 }), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), test("negative count", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray({ count: -2 }), m.toReadonlyArray(), expectArrayEquals([4, 3]))), test("starting at index greater than 0 with negative count", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray({ start: 2, count: -2 }), m.toReadonlyArray(), expectArrayEquals([3, 2])))), describe("concatMany", test("concats the input containers in order", pipeLazy(m.concatMany([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
]), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy(m.concatMany([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
    pipe([7, 8, 8], m.fromReadonlyArray()),
]), m.takeFirst({ count: 5 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("concatAll", test("concating inner sources", pipeLazy([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
], m.fromReadonlyArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
    pipe([7, 8, 9], m.fromReadonlyArray()),
], m.fromReadonlyArray(), m.concatAll(), m.takeFirst({ count: 5 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("empty", test("produces no results", pipeLazy(m.empty(), m.toReadonlyArray(), expectArrayEquals([])))), describe("raise", test("when raise function returns an value", () => {
    const e1 = "e1";
    try {
        pipe(m.raise({ raise: () => e1 }), m.toReadonlyArray());
        expectFalse(true);
    }
    catch (e) {
        expectTrue(e instanceof Error);
        pipe(e.message, expectEquals(e1));
    }
}), test("when raise function throws an exception", () => {
    const e1 = new Error();
    try {
        pipe(m.raise({
            raise: () => {
                throw e1;
            },
        }), m.toReadonlyArray());
        expectFalse(true);
    }
    catch (e) {
        expectTrue(e instanceof Error);
        pipe(e, expectEquals(e1));
    }
}), test("when raise function returns an exception", () => {
    const e1 = new Error();
    try {
        pipe(m.raise({ raise: () => e1 }), m.toReadonlyArray());
        expectFalse(true);
    }
    catch (e) {
        expectTrue(e instanceof Error);
        pipe(e, expectEquals(e1));
    }
})), describe("repeat", test("when repeating forever.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(), m.takeFirst({ count: 8 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(lessThan(1)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
})), describe("retry", test("retrys the container on an exception", pipeLazy(ComputationM.concat(m)(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry(alwaysTrue), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("retrys with the default predicate", pipeLazy(ComputationM.concat(m)(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when source and the retry predicate throw", pipeLazy(pipeLazy(m.raise(), m.retry(raise), m.toReadonlyArray()), expectToThrow)), test("retrys only twice", pipeLazy(ComputationM.concat(m)(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry((count, _) => count < 2), m.takeFirst({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("scan", test("sums all the values in the array emitting intermediate values.", pipeLazy([1, 1, 1], m.fromReadonlyArray(), m.scan((a, b) => a + b, returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("throws when the scan function throws", () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan(scanner, returns(0)), m.toReadonlyArray()), expectToThrowError(err));
}), test("throws when the initial value function throws", () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan((a, b) => a + b, initialValue), m.toReadonlyArray()), expectToThrowError(err));
})), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), ComputationM.startWith(m)(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("takeFirst", test("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), test("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), test("from iterable source", pipeLazy([1, 2, 3, 4], m.fromIterable(), m.takeFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), test("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), test("with default count", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), test("when count is 0", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst({ count: 0 }), m.toReadonlyArray(), expectArrayEquals([])))), describe("takeWhile", test("exclusive", () => {
    pipe([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeWhile(lessThan(4)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([]));
}), test("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromReadonlyArray(), m.takeWhile(lessThan(4), { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), test("when predicate throws", () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
})), describe("throwIfEmpty", test("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
}), test("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => {
        throw error;
    }), m.toReadonlyArray()), expectToThrowError(error));
}), test("when source is not empty", pipeLazy([1], m.fromReadonlyArray(), m.throwIfEmpty(returns(none)), m.toReadonlyArray(), expectArrayEquals([1])))));
export default DeferredComputationModuleTests;

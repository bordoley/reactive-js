/// <reference types="./SequentialComputationModuleTests.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectToThrowAsync, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ignore, lessThan, none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, raise, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
const SequentialComputationModuleTests = (m) => describe("SequentialComputationModule", describe("catchError", testAsync("when the source does not throw", pipeLazyAsync([1, 2, 3, 4], Computation.fromReadonlyArray(m), m.catchError(ignore), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("when the source throws", async () => {
    const e1 = "e1";
    let result = none;
    await pipeAsync(Computation.raise(m, { raise: () => e1 }), m.catchError((e) => {
        result = e.message;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync());
    pipe(result, expectEquals(e1));
}), testAsync("when the error handler throws an error", async () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    await pipeAsync(Computation.raise(m, { raise: () => e1 }), m.catchError(_ => {
        throw e2;
    }), m.catchError(e => {
        result = e.cause;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
}), testAsync("when error handler returns a computation", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), Computation.concatWith(m, Computation.raise(m, none, 0)), m.catchError(pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m))), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("forEach", testAsync("invokes the effect for each notified value", async () => {
    const result = [];
    await pipeAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.forEach((x) => {
        result[Array_push](x + 10);
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), testAsync("when the effect function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.forEach(_ => {
        throw err;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("repeat", testAsync("when repeating forever.", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(), m.takeFirst({ count: 8 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), testAsync("when repeating a finite amount of times.", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(3), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testAsync("when repeating with a predicate", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(lessThan(1)), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the repeat function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.repeat(_ => {
        throw err;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("retry", testAsync("retrys with the default predicate", pipeLazyAsync(m.concat(Computation.fromReadonlyArray(m)([1, 2, 3]), Computation.raise(m)), m.retry(), m.takeFirst({ count: 6 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), testAsync("when source and the retry predicate throw", pipeLazyAsync(pipeLazyAsync(Computation.raise(m), m.retry(() => raise("")), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowAsync)), testAsync("retrys only twice", pipeLazyAsync(pipeLazyAsync(m.concat(Computation.fromReadonlyArray(m)([1, 2, 3]), Computation.raise(m)), m.retry((count, _) => count < 2), m.takeFirst({ count: 10 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3])), expectToThrowAsync))), describe("scanDistinct", testAsync("sums all the values in the array emitting intermediate values.", pipeLazyAsync([1, 1, 1], Computation.fromReadonlyArray(m), m.scanDistinct((a, b) => a + b, returns(0)), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([0, 1, 2, 3]))), testAsync("throws when the reduce function throws", async () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.scanDistinct((scanner), returns(0)), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
}), testAsync("throws when the initial value function throws", async () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.scanDistinct((a, b) => a + b, initialValue), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("throwIfEmpty", testAsync("when source is empty", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m), m.throwIfEmpty(() => error), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when factory throw", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m), m.throwIfEmpty(() => {
        throw error;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when source is not empty", pipeLazyAsync([1], Computation.fromReadonlyArray(m), m.throwIfEmpty(returns(none)), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1])))));
export default SequentialComputationModuleTests;

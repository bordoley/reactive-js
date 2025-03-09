/// <reference types="./SynchronousComputationModuleTests.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectToThrow, expectToThrowError, expectTrue, test, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ComputationLike_isPure, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationWithSideEffects, PureDeferredComputation, PureSynchronousComputation, SynchronousComputationWithSideEffects, } from "../../../computations.js";
import { alwaysTrue, ignore, increment, invoke, lessThan, none, pick, pipe, pipeLazy, raise, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";
import * as Runnable from "../../Runnable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
import ComputationOperatorWithSideEffectsTests from "./operators/ComputationOperatorWithSideEffectsTests.js";
import HigherOrderComputationOperatorTests from "./operators/HigherOrderComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./operators/StatefulSynchronousComputationOperatorTests.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";
const SynchronousComputationModuleTests = (m, computationType) => {
    const { [Computation_pureSynchronousOfT]: pureSynchronousOfT, [Computation_synchronousWithSideEffectsOfT]: synchronousWithSideEffectsOfT, [Computation_pureDeferredOfT]: pureDeferredOfT, [Computation_deferredWithSideEffectsOfT]: deferredWithSideEffectsOfT, } = computationType;
    return describe("SynchronousComputationModule", describe("catchError", HigherOrderComputationOperatorTests(computationType, pureSynchronousOfT &&
        m.catchError(_ => pureSynchronousOfT, {
            innerType: PureSynchronousComputation,
        }), synchronousWithSideEffectsOfT &&
        m.catchError(_ => synchronousWithSideEffectsOfT, {
            innerType: SynchronousComputationWithSideEffects,
        }), pureDeferredOfT &&
        m.catchError(_ => pureDeferredOfT, {
            innerType: PureDeferredComputation,
        }), deferredWithSideEffectsOfT &&
        m.catchError(_ => deferredWithSideEffectsOfT, {
            innerType: DeferredComputationWithSideEffects,
        })), StatefulSynchronousComputationOperatorTests(computationType, m.catchError(_ => console.log())), test("when the source throws", () => {
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
    }), test("when error handler returns a computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), Computation.concatWith(m)(m.raise()), m.catchError(pipeLazy([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatAll", HigherOrderComputationOperatorTests(computationType, m.concatAll({
        innerType: PureSynchronousComputation,
    }), m.concatAll({
        innerType: SynchronousComputationWithSideEffects,
    }), m.concatAll({
        innerType: PureDeferredComputation,
    }), m.concatAll({
        innerType: DeferredComputationWithSideEffects,
    })), test("concating inner sources", pipeLazy([
        pipe([1, 2, 3], m.fromReadonlyArray()),
        pipe([4, 5, 6], m.fromReadonlyArray()),
    ], m.fromReadonlyArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy([
        pipe([1, 2, 3], m.fromReadonlyArray()),
        pipe([4, 5, 6], m.fromReadonlyArray()),
        pipe([7, 8, 9], m.fromReadonlyArray()),
    ], m.fromReadonlyArray(), m.concatAll(), m.takeFirst({ count: 5 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("concat", test("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray()), pipe([7, 8, 8], m.fromReadonlyArray())), m.takeFirst({ count: 5 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), ComputationTest.isPureSynchronous(m.concat(m.empty(), m.empty())), pureDeferredOfT &&
        ComputationTest.isPureDeferred(m.concat(pureDeferredOfT, m.empty())), synchronousWithSideEffectsOfT &&
        ComputationTest.isSynchronousWithSideEffects(m.concat(synchronousWithSideEffectsOfT, m.empty())), deferredWithSideEffectsOfT &&
        ComputationTest.isDeferredWithSideEffects(m.concat(deferredWithSideEffectsOfT, m.empty()))), describe("empty", test("produces no results", pipeLazy(m.empty(), m.toReadonlyArray(), expectArrayEquals([]))), ComputationTest.isPureSynchronous(m.empty())), describe("encodeUtf8", StatefulSynchronousComputationOperatorTests(computationType, m.encodeUtf8()), test("encoding ascii", () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";
        pipe([str], m.fromReadonlyArray(), m.encodeUtf8(), m.toRunnable(), Runnable.decodeWithCharset(), Runnable.toReadonlyArray(), invoke("join"), expectEquals(str));
    })), describe("first", test("returns the first value in the computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.first(), expectEquals(1))), test("returns the none when computation is empty", pipeLazy([], m.fromReadonlyArray(), m.first(), expectIsNone))), describe("forEach", ComputationOperatorWithSideEffectsTests(computationType, m.forEach(ignore)), test("invokes the effect for each notified value", () => {
        const result = [];
        pipe([1, 2, 3], m.fromReadonlyArray(), m.forEach((x) => {
            result[Array_push](x + 10);
        }), m.toReadonlyArray()),
            pipe(result, expectArrayEquals([11, 12, 13]));
    }), test("when the effect function throws", () => {
        const err = new Error();
        pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.forEach(_ => {
            throw err;
        }), m.toReadonlyArray()), expectToThrowError(err));
    })), describe("fromIterable", ComputationTest.isPureSynchronous(m.fromIterable()([])), ComputationTest.isSynchronousWithSideEffects(pipe([], Iterable.forEach(ignore), m.fromIterable())), test("from Iterable that has side effects", pipeLazy([1, 2, 3], Iterable.forEach(() => { }), m.fromIterable(), pick(ComputationLike_isPure), x => x, expectFalse("expected iterable to have side effects")))), describe("fromReadonlyArray", ComputationTest.isPureSynchronous(pipe([], m.fromReadonlyArray()))), describe("fromValue", ComputationTest.isPureSynchronous(pipe("a", m.fromValue()))), describe("generate", ComputationTest.isPureSynchronous(m.generate(increment, returns(0), { count: 10 }))), describe("last", test("returns the last value in the computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.last(), expectEquals(3)))), describe("raise", ComputationTest.isPureSynchronous(m.raise()), test("when raise function returns an value", () => {
        const e1 = "e1";
        try {
            pipe(m.raise({ raise: () => e1 }), m.toReadonlyArray());
            expectFalse()(true);
        }
        catch (e) {
            pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
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
            expectFalse()(true);
        }
        catch (e) {
            pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
            pipe(e, expectEquals(e1));
        }
    }), test("when raise function returns an exception", () => {
        const e1 = new Error();
        try {
            pipe(m.raise({ raise: () => e1 }), m.toReadonlyArray());
            expectFalse()(true);
        }
        catch (e) {
            pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
            pipe(e, expectEquals(e1));
        }
    })), describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("repeat", StatelessComputationOperatorTests({
        ...computationType,
        // Repeat does not support multicasted input
        [Computation_multicastOfT]: none,
    }, m.repeat()), test("when repeating forever.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(), m.takeFirst({ count: 8 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(lessThan(1)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the repeat function throws", () => {
        const err = new Error();
        pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
            throw err;
        }), m.toReadonlyArray()), expectToThrowError(err));
    })), describe("retry", StatelessComputationOperatorTests({
        ...computationType,
        // Repeat does not support multicasted input
        [Computation_multicastOfT]: none,
    }, m.retry()), test("retrys the container on an exception", pipeLazy(m.concat(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry(alwaysTrue), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("retrys with the default predicate", pipeLazy(m.concat(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when source and the retry predicate throw", pipeLazy(pipeLazy(m.raise(), m.retry(raise), m.toReadonlyArray()), expectToThrow)), test("retrys only twice", pipeLazy(m.concat(m.generate(increment, returns(0), { count: 3 }), m.raise()), m.retry((count, _) => count < 2), m.takeFirst({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("scan", StatefulSynchronousComputationOperatorTests(computationType, m.scan(increment, returns(0))), test("sums all the values in the array emitting intermediate values.", pipeLazy([1, 1, 1], m.fromReadonlyArray(), m.scan((a, b) => a + b, returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("throws when the scan function throws", () => {
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
    })), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), Computation.startWith(m)(2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), describe("takeFirst", StatefulSynchronousComputationOperatorTests(computationType, m.takeFirst()), test("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), test("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), test("from iterable source", pipeLazy([1, 2, 3, 4], m.fromIterable(), m.takeFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), test("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), test("with default count", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), test("when count is 0", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst({ count: 0 }), m.toReadonlyArray(), expectArrayEquals([])))), describe("takeWhile", StatefulSynchronousComputationOperatorTests(computationType, m.takeWhile(alwaysTrue)), test("exclusive", () => {
        pipe([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeWhile(lessThan(4)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
        pipe([1, 2, 3], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
        pipe([], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([]));
    }), test("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromReadonlyArray(), m.takeWhile(lessThan(4), { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), test("when predicate throws", () => {
        const err = new Error();
        const predicate = (_) => {
            throw err;
        };
        pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
    })), describe("throwIfEmpty", StatefulSynchronousComputationOperatorTests(computationType, m.throwIfEmpty(() => new Error())), test("when source is empty", () => {
        const error = new Error();
        pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
    }), test("when factory throw", () => {
        const error = new Error();
        pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => {
            throw error;
        }), m.toReadonlyArray()), expectToThrowError(error));
    }), test("when source is not empty", pipeLazy([1], m.fromReadonlyArray(), m.throwIfEmpty(returns(none)), m.toReadonlyArray(), expectArrayEquals([1])))), describe("toRunnable", test("when deferable sinkcompletes early", pipeLazy(m.generate(increment, returns(0)), m.toRunnable(), Runnable.takeFirst({ count: 3 }), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))));
};
export default SynchronousComputationModuleTests;

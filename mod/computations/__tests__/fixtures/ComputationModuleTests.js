/// <reference types="./ComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectFalse, expectIsNone, expectToThrowAsync, expectToThrowErrorAsync, expectTrue, testAsync, } from "../../../__internal__/testing.js";
import { alwaysTrue, greaterThan, identity, newInstance, pipe, pipeAsync, pipeLazy, pipeLazyAsync, } from "../../../functions.js";
import { increment } from "../../../math.js";
import * as Computation from "../../Computation.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";
const ComputationModuleTests = (m, computations) => describe("ComputationModule", describe("empty", testAsync("produces no results", pipeLazyAsync(m.empty(), m.toReadonlyArrayAsync(), expectArrayEquals([])))), describe("firstAsync", testAsync("returns the first value", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromIterable(m), m.firstAsync(), expectEquals(1))), testAsync("empty source", pipeLazyAsync([], Computation.fromIterable(m), m.firstAsync(), expectIsNone)), testAsync("an iterable that throws", pipeLazyAsync(pipeLazy((function* Generator() {
    throw newInstance(Error);
})(), Computation.fromIterable(m), m.firstAsync()), expectToThrowAsync))), describe("fromReadonlyArray", testAsync("starting at index greater than 0", pipeLazyAsync([1, 2, 3, 4], m.fromReadonlyArray({ start: 1 }), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("starting at index greater than 0 with count", pipeLazyAsync([1, 2, 3, 4], m.fromReadonlyArray({ start: 1, count: 2 }), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3]))), testAsync("starting at index greater than 0 with count exceeding the length", pipeLazyAsync([1, 2, 3, 4], m.fromReadonlyArray({ start: 1, count: 10 }), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("negative count", pipeLazyAsync([1, 2, 3, 4], m.fromReadonlyArray({ count: -2 }), m.toReadonlyArrayAsync(), expectArrayEquals([4, 3]))), testAsync("starting at index greater than 0 with negative count", pipeLazyAsync([1, 2, 3, 4], m.fromReadonlyArray({ start: 2, count: -2 }), m.toReadonlyArrayAsync(), expectArrayEquals([3, 2])))), describe("fromValue", testAsync("with array", pipeLazyAsync(1, m.fromValue(), m.toReadonlyArrayAsync(), expectArrayEquals([1])))), describe("gen", testAsync("when the iterable throws", pipeLazyAsync(pipeLazy(m.gen(function* Generator() {
    throw newInstance(Error);
}), m.toReadonlyArrayAsync()), expectToThrowAsync))), describe("keep", StatelessComputationOperatorTests(computations, m.keep(alwaysTrue)), testAsync("keeps only values greater than 5", pipeLazyAsync([4, 8, 10, 7], m.fromReadonlyArray(), m.keep(greaterThan(5)), m.toReadonlyArrayAsync(), expectArrayEquals([8, 10, 7]))), testAsync("when predicate throws", async () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], m.fromReadonlyArray(), m.keep(predicate), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("map", StatelessComputationOperatorTests(computations, m.map(identity)), testAsync("maps every value", pipeLazyAsync([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("when selector throws", async () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(selector), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("lastAsync", testAsync("returns the last value", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromIterable(m), m.lastAsync(), expectEquals(5))), testAsync("empty source", pipeLazyAsync([], Computation.fromIterable(m), m.lastAsync(), expectIsNone)), testAsync("an iterable that throws", pipeLazyAsync(pipeLazy((function* Generator() {
    throw newInstance(Error);
})(), Computation.fromIterable(m), m.lastAsync()), expectToThrowAsync))), describe("raise", testAsync("when raise function returns an value", async () => {
    const e1 = "e1";
    try {
        await pipeAsync(m.raise({ raise: () => e1 }), m.toReadonlyArrayAsync());
        expectFalse()(true);
    }
    catch (e) {
        pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
        pipe(e.message, expectEquals(e1));
    }
}), testAsync("when raise function throws an exception", async () => {
    const e1 = new Error();
    try {
        await pipeAsync(m.raise({
            raise: () => {
                throw e1;
            },
        }), m.toReadonlyArrayAsync());
        expectFalse()(true);
    }
    catch (e) {
        pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
        pipe(e, expectEquals(e1));
    }
}), testAsync("when raise function returns an exception", async () => {
    const e1 = new Error();
    try {
        await pipeAsync(m.raise({ raise: () => e1 }), m.toReadonlyArrayAsync());
        expectFalse()(true);
    }
    catch (e) {
        pipe(e instanceof Error, expectTrue("expected e to be instance of an Error"));
        pipe(e, expectEquals(e1));
    }
})), describe("reduceAsync", testAsync("returns the sum of values", pipeLazyAsync([1, 1, 1, 1, 1], Computation.fromIterable(m), m.reduceAsync((acc, next) => next + acc, () => 0), expectEquals(5))), testAsync("empty source", pipeLazyAsync([], Computation.fromIterable(m), m.reduceAsync((acc, next) => next + acc, () => 0), expectEquals(0))), testAsync("an iterable that throws", pipeLazyAsync(pipeLazy((function* Generator() {
    throw newInstance(Error);
})(), Computation.fromIterable(m), m.reduceAsync((acc, next) => next + acc, () => 0)), expectToThrowAsync))));
export default ComputationModuleTests;

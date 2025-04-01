/// <reference types="./ComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectPromiseToThrow, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { alwaysTrue, arrayEquality, bindMethod, greaterThan, lessThan, pipe, pipeAsync, pipeLazy, pipeLazyAsync, returns, tuple, } from "../../../functions.js";
import { increment } from "../../../math.js";
import * as Computation from "../../Computation.js";
import * as ReactiveSource from "../../ReactiveSource.js";
const ComputationModuleTests = (m) => describe("ComputationModule", describe("distinctUntilChanged", testAsync("when source has duplicates in order", pipeLazyAsync([1, 2, 2, 2, 2, 3, 3, 3, 4], Computation.fromReadonlyArray(m), m.distinctUntilChanged(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("when source is empty", pipeLazyAsync(Computation.empty(m)(), m.distinctUntilChanged(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("when equality operator throws", async () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    await pipe(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.distinctUntilChanged({ equality }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
}), testAsync("with custom equality functions", pipeLazyAsync([1, 2, 2, 2, 2, 3, 3, 3, 4], Computation.fromReadonlyArray(m), m.distinctUntilChanged({
    equality: () => true,
}), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1])))), describe("genPure", testAsync("iterating an array iterator", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.genPure), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the iterator throws", pipeLazy(function* () {
    throw new Error();
}, (m.genPure), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectPromiseToThrow))), describe("keep", testAsync("keeps only values greater than 5", pipeLazyAsync([4, 8, 10, 7], Computation.fromReadonlyArray(m), m.keep(greaterThan(5)), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([8, 10, 7]))), testAsync("when predicate throws", async () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.keep(predicate), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("map", testAsync("maps every value", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.map(increment), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("when selector throws", async () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 2, 3], Computation.fromReadonlyArray(m), m.map(selector), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("pairwise", testAsync("when there are more than one input value", pipeLazyAsync([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], Computation.fromReadonlyArray(m), m.pairwise(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([
    tuple(0, 1),
    tuple(1, 2),
    tuple(2, 3),
    tuple(3, 4),
    tuple(4, 5),
    tuple(5, 6),
    tuple(6, 7),
    tuple(7, 8),
    tuple(8, 9),
], { valuesEquality: arrayEquality() }))), testAsync("when the input only provides 1 value", pipeLazyAsync([0], Computation.fromReadonlyArray(m), m.pairwise(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([], {
    valuesEquality: arrayEquality(),
})))), describe("scan", testAsync("sums all the values in the array emitting intermediate values.", pipeLazyAsync([1, 1, 1], Computation.fromReadonlyArray(m), m.scan((a, b) => a + b, returns(0)), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("throws when the scan function throws", async () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.scan((scanner), returns(0)), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
}), testAsync("throws when the initial value function throws", async () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.scan((a, b) => a + b, initialValue), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("skipFirst", testAsync("with default count", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.skipFirst(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([2, 3]))), testAsync("when skipped source has additional elements", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.skipFirst({ count: 2 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([3]))), testAsync("when all elements are skipped", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.skipFirst({ count: 4 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([])))), describe("takeFirst", testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeFirst(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1]))), testAsync("when taking fewer than the total number of elements in the source", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeFirst({ count: 3 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when taking more than all the items produced by the source", pipeLazyAsync([1, 2], Computation.fromReadonlyArray(m), m.takeFirst({ count: 3 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2]))), testAsync("from iterable source", pipeLazyAsync([1, 2, 3, 4], Computation.fromReadonlyArray(m), m.takeFirst({ count: 2 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2]))), testAsync("when source is empty", pipeLazyAsync(Computation.empty(m)(), m.takeFirst({ count: 3 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("with default count", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.takeFirst(), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1]))), testAsync("when count is 0", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.takeFirst({ count: 0 }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([])))), describe("takeWhile", testAsync("exclusive", async () => {
    await pipeAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeWhile(lessThan(4)), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]));
    await pipeAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.takeWhile(alwaysTrue), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]));
    await pipeAsync(Computation.empty(m)(), m.takeWhile(alwaysTrue), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([]));
}), testAsync("inclusive", pipeLazyAsync([1, 2, 3, 4, 5, 6], Computation.fromReadonlyArray(m), m.takeWhile(lessThan(4), { inclusive: true }), m.toProducer(), ReactiveSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("when predicate throws", async () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.takeWhile(predicate), m.toProducer(), ReactiveSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})));
export default ComputationModuleTests;

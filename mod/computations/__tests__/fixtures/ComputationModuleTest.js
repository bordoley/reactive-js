/// <reference types="./ComputationModuleTest.d.ts" />

import { describe, expectArrayEquals, expectPromiseToThrow, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { arrayEquality, bindMethod, greaterThan, pipe, pipeAsync, pipeLazy, pipeLazyAsync, returns, tuple, } from "../../../functions.js";
import { increment } from "../../../math.js";
const ComputationModuleTests = (m) => describe("ComputationModule", describe("distinctUntilChanged", testAsync("when source has duplicates in order", pipeLazyAsync(bindMethod([1, 2, 2, 2, 2, 3, 3, 3, 4], Symbol.iterator), m.gen, m.distinctUntilChanged(), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("when source is empty", pipeLazyAsync(bindMethod([], Symbol.iterator), m.gen, m.distinctUntilChanged(), m.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("when equality operator throws", async () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    await pipe(pipeLazy(bindMethod([1, 1], Symbol.iterator), m.gen, m.distinctUntilChanged({ equality }), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
}), testAsync("with custom equality functions", pipeLazyAsync(bindMethod([1, 2, 2, 2, 2, 3, 3, 3, 4], Symbol.iterator), m.gen, m.distinctUntilChanged({
    equality: () => true,
}), m.toReadonlyArrayAsync(), expectArrayEquals([1])))), describe("gen", testAsync("iterating an array iterator", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.gen), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the iterator throws", pipeLazy(function* () {
    throw new Error();
}, (m.gen), m.toReadonlyArrayAsync(), expectPromiseToThrow))), describe("genPure"), describe("keep", testAsync("keeps only values greater than 5", pipeLazyAsync(bindMethod([4, 8, 10, 7], Symbol.iterator), m.gen, m.keep(greaterThan(5)), m.toReadonlyArrayAsync(), expectArrayEquals([8, 10, 7]))), testAsync("when predicate throws", async () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy(bindMethod([1, 1], Symbol.iterator), m.gen, m.keep(predicate), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("map", testAsync("maps every value", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.gen), m.map(increment), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("when selector throws", async () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy(bindMethod([1, 2, 3], Symbol.iterator), m.gen, m.map(selector), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("pairwise", testAsync("when there are more than one input value", pipeLazyAsync(bindMethod([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], Symbol.iterator), m.gen, m.pairwise(), m.toReadonlyArrayAsync(), expectArrayEquals([
    tuple(0, 1),
    tuple(1, 2),
    tuple(2, 3),
    tuple(3, 4),
    tuple(4, 5),
    tuple(5, 6),
    tuple(6, 7),
    tuple(7, 8),
    tuple(8, 9),
], { valuesEquality: arrayEquality() }))), testAsync("when the input only provides 1 value", pipeLazyAsync(bindMethod([0], Symbol.iterator), m.gen, m.pairwise(), m.toReadonlyArrayAsync(), expectArrayEquals([], {
    valuesEquality: arrayEquality(),
})))), describe("scan", testAsync("sums all the values in the array emitting intermediate values.", pipeLazyAsync(bindMethod([1, 1, 1], Symbol.iterator), m.gen, m.scan((a, b) => a + b, returns(0)), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("throws when the scan function throws", async () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    await pipeAsync(pipeLazy(bindMethod([1, 1], Symbol.iterator), m.gen, m.scan(scanner, returns(0)), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
}), testAsync("throws when the initial value function throws", async () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    await pipeAsync(pipeLazy(bindMethod([1, 1], Symbol.iterator), m.gen, m.scan((a, b) => a + b, initialValue), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("skipFirst", testAsync("with default count", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), m.gen, m.skipFirst(), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3]))), testAsync("when skipped source has additional elements", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), m.gen, m.skipFirst({ count: 2 }), m.toReadonlyArrayAsync(), expectArrayEquals([3]))), testAsync("when all elements are skipped", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), m.gen, m.skipFirst({ count: 4 }), m.toReadonlyArrayAsync(), expectArrayEquals([])))));
export default ComputationModuleTests;

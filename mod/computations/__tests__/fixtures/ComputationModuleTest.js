/// <reference types="./ComputationModuleTest.d.ts" />

import { describe, expectArrayEquals, expectPromiseToThrow, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { bindMethod, greaterThan, pipe, pipeAsync, pipeLazy, pipeLazyAsync, } from "../../../functions.js";
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
})));
export default ComputationModuleTests;

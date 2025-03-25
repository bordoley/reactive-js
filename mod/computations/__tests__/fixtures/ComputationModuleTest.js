/// <reference types="./ComputationModuleTest.d.ts" />

import { describe, expectArrayEquals, expectPromiseToThrow, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { bindMethod, pipeAsync, pipeLazy, pipeLazyAsync, } from "../../../functions.js";
import { increment } from "../../../math.js";
const ComputationModuleTests = (m) => describe("ComputationModule", describe("gen", testAsync("iterating an array iterator", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.gen), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the iterator throws", pipeLazy(function* () {
    throw new Error();
}, (m.gen), m.toReadonlyArrayAsync(), expectPromiseToThrow))), describe("genPure"), describe("map", testAsync("maps every value", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.gen), m.map(increment), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("when selector throws", async () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy(bindMethod([1, 2, 3], Symbol.iterator), m.gen, m.map(selector), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})));
export default ComputationModuleTests;

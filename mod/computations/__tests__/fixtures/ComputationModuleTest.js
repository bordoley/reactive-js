/// <reference types="./ComputationModuleTest.d.ts" />

import { describe, expectArrayEquals, expectPromiseToThrow, testAsync, } from "../../../__internal__/testing.js";
import { bindMethod, pipeLazy, pipeLazyAsync } from "../../../functions.js";
const ComputationModuleTests = (m) => describe("ComputationModule", describe("gen", testAsync("iterating an array iterator", pipeLazyAsync(bindMethod([1, 2, 3], Symbol.iterator), (m.gen), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the iterator throws", pipeLazy(function* () {
    throw new Error();
}, (m.gen), m.toReadonlyArrayAsync(), expectPromiseToThrow))), describe("genPure"));
export default ComputationModuleTests;

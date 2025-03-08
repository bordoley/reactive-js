/// <reference types="./ComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import { alwaysTrue, greaterThan, identity, increment, pipeAsync, pipeLazy, pipeLazyAsync, } from "../../../functions.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";
const ComputationModuleTests = (m, computationType) => describe("ComputationModule", describe("keep", StatelessComputationOperatorTests(computationType, m.keep(alwaysTrue)), testAsync("keeps only values greater than 5", pipeLazyAsync([4, 8, 10, 7], m.fromReadonlyArray(), m.keep(greaterThan(5)), m.toReadonlyArrayAsync(), expectArrayEquals([8, 10, 7]))), testAsync("when predicate throws", async () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], m.fromReadonlyArray(), m.keep(predicate), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("map", StatelessComputationOperatorTests(computationType, m.map(identity)), testAsync("maps every value", pipeLazyAsync([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArrayAsync(), expectArrayEquals([2, 3, 4]))), testAsync("when selector throws", async () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    await pipeAsync(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(selector), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})));
export default ComputationModuleTests;

/// <reference types="./ComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectToThrowError, test, } from "../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import { alwaysTrue, greaterThan, identity, increment, pipe, pipeLazy, } from "../../../functions.js";
import StatelessComputationOperatorTests from "./operators/StatelessComputationOperatorTests.js";
const ComputationModuleTests = (m, computationType) => describe("ComputationModule", describe("keep", StatelessComputationOperatorTests(computationType, m.keep(alwaysTrue)), test("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], m.fromReadonlyArray(), m.keep(greaterThan(5)), m.toReadonlyArray(), expectArrayEquals([8, 10, 7]))), test("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.keep(predicate), m.toReadonlyArray()), expectToThrowError(err));
})), describe("map", StatelessComputationOperatorTests(computationType, m.map(identity)), test("maps every value", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), test("when selector throws", () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(selector), m.toReadonlyArray()), expectToThrowError(err));
})));
export default ComputationModuleTests;

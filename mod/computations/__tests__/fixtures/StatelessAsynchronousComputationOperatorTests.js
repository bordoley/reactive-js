/// <reference types="./StatelessAsynchronousComputationOperatorTests.d.ts" />

import { describe, expectFalse, test, } from "../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import { compose, isSome, pipe, pipeSomeLazy, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";
import * as ComputationExpect from "./ComputationExpect.js";
const StatelessAsynchronousComputationOperatorTests = (computationType, operator) => {
    return describe("StatelessAsynchronousComputationOperatorTests", ...pipe([
        computationType[Computation_pureSynchronousOfT] &&
            test("with PureSynchronous input, returns PureSynchronous output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], operator, ComputationExpect.isPureDeferred, compose(Computation.isPureSynchronous, expectFalse))),
        computationType[Computation_synchronousWithSideEffectsOfT] &&
            test("with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], operator, ComputationExpect.isDeferredWithSideEffects, compose(Computation.isSynchronousWithSideEffects, expectFalse))),
        computationType[Computation_pureDeferredOfT] &&
            test("with PureDeferred input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], operator, ComputationExpect.isPureDeferred)),
        computationType[Computation_deferredWithSideEffectsOfT] &&
            test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], operator, ComputationExpect.isDeferredWithSideEffects)),
        computationType[Computation_multicastOfT] &&
            test("with Multicasted input, returns Multicasted output", pipeSomeLazy(computationType[Computation_multicastOfT], operator, ComputationExpect.isMulticasted)),
    ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray()));
};
export default StatelessAsynchronousComputationOperatorTests;

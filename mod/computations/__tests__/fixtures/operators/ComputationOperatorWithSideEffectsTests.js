/// <reference types="./ComputationOperatorWithSideEffectsTests.d.ts" />

import { describe, test } from "../../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";
const ComputationOperatorWithSideEffectsTests = (computationType, operator) => {
    return describe("ComputationOperatorWithSideEffects", computationType[Computation_pureSynchronousOfT] &&
        test("with PureSynchronous input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], operator, ComputationExpect.isSynchronousWithSideEffects)), computationType[Computation_synchronousWithSideEffectsOfT] &&
        test("with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], operator, ComputationExpect.isSynchronousWithSideEffects)), computationType[Computation_pureDeferredOfT] &&
        test("with PureDeferred input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], operator, ComputationExpect.isDeferredWithSideEffects)), computationType[Computation_deferredWithSideEffectsOfT] &&
        test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], operator, ComputationExpect.isDeferredWithSideEffects)), computationType[Computation_multicastOfT] &&
        test("with Multicasted input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_multicastOfT], operator, ComputationExpect.isDeferredWithSideEffects)));
};
export default ComputationOperatorWithSideEffectsTests;

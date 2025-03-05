/// <reference types="./ComputationOperatorWithSideEffectsTests.d.ts" />

import { describe, test } from "../../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../../computations.js";
import { isSome, pipe, pipeSomeLazy } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";
import * as Iterable from "../../../Iterable.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";
const ComputationOperatorWithSideEffectsTests = (computationType, operator) => {
    return describe("ComputationOperatorWithSideEffects", ...pipe([
        computationType[Computation_pureSynchronousOfT] &&
            test("with PureSynchronous input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], operator, ComputationExpect.isSynchronousWithSideEffects)),
        computationType[Computation_synchronousWithSideEffectsOfT] &&
            test("with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], operator, ComputationExpect.isSynchronousWithSideEffects)),
        computationType[Computation_pureDeferredOfT] &&
            test("with PureDeferred input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], operator, ComputationExpect.isDeferredWithSideEffects)),
        computationType[Computation_deferredWithSideEffectsOfT] &&
            test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], operator, ComputationExpect.isDeferredWithSideEffects)),
        computationType[Computation_multicastOfT] &&
            test("with Multicasted input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_multicastOfT], operator, ComputationExpect.isDeferredWithSideEffects)),
    ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray()));
};
export default ComputationOperatorWithSideEffectsTests;

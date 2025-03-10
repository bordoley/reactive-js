/// <reference types="./StatelessAsynchronousComputationOperatorTests.d.ts" />

import { describe, test } from "../../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../../computations.js";
import { pipeSomeLazy } from "../../../../functions.js";
import * as ComputationExpect from "../helpers/ComputationExpect.js";
const StatelessAsynchronousComputationOperatorTests = (computationType, operator) => describe("StatelessAsynchronousComputationOperatorTests", computationType[Computation_pureSynchronousOfT] &&
    test("with PureSynchronous input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], ComputationExpect.isPureSynchronous, operator, ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous)), computationType[Computation_synchronousWithSideEffectsOfT] &&
    test("with SynchronousWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], ComputationExpect.isSynchronousWithSideEffects, operator, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)), computationType[Computation_pureDeferredOfT] &&
    test("with PureDeferred input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous, operator, ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous)), computationType[Computation_deferredWithSideEffectsOfT] &&
    test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous, operator, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)), computationType[Computation_multicastOfT] &&
    test("with Multicasted input, returns Multicasted output", pipeSomeLazy(computationType[Computation_multicastOfT], ComputationExpect.isMulticasted, operator, ComputationExpect.isMulticastedAndNotDisposable)));
export default StatelessAsynchronousComputationOperatorTests;

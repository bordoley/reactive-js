/// <reference types="./HigherOrderComputationOperatorTests.d.ts" />

import { describe, test, } from "../../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../../computations.js";
import { isSome, pipe, pipeSomeLazy } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Iterable from "../../Iterable.js";
import * as ComputationExpect from "./ComputationExpect.js";
const HigherOrderComputationOperatorTests = (computationType, operatorPureSynchronousInner, operatorSynchronousWithSideEffectsInner, operatorPureDeferredInner, operatorDeferredWithSideEffectsInner) => describe("HigherOrderComputationOperator", ...pipe([
    computationType[Computation_pureSynchronousOfT] &&
        operatorPureSynchronousInner &&
        describe("with PureSynchronousInner", ...pipe([
            computationType[Computation_pureSynchronousOfT] &&
                test("with PureSynchronous input, returns PureSynchronous output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], ComputationExpect.isPureSynchronous, operatorPureSynchronousInner, ComputationExpect.isPureSynchronous)),
            computationType[Computation_synchronousWithSideEffectsOfT] &&
                test("with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], ComputationExpect.isSynchronousWithSideEffects, operatorPureSynchronousInner, ComputationExpect.isSynchronousWithSideEffects)),
            computationType[Computation_pureDeferredOfT] &&
                test("with PureDeferred input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous, operatorPureSynchronousInner, ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous)),
            computationType[Computation_deferredWithSideEffectsOfT] &&
                test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous, operatorPureSynchronousInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
        ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray())),
    computationType[Computation_synchronousWithSideEffectsOfT] &&
        operatorSynchronousWithSideEffectsInner &&
        describe("with SynchronousWithSideEffectsInner", ...pipe([
            computationType[Computation_pureSynchronousOfT] &&
                test("with PureSynchronous input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], ComputationExpect.isPureSynchronous, operatorSynchronousWithSideEffectsInner, ComputationExpect.isSynchronousWithSideEffects)),
            computationType[Computation_synchronousWithSideEffectsOfT] &&
                test("with SynchronousWithSideEffects input, returns SynchronousWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], ComputationExpect.isSynchronousWithSideEffects, operatorSynchronousWithSideEffectsInner, ComputationExpect.isSynchronousWithSideEffects)),
            computationType[Computation_pureDeferredOfT] &&
                test("with PureDeferred input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous, operatorSynchronousWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
            computationType[Computation_deferredWithSideEffectsOfT] &&
                test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous, operatorSynchronousWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
        ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray())),
    computationType[Computation_pureDeferredOfT] &&
        operatorPureDeferredInner &&
        describe("with PureDeferredInner", ...pipe([
            computationType[Computation_pureSynchronousOfT] &&
                test("with PureSynchronous input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], ComputationExpect.isPureSynchronous, operatorPureDeferredInner, ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous)),
            computationType[Computation_synchronousWithSideEffectsOfT] &&
                test("with SynchronousWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], ComputationExpect.isSynchronousWithSideEffects, operatorPureDeferredInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
            computationType[Computation_pureDeferredOfT] &&
                test("with PureDeferred input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous, operatorPureDeferredInner, ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous)),
            computationType[Computation_deferredWithSideEffectsOfT] &&
                test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous, operatorPureDeferredInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
        ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray())),
    computationType[Computation_deferredWithSideEffectsOfT] &&
        operatorDeferredWithSideEffectsInner &&
        describe("with DeferredWithSideEffectsInner", ...pipe([
            computationType[Computation_pureSynchronousOfT] &&
                test("with PureSynchronous input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_pureSynchronousOfT], ComputationExpect.isPureSynchronous, operatorDeferredWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
            computationType[Computation_synchronousWithSideEffectsOfT] &&
                test("with SynchronousWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_synchronousWithSideEffectsOfT], ComputationExpect.isSynchronousWithSideEffects, operatorDeferredWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
            computationType[Computation_pureDeferredOfT] &&
                test("with PureDeferred input, returns PureDeferred output", pipeSomeLazy(computationType[Computation_pureDeferredOfT], ComputationExpect.isPureDeferred, ComputationExpect.isNotSynchronous, operatorDeferredWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
            computationType[Computation_deferredWithSideEffectsOfT] &&
                test("with DeferredWithSideEffects input, returns DeferredWithSideEffects output", pipeSomeLazy(computationType[Computation_deferredWithSideEffectsOfT], ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous, operatorDeferredWithSideEffectsInner, ComputationExpect.isDeferredWithSideEffects, ComputationExpect.isNotSynchronous)),
        ], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray())),
], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray()));
export default HigherOrderComputationOperatorTests;

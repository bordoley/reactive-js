/// <reference types="./ComputationTest.d.ts" />

import { test } from "../../../../__internal__/testing.js";
import { pipeLazy } from "../../../../functions.js";
import * as ComputationExpect from "./ComputationExpect.js";
export const isPureSynchronous = (obs) => test("is PureSynchronousComputationLike", pipeLazy(obs, ComputationExpect.isPureSynchronous));
export const isSynchronousWithSideEffects = (obs) => test("is SynchronousComputationWithSideEffectsLike", pipeLazy(obs, ComputationExpect.isSynchronousWithSideEffects));
export const isDeferredWithSideEffects = (obs) => test("is DeferredComputationWithSideEffectsLike", pipeLazy(obs, ComputationExpect.isDeferredWithSideEffects));
export const isPureDeferred = (obs) => test("is PureDeferredComputationLike", pipeLazy(obs, ComputationExpect.isPureDeferred));
export const isMulticasted = (obs) => test("is MulticastComputationLike", pipeLazy(obs, ComputationExpect.isMulticasted));

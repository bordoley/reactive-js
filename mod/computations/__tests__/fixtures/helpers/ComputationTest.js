/// <reference types="./ComputationTest.d.ts" />

import { test } from "../../../../__internal__/testing.js";
import { pipeLazy } from "../../../../functions.js";
import * as ComputationExpect from "./ComputationExpect.js";
export const isPureSynchronous = (obs, description) => test("is PureSynchronousComputationLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isPureSynchronous));
export const isSynchronousWithSideEffects = (obs, description) => test("is SynchronousComputationWithSideEffectsLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isSynchronousWithSideEffects));
export const isDeferredWithSideEffects = (obs, description) => test("is DeferredComputationWithSideEffectsLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isDeferredWithSideEffects));
export const isPureDeferred = (obs, description) => test("is PureDeferredComputationLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isPureDeferred));
export const isMulticasted = (obs, description) => test("is MulticastComputationLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isMulticasted));
export const isMulticastedAndDisposable = (obs, description) => test("is MulticastComputationLike & DisposableLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isMulticastedAndDisposable));
export const isMulticastedAndNotDisposable = (obs, description) => test("is MulticastComputationLike & !DisposableLike" + (description ?? ""), pipeLazy(obs, ComputationExpect.isMulticastedAndNotDisposable));

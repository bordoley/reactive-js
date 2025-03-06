import { test } from "../../../../__internal__/testing.js";
import {
  DeferredComputationWithSideEffectsLike,
  MulticastComputationLike,
  PureDeferredComputationLike,
  PureSynchronousComputationLike,
  SynchronousComputationWithSideEffectsLike,
} from "../../../../computations.js";
import { pipeLazy } from "../../../../functions.js";
import * as ComputationExpect from "./ComputationExpect.js";

export const isPureSynchronous = (
  obs: PureSynchronousComputationLike,
  description?: string,
) =>
  test(
    "is PureSynchronousComputationLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isPureSynchronous),
  );

export const isSynchronousWithSideEffects = (
  obs: SynchronousComputationWithSideEffectsLike,
  description?: string,
) =>
  test(
    "is SynchronousComputationWithSideEffectsLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isSynchronousWithSideEffects),
  );

export const isDeferredWithSideEffects = (
  obs: DeferredComputationWithSideEffectsLike,
  description?: string,
) =>
  test(
    "is DeferredComputationWithSideEffectsLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isDeferredWithSideEffects),
  );

export const isPureDeferred = (
  obs: PureDeferredComputationLike,
  description?: string,
) =>
  test(
    "is PureDeferredComputationLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isPureDeferred),
  );

export const isMulticasted = (
  obs: MulticastComputationLike,
  description?: string,
) =>
  test(
    "is MulticastComputationLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isMulticasted),
  );

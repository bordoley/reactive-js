import { test } from "../../../__internal__/testing.js";
import {
  DeferredComputationWithSideEffectsLike,
  MulticastComputationLike,
  PureDeferredComputationLike,
  PureSynchronousComputationLike,
  SynchronousComputationWithSideEffectsLike,
} from "../../../computations.js";
import { pipeLazy } from "../../../functions.js";
import * as ComputationExpect from "./ComputationExpect.js";

export const isPureSynchronous = (obs: PureSynchronousComputationLike) =>
  test(
    "is PureSynchronousComputationLike",
    pipeLazy(obs, ComputationExpect.isPureSynchronous),
  );

export const isSynchronousWithSideEffects = (
  obs: SynchronousComputationWithSideEffectsLike,
) =>
  test(
    "is SynchronousComputationWithSideEffectsLike",
    pipeLazy(obs, ComputationExpect.isSynchronousWithSideEffects),
  );

export const isDeferredWithSideEffects = (
  obs: DeferredComputationWithSideEffectsLike,
) =>
  test(
    "is DeferredComputationWithSideEffectsLike",
    pipeLazy(obs, ComputationExpect.isDeferredWithSideEffects),
  );

export const isPureDeferred = (obs: PureDeferredComputationLike) =>
  test(
    "is PureDeferredComputationLike",
    pipeLazy(obs, ComputationExpect.isPureDeferred),
  );

export const isMulticasted = (obs: MulticastComputationLike) =>
  test(
    "is MulticastComputationLike",
    pipeLazy(obs, ComputationExpect.isMulticasted),
  );

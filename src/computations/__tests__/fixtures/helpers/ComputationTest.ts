import { test } from "../../../../__internal__/testing.js";
import {
  ComputationLike,
  DeferredComputationWithSideEffectsLike,
  MulticastComputationLike,
  PureDeferredComputationLike,
} from "../../../../computations.js";
import { pipeLazy } from "../../../../functions.js";
import { DisposableLike } from "../../../../utils.js";
import * as ComputationExpect from "./ComputationExpect.js";

export const isPureSynchronous = (obs: ComputationLike, description?: string) =>
  test(
    "is PureSynchronousComputationLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isPureSynchronous),
  );

export const isSynchronousWithSideEffects = (
  obs: ComputationLike,
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

export const isMulticastedAndDisposable = (
  obs: MulticastComputationLike & DisposableLike,
  description?: string,
) =>
  test(
    "is MulticastComputationLike & DisposableLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isMulticastedAndDisposable),
  );

export const isMulticastedAndNotDisposable = (
  obs: MulticastComputationLike,
  description?: string,
) =>
  test(
    "is MulticastComputationLike & !DisposableLike" + (description ?? ""),
    pipeLazy(obs, ComputationExpect.isMulticastedAndNotDisposable),
  );

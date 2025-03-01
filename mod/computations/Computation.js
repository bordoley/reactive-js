/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { increment, pickUnsafe, returns } from "../functions.js";
export const areAllDeferred = (computations) => computations.every(isDeferred);
export const areAllInteractive = (computations) => computations.every(isInteractive);
export const areAllMulticasted = (computations) => computations.every(isMulticasted);
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const hasSideEffects = (computation) => !(computation[ComputationLike_isPure] ?? true);
export const isDeferred = (computation) => computation[ComputationLike_isDeferred] ?? true;
export const isDeferredWithSideEffects = (computation) => (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const isInteractive = (computation) => computation[ComputationLike_isInteractive] ?? true;
export const isMulticasted = (computation) => !(computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isPure] ?? true) &&
    !(computation[ComputationLike_isSynchronous] ?? true);
export const isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export const isPureDeferred = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isPureSynchronous = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isSynchronous] ?? true);
export const isReactive = (computation) => !(computation[ComputationLike_isInteractive] ?? true);
export const isSynchronous = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isSynchronousReactive = (computation) => (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isInteractive] ?? true) &&
    (computation[ComputationLike_isSynchronous] ?? true);
export const isSynchronousWithSideEffects = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const keepType = ((keep) => (predicate) => keep(predicate));
export const mapTo = (map) => (v) => map(returns(v));
export const pick = ((map) => (...keys) => map(pickUnsafe(...keys)));
export const sequence = (generate) => (start) => generate(increment, returns(start - 1));

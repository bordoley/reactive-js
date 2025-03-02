/// <reference types="./computations.d.ts" />

export const ComputationLike_isPure = Symbol("ComputationLike_isPure");
export const ComputationLike_isDeferred = Symbol("ComputationLike_isDeferred");
export const ComputationLike_isSynchronous = Symbol("ComputationLike_isSynchronous");
export const ComputationLike_isInteractive = Symbol("ComputationLike_isInteractive");
export const Computation_T = Symbol("Computation_T");
export const Computation_ofT = Symbol("Computation_ofT");
export const Computation_pureOfT = Symbol("Computation_pureOfT");
export const Computation_withSideEffectsOfT = Symbol("Computation_withSideEffectsOfT");
export const SinkLike_next = Symbol("SinkLike_next");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isComplete = Symbol("SinkLike_isComplete");
export const RunnableLike_eval = Symbol("RunnableLike_eval");
export const ComputationWithSideEffectsType = {
    [ComputationLike_isPure]: false,
};
export const PureSynchronousComputationType = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
};
export const SynchronousComputationWithSideEffectsType = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
};
export const PureDeferredComputationType = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
};
export const DeferredComputationWithSideEffectsType = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
};

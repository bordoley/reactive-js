/// <reference types="./computations.d.ts" />

export const ComputationLike_isPure = Symbol("ComputationLike_isPure");
export const ComputationLike_isDeferred = Symbol("ComputationLike_isDeferred");
export const ComputationLike_isSynchronous = Symbol("ComputationLike_isSynchronous");
export const Computation_T = Symbol("Computation_T");
export const Computation_baseOfT = Symbol("Computation_baseOfT");
export const Computation_pureDeferredOfT = Symbol("Computation_pureDeferredOfT");
export const Computation_deferredWithSideEffectsOfT = Symbol("Computation_deferredWithSideEffectsOfT");
export const Computation_pureSynchronousOfT = Symbol("Computation_pureSynchronousOfT");
export const Computation_synchronousWithSideEffectsOfT = Symbol("Computation_synchronousWithSideEffectsOfT");
export const Computation_multicastOfT = Symbol("Computation_multicastOfT");
const ComputationModuleLike_computationType = Symbol("ComputationModuleLike_tComputation");
export const RunnableLike_eval = Symbol("RunnableLike_eval");
export const PureSynchronousDeferredComputation = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
};
export const PureSynchronousNonDeferredComputation = {
    [ComputationLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
};
export const SynchronousDeferredComputationWithSideEffects = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
};
export const SynchronousNonDeferredComputationWithSideEffects = {
    [ComputationLike_isDeferred]: false,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
};
export const PureDeferredComputation = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
};
export const DeferredComputationWithSideEffects = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
};
export const MulticastComputation = {
    [ComputationLike_isDeferred]: false,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
};
export const EventSourceLike_addEventListener = Symbol("EventSourceLike_addEventListener");
export const ProducerLike_consume = Symbol("ProducerLike_consume");
export const StoreLike_value = Symbol("StoreLike_value");
export const ObservableLike_observe = Symbol("ObservableLike_observe");
export const StreamableLike_stream = Symbol("StreamableLike_stream");

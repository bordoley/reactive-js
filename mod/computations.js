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
export const SinkLike_next = Symbol("SinkLike_next");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isComplete = Symbol("SinkLike_isComplete");
export const RunnableLike_eval = Symbol("RunnableLike_eval");
export const PureSynchronousComputation = {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
};
export const SynchronousComputationWithSideEffects = {
    [ComputationLike_isDeferred]: true,
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
export const EventListenerLike_notify = Symbol("EventListenerLike_notify");
export const EventSourceLike_addEventListener = Symbol("EventSourceLike_addEventListener");
export const StoreLike_value = Symbol("StoreLike_value");
export const DispatcherState_ready = Symbol("DispatcherState_ready");
export const DispatcherState_capacityExceeded = Symbol("DispatcherState_capacityExceeded");
export const DispatcherState_completed = Symbol("DispatcherState_completed");
export const DispatcherLike_complete = Symbol("DispatcherLike_complete");
export const DispatcherLike_state = Symbol("DispatcherLike_state");
export const ObserverLike_notify = Symbol("ObserverLike_notify");
export const ObservableLike_observe = Symbol("ObservableLike_observe");
export const FlowableLike_flow = Symbol("FlowableLike_flow");
export const StreamableLike_stream = Symbol("StreamableLike_stream");

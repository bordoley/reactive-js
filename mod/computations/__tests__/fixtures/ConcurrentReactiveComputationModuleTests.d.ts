import { ComputationOf, ComputationType, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentReactiveComputationModule, DeferredComputationWithSideEffectsOf, MulticastComputationOf, PureDeferredComputationOf, PureSynchronousComputationOf, SynchronousComputationWithSideEffectsOf } from "../../../computations.js";
import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputation extends ComputationType>(m: ConcurrentReactiveComputationModule<TComputation> & {
    fromObservable: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, ComputationOf<TComputation, T>>;
    toObservable: <T>() => Function1<ComputationOf<TComputation, T>, ObservableLike<T>>;
}, computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputation, unknown>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputation, unknown>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputation, unknown>;
}) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;

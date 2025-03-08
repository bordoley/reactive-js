import { ComputationModule, ComputationOf, ComputationType, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationWithSideEffectsOf, MulticastComputationOf, PureDeferredComputationOf, PureSynchronousComputationOf, SynchronousComputationWithSideEffectsOf } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const ComputationModuleTests: <TComputation extends ComputationType>(m: ComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<TComputation, T>>;
    toReadonlyArrayAsync: <T>() => Function1<ComputationOf<TComputation, T>, Promise<ReadonlyArray<T>>>;
}, computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputation, unknown>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputation, unknown>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputation, unknown>;
}) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

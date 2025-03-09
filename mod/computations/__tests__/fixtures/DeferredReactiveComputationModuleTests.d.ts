import { ComputationType, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationModule, DeferredComputationWithSideEffectsOf, DeferredReactiveComputationModule, MulticastComputationOf, PureDeferredComputationOf, PureSynchronousComputationOf, SynchronousComputationModule, SynchronousComputationWithSideEffectsOf } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputation extends ComputationType>(m: DeferredComputationModule<TComputation> & DeferredReactiveComputationModule<TComputation> & SynchronousComputationModule<TComputation>, computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputation, unknown>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputation, unknown>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputation, unknown>;
}) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;

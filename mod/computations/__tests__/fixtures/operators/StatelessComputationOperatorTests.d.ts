import { ComputationType, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationWithSideEffectsOf, MulticastComputationOf, PureDeferredComputationOf, PureSynchronousComputationOf, StatelessComputationOperator, SynchronousComputationWithSideEffectsOf } from "../../../../computations.js";
declare const StatelessComputationOperatorTests: <TComputation extends ComputationType>(computationType: {
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousComputationOf<TComputation, unknown>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredComputationOf<TComputation, unknown>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredComputationWithSideEffectsOf<TComputation, unknown>;
    readonly [Computation_multicastOfT]?: MulticastComputationOf<TComputation, unknown>;
}, operator: StatelessComputationOperator<TComputation, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatelessComputationOperatorTests;

import { ComputationType, ComputationTypeOf, StatefulSynchronousComputationOperator } from "../../../../computations.js";
declare const StatefulSynchronousComputationOperatorTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: StatefulSynchronousComputationOperator<TComputation, any, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatefulSynchronousComputationOperatorTests;

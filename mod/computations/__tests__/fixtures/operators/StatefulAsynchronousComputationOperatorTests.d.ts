import { ComputationType, ComputationTypeOf, StatefulAsynchronousComputationOperator } from "../../../../computations.js";
declare const StatefulAsynchronousComputationOperatorTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: StatefulAsynchronousComputationOperator<TComputation, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatefulAsynchronousComputationOperatorTests;

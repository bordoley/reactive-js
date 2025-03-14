import { ComputationType, ComputationTypeOf, StatelessAsynchronousComputationOperator } from "../../../../computations.js";
declare const StatelessAsynchronousComputationOperatorTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: StatelessAsynchronousComputationOperator<TComputation, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatelessAsynchronousComputationOperatorTests;

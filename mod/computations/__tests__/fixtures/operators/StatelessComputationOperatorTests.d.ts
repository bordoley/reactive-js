import { ComputationType, ComputationTypeOf, StatelessComputationOperator } from "../../../../computations.js";
declare const StatelessComputationOperatorTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: StatelessComputationOperator<TComputation, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatelessComputationOperatorTests;

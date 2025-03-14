import { ComputationType, ComputationTypeOf, StatelessAsynchronousComputationOperator } from "../../../../computations.js";
declare const StatelessAsynchronousComputationOperatorTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: StatelessAsynchronousComputationOperator<TComputationType, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatelessAsynchronousComputationOperatorTests;

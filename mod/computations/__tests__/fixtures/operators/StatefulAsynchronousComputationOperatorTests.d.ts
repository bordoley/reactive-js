import { ComputationType, ComputationTypeOf, StatefulAsynchronousComputationOperator } from "../../../../computations.js";
declare const StatefulAsynchronousComputationOperatorTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: StatefulAsynchronousComputationOperator<TComputationType, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatefulAsynchronousComputationOperatorTests;

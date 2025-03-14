import { ComputationType, ComputationTypeOf, StatefulSynchronousComputationOperator } from "../../../../computations.js";
declare const StatefulSynchronousComputationOperatorTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: StatefulSynchronousComputationOperator<TComputationType, any, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatefulSynchronousComputationOperatorTests;

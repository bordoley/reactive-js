import { ComputationType, ComputationTypeOf, StatelessComputationOperator } from "../../../../computations.js";
declare const StatelessComputationOperatorTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: StatelessComputationOperator<TComputationType, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default StatelessComputationOperatorTests;

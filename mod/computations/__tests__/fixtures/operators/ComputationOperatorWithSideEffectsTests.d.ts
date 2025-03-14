import { ComputationOperatorWithSideEffects, ComputationType, ComputationTypeOf } from "../../../../computations.js";
declare const ComputationOperatorWithSideEffectsTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: ComputationOperatorWithSideEffects<TComputationType, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default ComputationOperatorWithSideEffectsTests;

import { ComputationOperatorWithSideEffects, ComputationType, ComputationTypeOf } from "../../../../computations.js";
declare const ComputationOperatorWithSideEffectsTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: ComputationOperatorWithSideEffects<TComputation, unknown, unknown>) => import("../../../../__internal__/testing.js").Describe;
export default ComputationOperatorWithSideEffectsTests;

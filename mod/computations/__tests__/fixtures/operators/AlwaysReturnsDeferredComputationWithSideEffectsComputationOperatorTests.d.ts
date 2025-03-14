import { ComputationOf, ComputationType, ComputationTypeOf, DeferredComputationWithSideEffectsOf } from "../../../../computations.js";
import { Function1 } from "../../../../functions.js";
declare const AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests: <TComputation extends ComputationType>(computationType: ComputationTypeOf<TComputation>, operator: Function1<ComputationOf<TComputation, any>, DeferredComputationWithSideEffectsOf<TComputation, unknown>>) => import("../../../../__internal__/testing.js").Describe;
export default AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests;

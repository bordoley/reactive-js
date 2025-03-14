import { ComputationOf, ComputationType, ComputationTypeOf, DeferredComputationWithSideEffectsOf } from "../../../../computations.js";
import { Function1 } from "../../../../functions.js";
declare const AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests: <TComputationType extends ComputationType>(computations: ComputationTypeOf<TComputationType>, operator: Function1<ComputationOf<TComputationType, any>, DeferredComputationWithSideEffectsOf<TComputationType, unknown>>) => import("../../../../__internal__/testing.js").Describe;
export default AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests;

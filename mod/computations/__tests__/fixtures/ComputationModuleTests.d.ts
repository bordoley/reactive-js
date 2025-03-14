import { ComputationModule, ComputationType, ComputationTypeOf } from "../../../computations.js";
declare const ComputationModuleTests: <TComputationType extends ComputationType>(m: ComputationModule<TComputationType>, computations: ComputationTypeOf<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

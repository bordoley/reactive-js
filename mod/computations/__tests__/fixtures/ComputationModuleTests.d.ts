import { ComputationModule, ComputationType, ComputationTypeOf } from "../../../computations.js";
declare const ComputationModuleTests: <TComputation extends ComputationType>(m: ComputationModule<TComputation>, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

import { ComputationModule, ComputationTypeLike } from "../../../computations.js";
declare const ComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

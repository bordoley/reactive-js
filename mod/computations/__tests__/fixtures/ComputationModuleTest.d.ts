import { ComputationModule, ComputationType } from "../../../computations.js";
declare const ComputationModuleTests: <TComputationType extends ComputationType>(m: ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

import { ComputationModule, ComputationTypeLike, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & SequentialComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;

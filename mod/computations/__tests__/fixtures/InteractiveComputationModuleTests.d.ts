import { ComputationModule, ComputationTypeLike, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & InteractiveComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;

import { ComputationModule, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputationModule extends ComputationModule & InteractiveComputationModule>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;

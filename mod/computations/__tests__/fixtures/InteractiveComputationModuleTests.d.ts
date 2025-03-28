import { ComputationModule, InteractiveComputationModule, PickComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputationModule extends ComputationModule & PickComputationModule<InteractiveComputationModule, "zip">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;

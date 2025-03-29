import { ComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputationModule extends ComputationModule & SynchronousComputationModule>(_m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

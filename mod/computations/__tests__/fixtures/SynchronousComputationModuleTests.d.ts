import { ComputationModule, ComputationType, SequentialComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputationType extends ComputationType>(m: SynchronousComputationModule<TComputationType> & SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

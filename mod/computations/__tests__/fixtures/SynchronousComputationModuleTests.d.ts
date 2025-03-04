import { ComputationType, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputation extends ComputationType>(m: SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

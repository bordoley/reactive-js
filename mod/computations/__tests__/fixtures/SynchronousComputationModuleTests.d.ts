import { Computation, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputation extends Computation>(m: SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

import { Computation, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputation extends Computation>(m: DeferredComputationModule<TComputation> & SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

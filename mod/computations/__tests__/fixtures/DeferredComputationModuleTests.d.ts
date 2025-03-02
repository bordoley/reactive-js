import { Computation, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <TComputation extends Computation>(m: DeferredComputationModule<TComputation> & SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;

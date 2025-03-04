import { Computation, DeferredReactiveComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputation extends Computation>(m: DeferredReactiveComputationModule<TComputation> & SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;

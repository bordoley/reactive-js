import { ComputationType, DeferredReactiveComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputation extends ComputationType>(m: DeferredReactiveComputationModule<TComputation> & SynchronousComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;

import { ComputationModule, ComputationType, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputation extends ComputationType>(m: SynchronousComputationModule<TComputation> & DeferredComputationModule<TComputation> & ComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

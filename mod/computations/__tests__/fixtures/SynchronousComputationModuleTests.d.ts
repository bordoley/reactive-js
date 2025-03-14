import { ComputationModule, ComputationType, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputationType extends ComputationType>(m: SynchronousComputationModule<TComputationType> & DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

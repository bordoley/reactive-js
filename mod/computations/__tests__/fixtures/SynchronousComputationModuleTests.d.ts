import { Computation, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <C extends Computation>(m: DeferredComputationModule<C> & SynchronousComputationModule<C>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

import { Computation, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <C extends Computation>(m: DeferredComputationModule<C> & SynchronousComputationModule<C>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;

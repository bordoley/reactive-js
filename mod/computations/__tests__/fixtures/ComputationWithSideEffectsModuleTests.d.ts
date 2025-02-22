import { Computation, ComputationWithSideEffectsModule, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const ComputationWithSideEffectsModuleTests: <C extends Computation>(m: ComputationWithSideEffectsModule<C> & DeferredComputationModule<C> & SynchronousComputationModule<C>) => import("../../../__internal__/testing.js").Describe;
export default ComputationWithSideEffectsModuleTests;

import { Computation, ComputationWithSideEffectsModule, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const ComputationWithSideEffectsModuleTests: <TComputation extends Computation>(m: DeferredComputationModule<TComputation> & SynchronousComputationModule<TComputation> & ComputationWithSideEffectsModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default ComputationWithSideEffectsModuleTests;

import { Computation, DeferredComputationModule, SynchronousComputationLike, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <Type extends SynchronousComputationLike, TComputation extends Computation>(m: DeferredComputationModule<Type, TComputation> & SynchronousComputationModule<Type, TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;

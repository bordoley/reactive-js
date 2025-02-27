import { Computation, ComputationLike, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <Type extends ComputationLike, C extends Computation<Type>>(m: DeferredComputationModule<Type, C> & SynchronousComputationModule<Type, C>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;

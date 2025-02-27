import { Computation, ComputationLike, ComputationWithSideEffectsLike, ComputationWithSideEffectsModule, DeferredComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const ComputationWithSideEffectsModuleTests: <Type extends ComputationLike, C extends Computation<Type>, TypeWithSideEffects extends ComputationWithSideEffectsLike & Type, CWithSideEffects extends Computation<TypeWithSideEffects> & C>(m: DeferredComputationModule<Type, C> & SynchronousComputationModule<Type, C> & ComputationWithSideEffectsModule<Type, C, TypeWithSideEffects, CWithSideEffects>) => import("../../../__internal__/testing.js").Describe;
export default ComputationWithSideEffectsModuleTests;

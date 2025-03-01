import { Computation, ComputationModule, ComputationOf, DeferredComputationLike, DeferredComputationModule, InteractiveComputationLike, InteractiveComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const InteractiveComputationModuleTests: <Type extends DeferredComputationLike & InteractiveComputationLike, TComputation extends Computation>(m: InteractiveComputationModule<Type, TComputation> & DeferredComputationModule<Type, TComputation> & ComputationModule<Type, TComputation> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<Type, TComputation, T>>;
    toReadonlyArray: <T>() => Function1<ComputationOf<Type, TComputation, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;

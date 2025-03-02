import { Computation, ComputationOf, DeferredComputationModule, InteractiveComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const InteractiveComputationModuleTests: <TComputation extends Computation>(m: InteractiveComputationModule<TComputation> & DeferredComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<TComputation, T>>;
    toReadonlyArray: <T>() => Function1<ComputationOf<TComputation, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;

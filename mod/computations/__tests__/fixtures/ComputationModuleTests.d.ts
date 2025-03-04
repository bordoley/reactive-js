import { Computation, ComputationBaseOf, ComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const ComputationModuleTests: <TComputation extends Computation>(m: ComputationModule<TComputation> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationBaseOf<TComputation, T>>;
    toReadonlyArray: <T>() => Function1<ComputationBaseOf<TComputation, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;

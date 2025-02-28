import { Computation, ComputationLike, ComputationOf, PureStatelessComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureStatelessComputationModuleTests: <Type extends ComputationLike, TComputation extends Computation<Type>>(m: PureStatelessComputationModule<Type, TComputation> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<Type, TComputation, T>>;
    toReadonlyArray: <T>() => Function1<ComputationOf<Type, TComputation, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default PureStatelessComputationModuleTests;

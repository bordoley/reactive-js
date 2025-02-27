import { Computation, ComputationLike, ComputationOf, PureStatelessComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureStatelessComputationModuleTests: <Type extends ComputationLike, C extends Computation<Type>>(m: PureStatelessComputationModule<Type, C> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<Type, C, T>>;
    toReadonlyArray: <T>() => Function1<ComputationOf<Type, C, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default PureStatelessComputationModuleTests;

import { Computation, ComputationOf, PureStatelessComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureStatelessComputationModuleTests: <C extends Computation>(m: PureStatelessComputationModule<C> & {
    fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<C, T>>;
    toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>;
}) => import("../../../__internal__/testing.js").Describe;
export default PureStatelessComputationModuleTests;

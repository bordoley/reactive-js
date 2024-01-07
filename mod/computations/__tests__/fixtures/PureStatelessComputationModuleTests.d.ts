import { Computation, ComputationOf, PureStatelessComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureStatelessComputationModuleTests: <C extends Computation>(m: PureStatelessComputationModule<C>, fromReadonlyArray: <T>() => Function1<readonly T[], ComputationOf<C, T>>, toReadonlyArray: <T_1>() => Function1<ComputationOf<C, T_1>, readonly T_1[]>) => import("../../../__internal__/testing.js").Describe;
export default PureStatelessComputationModuleTests;

import { Computation, ComputationOf, PureComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureComputationModuleTests: <C extends Computation>(m: PureComputationModule<C>, fromReadonlyArray: <T>() => Function1<readonly T[], ComputationOf<C, T>>, toReadonlyArray: <T_1>() => Function1<ComputationOf<C, T_1>, readonly T_1[]>) => import("../../../__internal__/testing.js").Describe;
export default PureComputationModuleTests;

import { Computation, ComputationOf, PureComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureComputationModuleTests: <C extends Computation>(m: PureComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, readonly T[]>) => import("../../../__internal__/testing.js").Describe;
export default PureComputationModuleTests;

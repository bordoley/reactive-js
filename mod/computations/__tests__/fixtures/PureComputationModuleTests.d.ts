import { Computation, ComputationOf, PureStatelessComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureComputationModuleTests: <C extends Computation>(m: PureStatelessComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, readonly T[]>) => import("../../../__internal__/testing.js").Describe;
export default PureComputationModuleTests;

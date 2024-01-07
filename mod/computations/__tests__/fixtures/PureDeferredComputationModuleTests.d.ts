import { Computation, ComputationOf, PureStatefulComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureDeferredComputationModuleTests: <C extends Computation>(m: PureStatefulComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, readonly T[]>) => import("../../../__internal__/testing.js").Describe;
export default PureDeferredComputationModuleTests;

import { Computation, ComputationOf, PureDeferredComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureDeferredComputationModuleTests: <C extends Computation>(m: PureDeferredComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, readonly T[]>) => import("../../../__internal__/testing.js").Describe;
export default PureDeferredComputationModuleTests;

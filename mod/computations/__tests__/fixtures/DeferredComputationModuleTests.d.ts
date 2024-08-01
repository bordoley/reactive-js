import { Computation, ComputationOf, DeferredComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const DeferredComputationModuleTests: <C extends Computation>(m: DeferredComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;

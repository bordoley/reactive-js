import { Computation, ComputationOf, DeferredComputationModule, PureStatefulComputationModule } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const PureStatefulComputationModuleTests: <C extends Computation>(m: PureStatefulComputationModule<C> & DeferredComputationModule<C>, toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>) => import("../../../__internal__/testing.js").Describe;
export default PureStatefulComputationModuleTests;

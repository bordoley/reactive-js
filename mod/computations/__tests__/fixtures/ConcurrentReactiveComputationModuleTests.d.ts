import { ComputationOf, ComputationType, ComputationTypeOf, ConcurrentReactiveComputationModule, ObservableLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputation extends ComputationType>(m: ConcurrentReactiveComputationModule<TComputation> & {
    toObservable: <T>() => Function1<ComputationOf<TComputation, T>, ObservableLike<T>>;
}, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;

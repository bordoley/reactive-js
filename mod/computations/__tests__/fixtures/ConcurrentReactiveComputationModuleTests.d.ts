import { ComputationOf, ComputationType, ComputationTypeOf, ConcurrentReactiveComputationModule, ObservableLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputation extends ComputationType>(m: ConcurrentReactiveComputationModule<TComputation> & {
    fromObservable: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, ComputationOf<TComputation, T>>;
    toObservable: <T>() => Function1<ComputationOf<TComputation, T>, ObservableLike<T>>;
}, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;

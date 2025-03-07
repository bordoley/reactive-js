import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, DeferredObservableWithSideEffectsLike, MulticastObservableLike, ObservableLike, ObserverLike, PureDeferredObservableLike, PureSynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
interface ObservableCreateWithConfig {
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<PureSynchronousObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): PureSynchronousObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<SynchronousObservableWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): SynchronousObservableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<PureDeferredObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): PureDeferredObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<DeferredObservableWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): DeferredObservableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<MulticastObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): MulticastObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<ObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): ObservableLike<T>;
}
declare const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"];
export default Observable_createWithConfig;

import { ComputationLike_isPure, ComputationLike_isSynchronous } from "../../../computations.js";
import { DeferredObservableWithSideEffectsLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObserverLike, PureDeferredObservableLike, PureRunnableLike, RunnableWithSideEffectsLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
interface ObservableCreateWithConfig {
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<PureRunnableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): PureRunnableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): RunnableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<PureDeferredObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): PureDeferredObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<DeferredObservableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): DeferredObservableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<MulticastObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): MulticastObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>): ObservableLike<T>;
}
declare const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"];
export default Observable_createWithConfig;

import { DeferredSideEffectsObservableLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, PureRunnableLike, RunnableWithSideEffectsLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
interface ObservableCreateWithConfig {
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<PureRunnableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): PureRunnableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): RunnableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<DeferredSideEffectsObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): DeferredSideEffectsObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<MulticastObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): MulticastObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>): ObservableLike<T>;
}
declare const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"];
export default Observable_createWithConfig;

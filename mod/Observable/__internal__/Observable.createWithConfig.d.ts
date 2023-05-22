import { SideEffect1 } from "../../functions.js";
import { DeferredObservableLike, MulticastObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isRunnable, ObserverLike, RunnableLike } from "../../types.js";
interface ObservableCreateWithConfig {
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): RunnableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isRunnable]: false;
    }): DeferredObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: false;
        readonly [ObservableLike_isRunnable]: false;
    }): MulticastObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): ObservableLike<T>;
}
declare const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"];
export default Observable_createWithConfig;

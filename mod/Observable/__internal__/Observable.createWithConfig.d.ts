import { SideEffect1 } from "../../functions.js";
import { DeferredObservableLike, MulticastObservableLike, ObservableBaseLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, RunnableLike, RunnableWithSideEffectsLike } from "../../types.js";
interface ObservableCreateWithConfig {
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: true;
    }): RunnableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: true;
    }): RunnableWithSideEffectsLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: true;
        readonly [ObservableLike_isPure]: false;
        readonly [ObservableLike_isRunnable]: false;
    }): DeferredObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: false;
        readonly [ObservableLike_isPure]: true;
        readonly [ObservableLike_isRunnable]: false;
    }): MulticastObservableLike<T>;
    createWithConfig<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isPure]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    }): ObservableBaseLike<T>;
}
declare const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"];
export default Observable_createWithConfig;

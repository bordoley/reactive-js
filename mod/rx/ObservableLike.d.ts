import { ObserverLike } from "./ObserverLike.mjs";
import { ReactiveContainerLike } from "./ReactiveContainerLike.mjs";
declare const DefaultObservable = 0;
declare const RunnableObservable = 1;
declare const EnumerableObservable = 2;
declare const ObservableLike_observableType: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike {
    readonly TStatefulContainerState?: ObserverLike<T>;
    readonly [ObservableLike_observableType]: typeof EnumerableObservable | typeof RunnableObservable | typeof DefaultObservable;
}
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
export { DefaultObservable, EnumerableObservable, ObservableLike, ObservableLike_observableType, RunnableObservable, getObservableType };

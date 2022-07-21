import { ObserverLike } from "./ObserverLike";
import { ReactiveContainerLike } from "./ReactiveContainerLike";

export const DefaultObservable = 0;
export const RunnableObservable = 1;
export const EnumerableObservable = 2;

export const ObservableLike_observableType = Symbol(
  "ObservableLike_observableType",
);
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: ObserverLike<T>;

  readonly [ObservableLike_observableType]:
    | typeof EnumerableObservable
    | typeof RunnableObservable
    | typeof DefaultObservable;
}

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];

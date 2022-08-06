import { ContainerOperator, DistinctUntilChanged, ForEach, Concat, Scan } from "../../containers.mjs";
import { Function1 } from "../../functions.mjs";
import { ObservableLike, ObservableType, MulticastObservableLike } from "../../rx.mjs";
import { ObserverLike, SchedulerLike } from "../../scheduling.mjs";
import { Lift, TReactive } from "../containers/StatefulContainerLikeInternal.mjs";
import { DisposableLike } from "../util/DisposableLikeInternal.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const getMinObservableType: (observables: readonly ObservableLike[]) => ObservableType;
declare const liftObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftRunnableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservableT: Lift<ObservableLike, TReactive>;
declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
declare const forEach: ForEach<ObservableLike>["forEach"];
declare const mergeImpl: <T>(observables: readonly ObservableLike<T>[]) => ObservableLike<T>;
declare const merge: Concat<ObservableLike>["concat"];
declare const mergeT: Concat<ObservableLike>;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
declare const scan: Scan<ObservableLike>["scan"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
export { distinctUntilChanged, forEach, getMinObservableType, getObservableType, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, scan, subscribe };

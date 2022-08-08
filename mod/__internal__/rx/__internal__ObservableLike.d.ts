import { ReadonlyArrayLike, ContainerOperator, StatefulContainerStateOf, ContainerOf, DistinctUntilChanged, ForEach, Concat, Scan } from "../../containers.mjs";
import { Function1 } from "../../functions.mjs";
import { ObservableLike, MulticastObservableLike } from "../../rx.mjs";
import { ObserverLike, SchedulerLike } from "../../scheduling.mjs";
import { Lift, TReactive } from "../containers/__internal__StatefulContainerLike.mjs";
import { DisposableLike } from "../util/__internal__DisposableLike.mjs";
declare const allAreEnumerable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const allAreRunnable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const liftObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftRunnableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservableT: Lift<ObservableLike, TReactive>;
declare const createMergeAll: <C extends ObservableLike<unknown>>(lift: <TA, TB>(operator: Function1<StatefulContainerStateOf<C, TB>, StatefulContainerStateOf<C, TA>>) => ContainerOperator<C, TA, TB>) => <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
declare const createSwitchAll: <C extends ObservableLike<unknown>>(lift: <TA, TB>(operator: Function1<StatefulContainerStateOf<C, TB>, StatefulContainerStateOf<C, TA>>) => ContainerOperator<C, TA, TB>) => <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
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
export { allAreEnumerable, allAreRunnable, createMergeAll, createSwitchAll, distinctUntilChanged, forEach, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, scan, subscribe };

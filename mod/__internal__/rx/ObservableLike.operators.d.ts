import { ReadonlyArrayLike, DistinctUntilChanged, ForEach, Concat, Scan, TakeFirst, ContainerOperator } from "../../containers.mjs";
import { Function1, Factory, Function2 } from "../../functions.mjs";
import { ObservableLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike } from "../../rx.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
import { DisposableOrTeardown, DisposableLike } from "../../util.mjs";
declare const allAreEnumerable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const allAreRunnable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
declare const forEach: ForEach<ObservableLike>["forEach"];
declare const isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike<unknown>;
declare const isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike<unknown>;
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
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
declare const scan: Scan<ObservableLike>["scan"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { allAreEnumerable, allAreRunnable, distinctUntilChanged, forEach, isEnumerable, isRunnable, merge, mergeImpl, mergeT, multicast, onSubscribe, scan, subscribe, takeFirst, zipWithLatestFrom };

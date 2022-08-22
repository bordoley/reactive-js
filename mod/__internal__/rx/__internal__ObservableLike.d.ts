import { ReadonlyArrayLike, ContainerOperator, ContainerOf, DistinctUntilChanged, ForEach, Concat, Scan, ConcatAll, TakeFirst } from "../../containers.mjs";
import { Factory, Function1, SideEffect1, Function2 } from "../../functions.mjs";
import { ObservableLike, ObserverLike, AsyncReducer, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike } from "../../rx.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
import { DisposableOrTeardown, DisposableLike } from "../../util.mjs";
import { Lift, TReactive } from "../containers/__internal__StatefulContainerLike.mjs";
declare const deferObservableImpl: <T>(factory: Factory<ObservableLike<T>>, isEnumerable: boolean, isRunnable: boolean) => ObservableLike<T>;
declare const allAreEnumerable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const allAreRunnable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
declare const liftObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftObservableT: Lift<ObservableLike, TReactive>;
declare const liftRunnableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservable: <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const liftEnumerableObservableT: Lift<ObservableLike, TReactive>;
declare const createCatchError: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => ContainerOperator<C, T, T>) => <T_1>(onError: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
declare const createMergeAll: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>) => ContainerOperator<C, ContainerOf<C, T>, T>) => <T_1>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T_1>, T_1>;
declare const createScanAsync: <C extends ObservableLike<unknown>, CInner extends ObservableLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: AsyncReducer<CInner, T_1, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
declare const createSwitchAll: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>) => ContainerOperator<C, ContainerOf<C, T>, T>) => <T_1>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T_1>, T_1>;
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
declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { allAreEnumerable, allAreRunnable, createCatchError, createMergeAll, createScanAsync, createSwitchAll, deferObservableImpl, distinctUntilChanged, forEach, isEnumerable, isRunnable, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftObservableT, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, onSubscribe, scan, subscribe, switchAll, takeFirst, zipWithLatestFrom };

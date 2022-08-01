import { DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, ContainerOperator, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToPromise } from "../containers.mjs";
import { Function1, Option, Equality, SideEffect1, Predicate, Reducer, Factory } from "../functions.mjs";
import { ObservableLike, MulticastObservableLike, RunnableObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableLike } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
interface DecodeWithCharsetObservable {
    (charset?: string | undefined): ContainerOperator<ObservableLike, ArrayBuffer, string>;
    (charset?: string | undefined): ContainerOperator<RunnableObservableLike, ArrayBuffer, string>;
    (charset?: string | undefined): ContainerOperator<EnumerableObservableLike, ArrayBuffer, string>;
}
declare const decodeWithCharset: DecodeWithCharsetObservable;
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
interface DistinctUntilChangedObservable {
    <T>(options?: Option<{
        readonly equality?: Equality<T>;
    }>): ContainerOperator<ObservableLike, T, T>;
    <T>(options?: Option<{
        readonly equality?: Equality<T>;
    }>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: Option<{
        readonly equality?: Equality<T>;
    }>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const distinctUntilChanged: DistinctUntilChangedObservable;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
interface ForEachObservable {
    <T>(effect: SideEffect1<T>): ContainerOperator<ObservableLike<unknown>, T, T>;
    <T>(effect: SideEffect1<T>): ContainerOperator<RunnableObservableLike<unknown>, T, T>;
    <T>(effect: SideEffect1<T>): ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
}
declare const forEach: ForEachObservable;
declare const forEachT: ForEach<ObservableLike>;
interface KeepObservable {
    <T>(predicate: Predicate<T>): ContainerOperator<ObservableLike, T, T>;
    <T>(predicate: Predicate<T>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(predicate: Predicate<T>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const keep: KeepObservable;
declare const keepT: Keep<ObservableLike>;
interface MapObservable {
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<ObservableLike, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<RunnableObservableLike, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<EnumerableObservableLike, TA, TB>;
}
declare const map: MapObservable;
declare const mapT: Map<ObservableLike>;
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
interface PairwiseObservable {
    <T>(): ContainerOperator<ObservableLike<unknown>, T, readonly [
        T,
        T
    ]>;
    <T>(): ContainerOperator<RunnableObservableLike<unknown>, T, readonly [
        T,
        T
    ]>;
    <T>(): ContainerOperator<EnumerableObservableLike<unknown>, T, readonly [
        T,
        T
    ]>;
}
declare const pairwise: PairwiseObservable;
declare const pairwiseT: Pairwise<ObservableLike>;
interface ReduceObservable {
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<ObservableLike<unknown>, T, TAcc>;
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<RunnableObservableLike<unknown>, T, TAcc>;
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<EnumerableObservableLike<unknown>, T, TAcc>;
}
declare const reduce: ReduceObservable;
declare const reduceT: Reduce<ObservableLike>;
interface ScanObservable {
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<ObservableLike, T, TAcc>;
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<RunnableObservableLike, T, TAcc>;
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
declare const scan: ScanObservable;
declare const scanT: Scan<ObservableLike>;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => ContainerOperator<ObservableLike<unknown>, T, T>;
interface SkipFirstObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<ObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const skipFirst: SkipFirstObservable;
declare const skipFirstT: SkipFirst<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => ContainerOperator<ObservableLike<unknown>, T, T>;
interface TakeFirstObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<ObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeFirst: TakeFirstObservable;
declare const takeFirstT: TakeFirst<ObservableLike>;
interface TakeLastObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<ObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeLast: TakeLastObservable;
declare const takeLastT: TakeLast<ObservableLike>;
interface TakeUntil {
    <T>(notifier: ObservableLike<unknown>): ContainerOperator<ObservableLike, T, T>;
    <T>(notifier: RunnableObservableLike<unknown>): ContainerOperator<RunnableObservableLike, T, T>;
}
declare const takeUntil: TakeUntil;
interface TakeWhileObservable {
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<ObservableLike, T, T>;
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeWhile: TakeWhileObservable;
declare const takeWhileT: TakeWhile<ObservableLike>;
interface ThrowIfEmptyObservable {
    <T>(factory: Factory<unknown>): ContainerOperator<ObservableLike, T, T>;
    <T>(factory: Factory<unknown>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(factory: Factory<unknown>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const throwIfEmpty: ThrowIfEmptyObservable;
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"];
export { decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, getObservableType, keep, keepT, map, mapT, multicast, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toPromise };

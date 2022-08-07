import { Function1, Equality, SideEffect1, Factory, Reducer } from "../functions.mjs";
import { ContainerOperator, Buffer, Zip, Concat, ConcatAll, DecodeWithCharset, DistinctUntilChanged, ForEach, ForkZip, ForkConcat, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToPromise, ToReadonlyArray } from "../containers.mjs";
import { ToEnumerable } from "../ix.mjs";
import { ObservableLike, MulticastObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { ToFlowable } from "../streaming.mjs";
import { DisposableOrTeardown, DisposableLike } from "../util.mjs";
declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
declare const bufferT: Buffer<ObservableLike>;
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
declare const combineLatest: Zip<ObservableLike>["zip"];
declare const combineLatestT: Zip<ObservableLike>;
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare const concat: Concat<ObservableLike>["concat"];
declare const concatT: Concat<ObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const concatAllT: ConcatAll<ObservableLike, {
    readonly maxBufferSize: number;
}>;
declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
declare const exhaust: ConcatAll<ObservableLike>["concatAll"];
declare const exhaustT: ConcatAll<ObservableLike>;
declare const forEach: <T>(effect: SideEffect1<T>) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const forEachT: ForEach<ObservableLike>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const keep: Keep<ObservableLike>["keep"];
declare const keepT: Keep<ObservableLike>;
declare const map: Map<ObservableLike>["map"];
declare const mapT: Map<ObservableLike>;
declare const merge: <T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]) => ObservableLike<T>;
declare const mergeT: Concat<ObservableLike<unknown>>;
declare const mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllT: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>;
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<ObservableLike>;
declare const reduce: Reduce<ObservableLike>["reduce"];
declare const reduceT: Reduce<ObservableLike>;
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<ObservableLike<unknown>, T, TAcc>;
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
}) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<ObservableLike>;
declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
declare const switchAllT: ConcatAll<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<ObservableLike>;
declare const takeLast: TakeLast<ObservableLike>["takeLast"];
declare const takeLastT: TakeLast<ObservableLike>;
declare const takeUntil: <T>(notifier: ObservableLike) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<ObservableLike>;
declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike>;
declare const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<ObservableLike>;
declare const toFlowable: ToFlowable<ObservableLike>["toFlowable"];
declare const toFlowableT: ToFlowable<ObservableLike>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"];
declare const toPromiseT: ToPromise<ObservableLike, SchedulerLike>;
declare const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<ObservableLike>;
declare const zip: Zip<ObservableLike>["zip"];
declare const zipT: Zip<ObservableLike>;
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
declare const zipLatest: Zip<ObservableLike>["zip"];
declare const zipLatestT: Zip<ObservableLike>;
export { buffer, bufferT, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, keep, keepT, map, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, zip, zipLatest, zipLatestT, zipT };

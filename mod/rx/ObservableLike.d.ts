import { ContainerOperator, Buffer, Zip, Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, ForkZip, Keep, Map, ForkConcat, Pairwise, Reduce, Scan, SkipFirst, ConcatAll, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.mjs";
import { Function1, Factory } from "../functions.mjs";
import { EnumerableLike } from "../ix.mjs";
import { ObservableLike, ObservableType, MulticastObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableOrTeardown, DisposableLike } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const getMinObservableType: (observables: readonly ObservableLike[]) => ObservableType;
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
declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
declare const forEach: ForEach<ObservableLike>["forEach"];
declare const forEachT: ForEach<ObservableLike>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const keep: Keep<ObservableLike>["keep"];
declare const keepT: Keep<ObservableLike>;
declare const map: Map<ObservableLike>["map"];
declare const mapT: Map<ObservableLike>;
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
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
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<ObservableLike>;
declare const reduce: Reduce<ObservableLike>["reduce"];
declare const reduceT: Reduce<ObservableLike>;
declare const scan: Scan<ObservableLike>["scan"];
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
declare const toEnumerable: <T>() => Function1<ObservableLike<T>, EnumerableLike<T>>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;
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
export { buffer, bufferT, combineLatest, combineLatestT, concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, getMinObservableType, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toPromise, toReadonlyArray, toReadonlyArrayT, zip, zipLatest, zipLatestT, zipT };

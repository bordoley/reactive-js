export { distinctUntilChanged, forEach, merge, mergeT, multicast, scan, subscribe } from '../__internal__/rx/ObservableLikeInternal.js';
import { ContainerOperator, Buffer, Zip, Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, ForkZip, ForkConcat, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, ConcatAll, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.mjs";
import { Function1, Factory } from "../functions.mjs";
import { EnumerableLike } from "../ix.mjs";
import { ObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { FlowableLike } from "../streaming.mjs";
import { DisposableOrTeardown } from "../util.mjs";
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
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
declare const forEachT: ForEach<ObservableLike>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const keep: Keep<ObservableLike>["keep"];
declare const keepT: Keep<ObservableLike>;
declare const map: Map<ObservableLike>["map"];
declare const mapT: Map<ObservableLike>;
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<ObservableLike>;
declare const reduce: Reduce<ObservableLike>["reduce"];
declare const reduceT: Reduce<ObservableLike>;
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
declare const toFlowable: <T>() => Function1<ObservableLike<unknown>, FlowableLike<T>>;
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
export { buffer, bufferT, combineLatest, combineLatestT, concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChangedT, forEachT, forkCombineLatest, forkMerge, forkZipLatest, keep, keepT, map, mapT, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scanT, share, skipFirst, skipFirstT, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toFlowable, toPromise, toReadonlyArray, toReadonlyArrayT, zip, zipLatest, zipLatestT, zipT };

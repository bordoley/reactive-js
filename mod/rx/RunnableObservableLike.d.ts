import { Buffer, Concat, ConcatAll, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.mjs";
import { Factory } from "../functions.mjs";
import { RunnableObservableLike, ScanAsync } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const bufferT: Buffer<RunnableObservableLike>;
declare const concatT: Concat<RunnableObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike>;
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike>;
declare const exhaust: ConcatAll<RunnableObservableLike>["concatAll"];
declare const exhaustT: ConcatAll<RunnableObservableLike>;
declare const forEachT: ForEach<RunnableObservableLike>;
declare const keepT: Keep<RunnableObservableLike>;
declare const mapT: Map<RunnableObservableLike>;
declare const mergeT: Concat<RunnableObservableLike>;
declare const mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllT: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>;
declare const pairwiseT: Pairwise<RunnableObservableLike>;
declare const reduceT: Reduce<RunnableObservableLike>;
declare const scanT: Scan<RunnableObservableLike>;
declare const scanAsync: ScanAsync<RunnableObservableLike>["scanAsync"];
declare const scanAsyncT: ScanAsync<RunnableObservableLike>;
declare const skipFirstT: SkipFirst<RunnableObservableLike>;
declare const switchAll: ConcatAll<RunnableObservableLike>["concatAll"];
declare const switchAllT: ConcatAll<RunnableObservableLike>;
declare const takeFirstT: TakeFirst<RunnableObservableLike>;
declare const takeLastT: TakeLast<RunnableObservableLike>;
declare const takeWhileT: TakeWhile<RunnableObservableLike>;
declare const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike>;
declare const toReadonlyArrayT: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
declare const zipT: Zip<RunnableObservableLike>;
export { bufferT, concatAll, concatT, decodeWithCharsetT, distinctUntilChangedT, exhaust, exhaustT, forEachT, keepT, mapT, mergeAll, mergeAllT, mergeT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };

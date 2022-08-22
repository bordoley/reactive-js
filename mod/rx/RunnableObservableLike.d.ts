import { SideEffect1, Factory } from "../functions.mjs";
import { Defer, Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, DistinctUntilChanged, Empty, EverySatisfy, ForEach, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.mjs";
import { ObserverLike, RunnableObservableLike, ScanAsync } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
declare const defer: Defer<RunnableObservableLike, {
    delay: number;
}>["defer"];
declare const deferT: Defer<RunnableObservableLike>;
declare const bufferT: Buffer<RunnableObservableLike>;
declare const catchError: CatchError<RunnableObservableLike>["catchError"];
declare const catchErrorT: CatchError<RunnableObservableLike>;
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
declare const emptyT: Empty<RunnableObservableLike, {
    delay: number;
}>;
declare const everySatisfyT: EverySatisfy<RunnableObservableLike>;
declare const exhaust: ConcatAll<RunnableObservableLike>["concatAll"];
declare const exhaustT: ConcatAll<RunnableObservableLike>;
declare const forEachT: ForEach<RunnableObservableLike>;
declare const generateT: Generate<RunnableObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
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
declare const neverT: Never<RunnableObservableLike>;
declare const pairwiseT: Pairwise<RunnableObservableLike>;
declare const reduceT: Reduce<RunnableObservableLike>;
declare const scanT: Scan<RunnableObservableLike>;
declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
declare const scanAsyncT: ScanAsync<RunnableObservableLike, RunnableObservableLike>;
declare const skipFirstT: SkipFirst<RunnableObservableLike>;
declare const someSatisfyT: SomeSatisfy<RunnableObservableLike>;
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
export { bufferT, catchError, catchErrorT, concatAll, concatT, create, decodeWithCharsetT, defer, deferT, distinctUntilChangedT, emptyT, everySatisfyT, exhaust, exhaustT, forEachT, generateT, keepT, mapT, mergeAll, mergeAllT, mergeT, neverT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, someSatisfyT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };

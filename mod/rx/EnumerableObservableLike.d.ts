import { SideEffect1, Factory } from "../functions.mjs";
import { Defer, Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, DistinctUntilChanged, Empty, EverySatisfy, ForEach, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.mjs";
import { ObserverLike, EnumerableObservableLike, ScanAsync } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
declare const defer: Defer<EnumerableObservableLike>["defer"];
declare const deferT: Defer<EnumerableObservableLike>;
declare const bufferT: Buffer<EnumerableObservableLike>;
declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
declare const catchErrorT: CatchError<EnumerableObservableLike>;
declare const concatT: Concat<EnumerableObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike>;
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike>;
declare const emptyT: Empty<EnumerableObservableLike>;
declare const everySatisfyT: EverySatisfy<EnumerableObservableLike>;
declare const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const exhaustT: ConcatAll<EnumerableObservableLike>;
declare const forEachT: ForEach<EnumerableObservableLike>;
declare const generateeT: Generate<EnumerableObservableLike>;
declare const keepT: Keep<EnumerableObservableLike>;
declare const mapT: Map<EnumerableObservableLike>;
declare const mergeT: Concat<EnumerableObservableLike>;
declare const mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllT: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>;
declare const neverT: Never<EnumerableObservableLike>;
declare const pairwiseT: Pairwise<EnumerableObservableLike>;
declare const reduceT: Reduce<EnumerableObservableLike>;
declare const scanT: Scan<EnumerableObservableLike>;
declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
declare const scanAsyncT: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>;
declare const skipFirstT: SkipFirst<EnumerableObservableLike>;
declare const someSatisfyT: SomeSatisfy<EnumerableObservableLike>;
declare const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const switchAllT: ConcatAll<EnumerableObservableLike>;
declare const takeFirstT: TakeFirst<EnumerableObservableLike>;
declare const takeLastT: TakeLast<EnumerableObservableLike>;
declare const takeWhileT: TakeWhile<EnumerableObservableLike>;
declare const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike>;
declare const toReadonlyArrayT: ToReadonlyArray<EnumerableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
declare const zipT: Zip<EnumerableObservableLike>;
export { bufferT, catchError, catchErrorT, concatAll, concatT, create, decodeWithCharsetT, defer, deferT, distinctUntilChangedT, emptyT, everySatisfyT, exhaust, exhaustT, forEachT, generateeT, keepT, mapT, mergeAll, mergeAllT, mergeT, neverT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, someSatisfyT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };

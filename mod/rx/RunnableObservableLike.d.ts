import { Buffer, Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, ConcatAll, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ReadonlyArrayLike, ToReadonlyArray } from "../containers.mjs";
import { Factory, Function1 } from "../functions.mjs";
import { RunnableObservableLike, ObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
import { ToFlowable } from "../streaming.mjs";
declare const bufferT: Buffer<RunnableObservableLike>;
declare const concatT: Concat<RunnableObservableLike>;
declare const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike>;
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike>;
declare const forEachT: ForEach<RunnableObservableLike>;
declare const keepT: Keep<RunnableObservableLike>;
declare const mapT: Map<RunnableObservableLike>;
declare const mergeT: Concat<ObservableLike>;
declare const pairwiseT: Pairwise<RunnableObservableLike>;
declare const reduceT: Reduce<RunnableObservableLike>;
declare const scanT: Scan<RunnableObservableLike>;
declare const skipFirstT: SkipFirst<RunnableObservableLike>;
declare const switchAllT: ConcatAll<RunnableObservableLike>;
declare const takeFirstT: TakeFirst<RunnableObservableLike>;
declare const takeLastT: TakeLast<RunnableObservableLike>;
declare const takeWhileT: TakeWhile<RunnableObservableLike>;
declare const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike>;
declare const toFlowable: ToFlowable<RunnableObservableLike | EnumerableObservableLike>["toFlowable"];
declare const toFlowableT: ToFlowable<RunnableObservableLike>;
interface toReadonlyArray {
    <T>(options?: Partial<{
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
    <T>(options?: Partial<{
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>): Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
}
declare const toReadonlyArray: toReadonlyArray;
declare const toReadonlyArrayT: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
export { bufferT, concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT };

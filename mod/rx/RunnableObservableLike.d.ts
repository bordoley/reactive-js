import { Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, ContainerOperator, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.mjs";
import { Function1, Factory } from "../functions.mjs";
import { RunnableObservableLike, ObservableLike } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
import { FlowableLike } from "../streaming.mjs";
declare const concat: Concat<RunnableObservableLike>["concat"];
declare const concatT: Concat<RunnableObservableLike>;
declare const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike>;
declare const forEach: ForEach<RunnableObservableLike>["forEach"];
declare const forEachT: ForEach<RunnableObservableLike>;
declare const keep: Keep<RunnableObservableLike>["keep"];
declare const keepT: Keep<RunnableObservableLike>;
declare const map: Map<RunnableObservableLike>["map"];
declare const mapT: Map<RunnableObservableLike>;
declare const merge: Concat<RunnableObservableLike>["concat"];
declare const mergeT: Concat<ObservableLike<unknown>>;
declare const pairwise: Pairwise<RunnableObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<RunnableObservableLike>;
declare const reduce: Reduce<RunnableObservableLike>["reduce"];
declare const reduceT: Reduce<RunnableObservableLike>;
declare const scan: Scan<RunnableObservableLike>["scan"];
declare const scanT: Scan<RunnableObservableLike>;
declare const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableObservableLike>;
declare const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableObservableLike>;
declare const takeLast: TakeLast<RunnableObservableLike>["takeLast"];
declare const takeLastT: TakeLast<RunnableObservableLike>;
declare const takeUntil: <T>(notifier: RunnableObservableLike) => ContainerOperator<RunnableObservableLike, T, T>;
declare const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableObservableLike>;
declare const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike>;
declare const toFlowable: <T>() => Function1<RunnableObservableLike<T>, FlowableLike<T>>;
declare const toReadonlyArray: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, merge, mergeT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toFlowable, toReadonlyArray, toReadonlyArrayT };

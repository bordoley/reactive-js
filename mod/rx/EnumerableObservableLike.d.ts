import { Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator } from "../containers.mjs";
import { Factory } from "../functions.mjs";
import { ToEnumerable } from "../ix.mjs";
import { EnumerableObservableLike } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
import { ToFlowable } from "../streaming.mjs";
import { DisposableOrTeardown } from "../util.mjs";
declare const concat: Concat<EnumerableObservableLike>["concat"];
declare const concatT: Concat<EnumerableObservableLike>;
declare const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike>;
declare const forEach: ForEach<EnumerableObservableLike>["forEach"];
declare const forEachT: ForEach<EnumerableObservableLike>;
declare const keep: Keep<EnumerableObservableLike>["keep"];
declare const keepT: Keep<EnumerableObservableLike>;
declare const map: Map<EnumerableObservableLike>["map"];
declare const mapT: Map<EnumerableObservableLike>;
declare const merge: Concat<EnumerableObservableLike>["concat"];
declare const mergeT: Concat<EnumerableObservableLike>;
interface OnSubscribeRunnableObservable {
    <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const onSubscribe: OnSubscribeRunnableObservable;
declare const pairwise: Pairwise<EnumerableObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<EnumerableObservableLike>;
declare const reduce: Reduce<EnumerableObservableLike>["reduce"];
declare const reduceT: Reduce<EnumerableObservableLike>;
declare const scan: Scan<EnumerableObservableLike>["scan"];
declare const scanT: Scan<EnumerableObservableLike>;
declare const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<EnumerableObservableLike>;
declare const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<EnumerableObservableLike>;
declare const takeLast: TakeLast<EnumerableObservableLike>["takeLast"];
declare const takeLastT: TakeLast<EnumerableObservableLike>;
declare const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<EnumerableObservableLike>;
declare const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike>;
declare const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableObservableLike>;
declare const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"];
declare const toFlowableT: ToFlowable<EnumerableObservableLike>;
declare const toReadonlyArray: ToReadonlyArray<EnumerableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<EnumerableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, merge, mergeT, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT };

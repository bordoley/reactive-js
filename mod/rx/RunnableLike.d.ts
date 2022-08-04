import { Function1, Option, Predicate } from "../functions.mjs";
import { Buffer, Concat, ConcatAll, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.mjs";
import { RunnableLike, ToRunnable } from "../rx.mjs";
declare const buffer: Buffer<RunnableLike>["buffer"];
declare const bufferT: Buffer<RunnableLike>;
declare const concat: Concat<RunnableLike>["concat"];
declare const concatT: Concat<RunnableLike>;
declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
declare const concatAllT: ConcatAll<RunnableLike>;
declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<RunnableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike>;
declare const first: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const forEach: ForEach<RunnableLike>["forEach"];
declare const forEachT: ForEach<RunnableLike>;
declare const keep: Keep<RunnableLike>["keep"];
declare const keepT: Keep<RunnableLike>;
declare const last: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const map: Map<RunnableLike>["map"];
declare const mapT: Map<RunnableLike>;
declare const pairwise: Pairwise<RunnableLike>["pairwise"];
declare const pairwiseT: Pairwise<RunnableLike>;
declare const reduce: Reduce<RunnableLike>["reduce"];
declare const reduceT: Reduce<RunnableLike>;
declare const repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
declare const repeatT: Repeat<RunnableLike>;
declare const run: <T>() => (runnable: RunnableLike<T>) => void;
declare const scan: Scan<RunnableLike>["scan"];
declare const scanT: Scan<RunnableLike>;
declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableLike>;
declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableLike>;
declare const takeLast: TakeLast<RunnableLike>["takeLast"];
declare const takeLastT: TakeLast<RunnableLike>;
declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableLike>;
declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<RunnableLike>;
declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableLike>;
declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
declare const toRunnableT: ToRunnable<RunnableLike<unknown>>;
export { buffer, bufferT, concat, concatAll, concatAllT, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, first, forEach, forEachT, keep, keepT, last, map, mapT, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, run, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT };

import { Buffer, ConcatAll, Concat, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ToIterable, Zip } from "../containers.mjs";
import { Function1 } from "../functions.mjs";
import { EnumerableLike, ToEnumerable } from "../ix.mjs";
import { ToRunnable, EnumerableObservableLike, RunnableObservableLike } from "../rx.mjs";
import { EnumeratorLike } from "../util.mjs";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const buffer: Buffer<EnumerableLike>["buffer"];
declare const bufferT: Buffer<EnumerableLike>;
declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
declare const concatAllT: ConcatAll<EnumerableLike>;
declare const concat: Concat<EnumerableLike>["concat"];
declare const concatT: Concat<EnumerableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike>;
declare const forEach: ForEach<EnumerableLike>["forEach"];
declare const forEachT: ForEach<EnumerableLike>;
declare const keep: Keep<EnumerableLike>["keep"];
declare const keepT: Keep<EnumerableLike>;
declare const map: Map<EnumerableLike>["map"];
declare const mapT: Map<EnumerableLike>;
declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
declare const pairwiseT: Pairwise<EnumerableLike>;
declare const repeat: Repeat<EnumerableLike>["repeat"];
declare const repeatT: Repeat<EnumerableLike>;
declare const scan: Scan<EnumerableLike>["scan"];
declare const scanT: Scan<EnumerableLike>;
declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<EnumerableLike>;
declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<EnumerableLike>;
declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
declare const takeLastT: TakeLast<EnumerableLike>;
declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<EnumerableLike>;
declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<EnumerableLike>;
declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableLike>;
interface ToObservable {
    <T>(): Function1<EnumerableLike<T>, EnumerableObservableLike<T>>;
    <T>(options?: {
        delay: number;
        delayStart?: boolean;
    }): Function1<EnumerableLike<T>, RunnableObservableLike<T>>;
}
declare const toObservable: ToObservable;
declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<EnumerableLike>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toIterableT: ToIterable<EnumerableLike>;
declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
declare const toRunnableT: ToRunnable<EnumerableLike>;
declare const zipT: Zip<EnumerableLike>;
export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, enumerate, forEach, forEachT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zipT };

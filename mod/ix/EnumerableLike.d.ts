import { Buffer, ConcatAll, Concat, DistinctUntilChanged, Empty, ForEach, Generate, Keep, Map, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToReadonlyArray, Zip } from "../containers.mjs";
import { EnumerableLike, EnumeratorLike, ToEnumerable } from "../ix.mjs";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.mjs";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const buffer: Buffer<EnumerableLike>["buffer"];
declare const bufferT: Buffer<EnumerableLike>;
declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
declare const concatAllT: ConcatAll<EnumerableLike>;
declare const concat: Concat<EnumerableLike>["concat"];
declare const concatT: Concat<EnumerableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike>;
declare const empty: Empty<EnumerableLike>["empty"];
declare const emptyT: Empty<EnumerableLike>;
declare const forEach: ForEach<EnumerableLike>["forEach"];
declare const forEachT: ForEach<EnumerableLike>;
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
declare const generate: Generate<EnumerableLike>["generate"];
declare const generateT: Generate<EnumerableLike>;
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
declare const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
declare const toEnumerableObservableT: ToEnumerableObservable<EnumerableLike>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toIterableT: ToIterable<EnumerableLike>;
declare const toObservable: ToObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toObservable"];
declare const toObservableT: ToObservable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>;
declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<EnumerableLike>;
declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
declare const toRunnableT: ToRunnable<EnumerableLike>;
declare const toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
declare const toRunnableObservableT: ToRunnableObservable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>;
declare const zip: Zip<EnumerableLike>["zip"];
declare const zipT: Zip<EnumerableLike>;
export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, enumerate, forEach, forEachT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, zip, zipT };

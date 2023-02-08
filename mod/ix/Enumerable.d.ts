import { Function1 } from "../functions.js";
import { Buffer, Concat, ConcatAll, DistinctUntilChanged, Empty, ForEach, ReadonlyArrayLike, FromIterable, Generate, Keep, Map, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToReadonlyArray, Zip, FromArray } from "../containers.js";
import { EnumerableLike, EnumeratorLike, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const buffer: Buffer<EnumerableLike>["buffer"];
declare const concat: Concat<EnumerableLike>["concat"];
declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const empty: Empty<EnumerableLike>["empty"];
declare const forEach: ForEach<EnumerableLike>["forEach"];
declare const fromArray: <T>(options?: {
    readonly start: number;
    readonly count: number;
} | undefined) => Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
declare const fromIterable: FromIterable<EnumerableLike>["fromIterable"];
declare const generate: Generate<EnumerableLike>["generate"];
declare const keep: Keep<EnumerableLike>["keep"];
declare const map: Map<EnumerableLike>["map"];
declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
declare const repeat: Repeat<EnumerableLike>["repeat"];
declare const scan: Scan<EnumerableLike>["scan"];
declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
declare const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toObservable: ToObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
declare const zip: Zip<EnumerableLike>["zip"];
/** @ignore */
declare const Enumerable: Buffer<EnumerableLike> & Concat<EnumerableLike> & ConcatAll<EnumerableLike> & DistinctUntilChanged<EnumerableLike> & Empty<EnumerableLike, {
    delay: number;
}> & ForEach<EnumerableLike> & FromArray<EnumerableLike> & FromIterable<EnumerableLike> & Generate<EnumerableLike> & Keep<EnumerableLike> & Map<EnumerableLike> & Pairwise<EnumerableLike> & Repeat<EnumerableLike> & Scan<EnumerableLike> & SkipFirst<EnumerableLike> & TakeFirst<EnumerableLike> & TakeLast<EnumerableLike> & TakeWhile<EnumerableLike> & ThrowIfEmpty<EnumerableLike> & ToEnumerable<EnumerableLike> & ToReadonlyArray<EnumerableLike> & ToRunnable<EnumerableLike> & Zip<EnumerableLike>;
export { buffer, concat, concatAll, Enumerable as default, distinctUntilChanged, empty, enumerate, forEach, fromArray, fromIterable, generate, keep, map, pairwise, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toEnumerableObservable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };

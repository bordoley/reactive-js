import { Object_properties, Object_init } from "../__internal__/util/Object.mjs";
import { Buffer, ConcatAll, Concat, DistinctUntilChanged, Keep, Map, ContainerOperator, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ToIterable, Zip } from "../containers.mjs";
import { SideEffect1, Function1 } from "../functions.mjs";
import { EnumerableLike, ToEnumerable } from "../ix.mjs";
import { ToRunnable, EnumerableObservableLike, RunnableObservableLike } from "../rx.mjs";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../util.mjs";
declare const DelegatingEnumerator_move_delegate: unique symbol;
declare const delegatingEnumeratorMixin: <T>() => {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: EnumeratorLike<T>): void;
    [DelegatingEnumerator_move_delegate](): boolean;
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const buffer: Buffer<EnumerableLike>["buffer"];
declare const bufferT: Buffer<EnumerableLike<unknown>>;
declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
declare const concatAllT: ConcatAll<EnumerableLike>;
declare const concat: Concat<EnumerableLike>["concat"];
declare const concatT: Concat<EnumerableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike>;
declare const keep: Keep<EnumerableLike>["keep"];
declare const keepT: Keep<EnumerableLike>;
declare const map: Map<EnumerableLike>["map"];
declare const mapT: Map<EnumerableLike>;
declare const onNotify: <T>(onNotify: SideEffect1<T>) => ContainerOperator<EnumerableLike, T, T>;
declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
declare const pairwiseT: Pairwise<EnumerableLike>;
declare const repeat: Repeat<EnumerableLike>["repeat"];
declare const repeatT: Repeat<EnumerableLike<unknown>>;
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
declare const TContainerOf: EnumerableLike;
declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<EnumerableLike>;
declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableLike>;
interface ToObservable {
    <T>(): Function1<EnumerableLike<T>, EnumerableObservableLike<T>>;
    <T>(options?: {
        delay?: number;
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
declare const toRunnableT: ToRunnable<EnumerableLike<unknown>>;
declare const zipT: Zip<EnumerableLike>;
export { TContainerOf, buffer, bufferT, concat, concatAll, concatAllT, concatT, delegatingEnumeratorMixin, distinctUntilChanged, distinctUntilChangedT, enumerate, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zipT };

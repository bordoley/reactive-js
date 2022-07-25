import { DistinctUntilChanged, Keep, Map, ContainerOperator, Pairwise, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ToIterable, Zip } from "../containers.mjs";
import { SideEffect1 } from "../functions.mjs";
import { EnumerableLike, ToEnumerable } from "../ix.mjs";
import { EnumeratorLike } from "../util.mjs";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike>;
declare const keep: Keep<EnumerableLike>["keep"];
declare const keepT: Keep<EnumerableLike>;
declare const map: Map<EnumerableLike>["map"];
declare const mapT: Map<EnumerableLike>;
declare const onNotify: <T>(a: SideEffect1<T>) => ContainerOperator<EnumerableLike<unknown>, T, T>;
declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
declare const pairwiseT: Pairwise<EnumerableLike>;
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
declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
declare const toArrayT: ToReadonlyArray<EnumerableLike>;
declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<EnumerableLike>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toIterableT: ToIterable<EnumerableLike>;
declare const zipT: Zip<EnumerableLike>;
export { TContainerOf, distinctUntilChanged, distinctUntilChangedT, enumerate, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArrayT, toEnumerable, toEnumerableT, toIterable, toIterableT, toReadonlyArray, zipT };

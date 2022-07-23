import { ContainerLike, Container, ContainerOf, DistinctUntilChanged, FromArray, Keep, Map, ContainerOperator, Pairwise, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ToIterable, Zip } from '../containers/ContainerLike.js';
import { ThrowIfEmpty } from '../containers/StatefulContainerLike.js';
import { Function1, Factory, Identity, SideEffect1 } from '../util/functions.js';
import { EnumeratorLike } from "./EnumeratorLike.mjs";
import { InteractiveContainerLike, InteractiveContainerLike_interact, CreateInteractiveContainer } from "./InteractiveContainerLike.mjs";
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
    readonly TContainerOf?: EnumerableLike<this["T"]>;
    readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
    readonly TCtx?: void;
    [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}
interface FromEnumerable<C extends ContainerLike> extends Container<C> {
    fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}
interface ToEnumerable<C extends ContainerLike> extends Container<C> {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const createEnumerable: <T>(enumerate: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
declare const createT: CreateInteractiveContainer<EnumerableLike>;
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike>;
declare const fromArray: FromArray<EnumerableLike>["fromArray"];
declare const fromArrayT: FromArray<EnumerableLike>;
declare const fromEnumerable: <T>() => Identity<EnumerableLike<T>>;
declare const fromEnumerableT: FromEnumerable<EnumerableLike>;
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
declare const toEnumerable: <T>() => Identity<EnumerableLike<T>>;
declare const toEnumerableT: ToEnumerable<EnumerableLike>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toIterableT: ToIterable<EnumerableLike<unknown>>;
declare const zipT: Zip<EnumerableLike<unknown>>;
export { EnumerableLike, FromEnumerable, TContainerOf, ToEnumerable, createEnumerable, createT, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromEnumerable, fromEnumerableT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, zipT };

import { ContainerLike, Container, ContainerOf, DistinctUntilChanged, Keep, Map, ContainerOperator, Pairwise, Scan, SkipFirst } from '../containers/ContainerLike.js';
import { Function1, Identity, SideEffect1 } from '../util/functions.js';
import { EnumeratorLike } from "./EnumeratorLike.mjs";
import { InteractiveContainerLike, InteractiveContainerLike_interact } from "./InteractiveContainerLike.mjs";
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
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
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
declare const TContainerOf: EnumerableLike;
declare const toEnumerable: <T>() => Identity<EnumerableLike<T>>;
declare const toEnumerableT: ToEnumerable<EnumerableLike>;
export { EnumerableLike, FromEnumerable, TContainerOf, ToEnumerable, distinctUntilChanged, fromEnumerable, fromEnumerableT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, toEnumerable, toEnumerableT };

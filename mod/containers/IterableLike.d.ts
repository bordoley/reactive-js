import { Function1 } from '../util/functions.js';
import { ContainerLike, Container, ContainerOf } from "./ContainerLike.mjs";
interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
    readonly TContainerOf?: IterableLike<this["T"]>;
}
declare type ToIterable<C extends ContainerLike> = Container<C> & {
    toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
};
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toIterableT: ToIterable<IterableLike>;
export { IterableLike, ToIterable, toIterable, toIterableT };

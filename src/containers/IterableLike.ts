import { Function1, identity } from "../util/functions";
import { Container, ContainerLike, ContainerOf } from "./ContainerLike";

export interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
  readonly TContainerOf?: IterableLike<this["T"]>;
}

export type ToIterable<C extends ContainerLike> = Container<C> & {
  toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
};

export const toIterable: ToIterable<IterableLike>["toIterable"] = () =>
  identity;
export const toIterableT: ToIterable<IterableLike> = {
  toIterable,
};

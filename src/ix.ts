import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  StatefulContainerLike,
  StatefulContainerLike_state,
} from "./containers";
import { Function1 } from "./functions";
import { SchedulerLike } from "./scheduling";
import { StreamLike, StreamableLike } from "./streaming";
import { DisposableLike, EnumeratorLike, SourceLike } from "./util";

/** @ignore */
export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike<
  TSource extends DisposableLike,
  TCtx = void,
> extends StatefulContainerLike {
  [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown>
  extends InteractiveContainerLike<EnumeratorLike<T>> {
  readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;
  readonly [StatefulContainerLike_state]?: EnumeratorLike<
    this[typeof ContainerLike_T]
  >;
}

export interface AsyncEnumeratorLike<T = unknown>
  extends SourceLike,
    StreamLike<void, T> {}

export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
  readonly [ContainerLike_type]?: AsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;
  readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<
    this[typeof ContainerLike_T]
  >;
}

export type ToAsyncEnumerable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toAsyncEnumerable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
};

export type ToEnumerable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toEnumerable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};

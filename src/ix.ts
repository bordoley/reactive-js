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
import { DisposableLike } from "./util";

/** @ignore */
export const SourceLike_move = Symbol("SourceLike_move");

export interface SourceLike extends DisposableLike {
  [SourceLike_move](): void;
}

/** @ignore */
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");

/** @ignore */
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

export interface EnumeratorLike<T = unknown> extends SourceLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
}

/** @ignore */
export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

/**
 * @category Container
 */
export interface InteractiveContainerLike<
  TSource extends DisposableLike,
  TCtx = void,
> extends StatefulContainerLike {
  [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}

/**
 * Interface for iterating a Container of items.
 *  @category Container
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

/**  @ignore */
export const AsyncEnumerableLike_isEnumerable = Symbol(
  "AsyncEnumerableLike_isEnumerable",
);

/**  @ignore */
export const AsyncEnumerableLike_isRunnable = Symbol(
  "AsyncEnumerableLike_isRunnable",
);

/**
 * @category Container
 */
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
  readonly [ContainerLike_type]?: AsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;
  readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<
    this[typeof ContainerLike_T]
  >;
  readonly [AsyncEnumerableLike_isEnumerable]: boolean;
  readonly [AsyncEnumerableLike_isRunnable]: boolean;
}

/**
 * @category Container
 */
export interface RunnableAsyncEnumerableLike<T = unknown>
  extends AsyncEnumerableLike<T> {
  readonly [ContainerLike_type]?: RunnableAsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [AsyncEnumerableLike_isRunnable]: true;
}

/**
 * @category Container
 */
export interface EnumerableAsyncEnumerableLike<T = unknown>
  extends RunnableAsyncEnumerableLike<T> {
  readonly [ContainerLike_type]?: EnumerableAsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;

  readonly [AsyncEnumerableLike_isEnumerable]: true;
}

/**
 * @category TypeClass
 */
export interface FromAsyncEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromAsyncEnumerable<T>(
    options?: O,
  ): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface FromEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromEnumerable<T>(
    options?: O,
  ): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @category TypeClass
 */
export interface ToAsyncEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Converter
   */
  toAsyncEnumerable<T>(
    options?: O,
  ): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}

/**
 * @category TypeClass
 */
export interface ToEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Converter
   */
  toEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

import { Optional, SideEffect1 } from "./functions.js";

export const DisposableLike_add = Symbol("DisposableLike_add");
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

export interface DisposableLike {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_error]: Optional<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly [DisposableLike_isDisposed]: boolean;

  /**
   * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
   *
   * @param disposable - The disposable to add.
   * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
   */
  [DisposableLike_add](disposable: DisposableLike): void;
  [DisposableLike_add](teardown: SideEffect1<Optional<Error>>): void;

  /**
   * Dispose the resource.
   *
   * @param error - An optional error that signals the resource is being disposed due to an error.
   */
  [DisposableLike_dispose](error?: Error): void;
}

export const SerialDisposableLike_current = Symbol(
  "SerialDisposableLike_current",
);

export interface SerialDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike {
  get [SerialDisposableLike_current](): TDisposable;
  set [SerialDisposableLike_current](v: TDisposable);
}

export const QueueableLike_backpressureStrategy = Symbol(
  "QueueableLike_backpressureStrategy",
);
export const QueueableLike_capacity = Symbol("QueueableLike_capacity");
export const QueueableLike_enqueue = Symbol("QueueableLike_enqueue");

/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> {
  /**
   * The back pressure strategy utilized by the queue when it is at capacity.
   */
  readonly [QueueableLike_backpressureStrategy]:
    | "drop-latest"
    | "drop-oldest"
    | "overflow"
    | "throw";

  /**
   * The number of items the queue is capable of efficiently buffering.
   */
  readonly [QueueableLike_capacity]: number;

  /**
   * Enqueue an item onto the queue.
   *
   * @param req - The value to enqueue.
   * @returns `true` if the queue has additional remaining capacity otherwise `false`.
   */
  [QueueableLike_enqueue](req: T): boolean;
}

export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
export const EnumeratorLike_isCompleted = Symbol("EnumeratorLike_isCompleted");
export const EnumeratorLike_move = Symbol("EnumeratorLike_move");

/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
  /**
   * Indicates if the `EnumeratorLike` is completed.
   */
  readonly [EnumeratorLike_isCompleted]: boolean;

  /**
   * Returns the element if present.
   */
  readonly [EnumeratorLike_current]: T;

  /**
   * Indicates if the `EnumeratorLike` has a current value.
   */
  readonly [EnumeratorLike_hasCurrent]: boolean;

  /**
   * Advances the enumerator to the next value, if present.
   *
   * @returns true if successful, otherwise false.
   */
  [EnumeratorLike_move](): boolean;
}

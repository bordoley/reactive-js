import { Optional, SideEffect1 } from "./functions.js";

export const DisposableLike_add = Symbol("DisposableLike_add");
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

/**
 * @noInheritDoc
 */
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

/**
 * @noInheritDoc
 */
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

export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";

export type BackpressureStrategy =
  | typeof DropLatestBackpressureStrategy
  | typeof DropOldestBackpressureStrategy
  | typeof OverflowBackpressureStrategy
  | typeof ThrowBackpressureStrategy;

/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> {
  /**
   * The back pressure strategy utilized by the queue when it is at capacity.
   */
  readonly [QueueableLike_backpressureStrategy]: BackpressureStrategy;

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

export const StackLike_head = Symbol("StackLike_head");
export const StackLike_pop = Symbol("StackLike_pop");

/**
 * @noInheritDoc
 */
export interface StackLike<T = unknown> extends QueueableLike<T> {
  readonly [StackLike_head]: Optional<T>;
  [StackLike_pop](): Optional<T>;
}

export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");

/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends QueueableLike<T> {
  readonly [QueueLike_count]: number;

  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
}

export const IndexedQueueLike_get = Symbol("IndexedQueueLike_get");
export const IndexedQueueLike_set = Symbol("IndexedQueueLike_set");

/**
 * @noInheritDoc
 */
export interface IndexedQueueLike<T = unknown>
  extends QueueLike<T>,
    StackLike<T> {
  [IndexedQueueLike_get](index: number): T;
  [IndexedQueueLike_set](key: number, value: T): T;
}

/**
 * @noInheritDoc
 */
export class BackPressureError extends Error {
  readonly [QueueableLike_capacity]: number;
  readonly [QueueableLike_backpressureStrategy]: BackpressureStrategy;

  constructor(capacity: number, backpressureStrategy: BackpressureStrategy) {
    super();
    this[QueueableLike_capacity] = capacity;
    this[QueueableLike_backpressureStrategy] = backpressureStrategy;
  }
}

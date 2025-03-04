import { Error, Symbol as GlobalSymbol } from "./__internal__/constants.js";
import { Method1, Optional, SideEffect1, isNone } from "./functions.js";

export const DisposableContainerLike_add = Symbol(
  "DisposableContainerLike_add",
);

export interface DisposableContainerLike {
  /**
   * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
   *
   * @param disposable - The disposable to add.
   */
  [DisposableContainerLike_add](disposable: Disposable): void;

  /**
   * Adds the given teardown function to this container or disposes it if the container has been disposed.
   *
   * @param teardown - The teardown function to add.
   */
  [DisposableContainerLike_add](teardown: SideEffect1<Optional<Error>>): void;

  /**
   * Adds the given teardown function to this container or disposes it if the container has been disposed.
   *
   * @param teardown - The teardown function to add.
   */
  [DisposableContainerLike_add](teardown: Method1<this, Optional<Error>>): void;
}

export const DisposableLike_dispose: typeof Symbol.dispose =
  /*@__PURE__*/ ((): typeof Symbol.dispose => {
    if (isNone(GlobalSymbol.dispose)) {
      (GlobalSymbol as any).dispose = Symbol("dispose");
    }
    return GlobalSymbol.dispose;
  })();

export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

/**
 * @noInheritDoc
 */
export interface DisposableLike extends DisposableContainerLike, Disposable {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_error]: Optional<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly [DisposableLike_isDisposed]: boolean;

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

export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");

/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends QueueableLike<T>, Iterable<T> {
  readonly [QueueLike_count]: number;

  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
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

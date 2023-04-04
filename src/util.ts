import {
  BufferLike_capacity,
  CollectionLike_count,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  KeyedCollectionLike_get,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "./__internal__/symbols.js";
import { Optional, SideEffect1 } from "./functions.js";

export {
  CollectionLike_count,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  KeyedCollectionLike_get,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  BufferLike_capacity,
};

export type DisposableOrTeardown =
  | DisposableLike
  | SideEffect1<Optional<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 *
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
   * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
   *
   * @param disposable - The disposable to add.
   * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
   */
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;

  /**
   * Dispose the resource.
   *
   * @param error - An optional error that signals the resource is being disposed due to an error.
   */
  [DisposableLike_dispose](error?: Error): void;
}

/**
 * @noInheritDoc
 */
export interface BufferLike {
  /**
   * The number of items the queue is capable of efficiently buffering.
   */
  readonly [BufferLike_capacity]: number;
}

/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 */
export interface QueueableLike<T = unknown> extends BufferLike {
  /**
   * The back pressure strategy utilized by the queue when it is at capacity.
   */
  readonly [QueueableLike_backpressureStrategy]:
    | "drop-latest"
    | "drop-oldest"
    | "overflow"
    | "throw";

  /**
   * Enqueue an item onto the queue.
   *
   * @param req - The value to enqueue.
   * @returns `true` if the queue has additional remaining capacity otherwise `false`.
   */
  [QueueableLike_enqueue](req: T): boolean;
}

/**
 * @noInheritDoc
 */
export interface CollectionLike {
  readonly [CollectionLike_count]: number;
}

/**
 * @noInheritDoc
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown>
  extends CollectionLike {
  [KeyedCollectionLike_get](index: TKey): T;
}

/**
 * @noInheritDoc
 */
export interface IndexedCollectionLike<T = unknown>
  extends KeyedCollectionLike<number, T> {}

export interface IndexedBufferCollectionLike<T = unknown>
  extends BufferLike,
    IndexedCollectionLike<T> {}

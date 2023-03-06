import { Optional, SideEffect1 } from "./functions.js";
/** @ignore */
export const DisposableLike_add = Symbol("DisposableLike_add");

/** @ignore */
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");

/** @ignore */
export const DisposableLike_error = Symbol("DisposableLike_error");

/** @ignore */
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

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
   * @param disposable
   * @returns `this`
   */
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;

  /**
   * Dispose the resource.
   *
   * @param error An optional error that signals the resource is being disposed due to an error.
   */
  [DisposableLike_dispose](error?: Error): void;
}

/** @ignore */
export const QueueLike_count = Symbol("QueueLike_count");

/** @ignore */
export const QueueLike_push = Symbol("QueueLike_push");

export interface QueueLike<T = unknown> {
  /**
   * The number of queued up items.
   */
  readonly [QueueLike_count]: number;

  /**
   * Push an item onto the queue
   * @param req
   */
  [QueueLike_push](req: T): void;
}

/** @ignore */
export const EnumeratorLike_move = Symbol("EnumeratorLike_move");

/** @ignore */
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");

/** @ignore */
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

/**
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;

  [EnumeratorLike_move](): boolean;
}

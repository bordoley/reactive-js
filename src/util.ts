import { Option, SideEffect1 } from "./functions";
/** @ignore */
export const DisposableLike_add = Symbol("DisposableLike_add");

/** @ignore */
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");

/** @ignore */
export const DisposableLike_exception = Symbol("DisposableLike_exception");

/** @ignore */
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

export type Exception = {
  readonly cause: unknown;
};

export type DisposableOrTeardown =
  | DisposableLike
  | SideEffect1<Option<Exception>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_exception]: Option<Exception>;

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
  [DisposableLike_dispose](error?: Exception): void;
}

/** @ignore */
export const PauseableLike_pause = Symbol("PausableLike_pause");

/** @ignore */
export const PauseableLike_resume = Symbol("PausableLike_resume");

export interface PauseableLike {
  [PauseableLike_pause](): void;
  [PauseableLike_resume](): void;
}

/** @ignore */
export const ContinuationLike_run = Symbol("ContinuationLike_run");

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface ContinuationLike extends DisposableLike {
  [ContinuationLike_run](): void;
}

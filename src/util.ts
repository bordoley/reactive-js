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

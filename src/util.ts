import { Option, SideEffect1 } from "./functions";

export const DisposableLike_add = Symbol("DisposableLike_add");
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

export type Error = {
  readonly cause: unknown;
};

export type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_error]: Option<Error>;

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

export const PauseableLike_pause = Symbol("PausableLike_pause");
export const PauseableLike_resume = Symbol("PausableLike_resume");

export interface PauseableLike {
  [PauseableLike_pause](): void;
  [PauseableLike_resume](): void;
}

export const ContinuationLike_run = Symbol("ContinuationLike_run");

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface ContinuationLike extends DisposableLike {
  [ContinuationLike_run](): void;
}

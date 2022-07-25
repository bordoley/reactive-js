import {
  createDisposable as createDisposableInternal,
  disposed as disposedInternal,
} from "./__internal__/util/Disposable";
import {
  DisposableLike_add as DisposableLike_add_internal,
  DisposableLike_dispose as DisposableLike_dispose_internal,
  DisposableLike_error as DisposableLike_error_internal,
  DisposableLike_isDisposed as DisposableLike_isDisposed_internal,
} from "./__internal__/util/DisposableLikeInternal";
import { Factory, Option, SideEffect1 } from "./functions";

/** @ignore */
export const DisposableLike_add: typeof DisposableLike_add_internal =
  DisposableLike_add_internal;

/** @ignore */
export const DisposableLike_dispose: typeof DisposableLike_dispose_internal =
  DisposableLike_dispose_internal;

/** @ignore */
export const DisposableLike_error: typeof DisposableLike_error_internal =
  DisposableLike_error_internal;

/** @ignore */
export const DisposableLike_isDisposed: typeof DisposableLike_isDisposed_internal =
  DisposableLike_isDisposed_internal;

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

export const createDisposable: Factory<DisposableLike> = () =>
  createDisposableInternal();
export const disposed: DisposableLike = disposedInternal;

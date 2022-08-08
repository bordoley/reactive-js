import {
  DisposableLike_add as DisposableLike_add_internal,
  DisposableLike_dispose as DisposableLike_dispose_internal,
  DisposableLike_exception as DisposableLike_error_internal,
  DisposableLike_isDisposed as DisposableLike_isDisposed_internal,
} from "./__internal__/util/__internal__DisposableLike";
import {
  createDisposable as createDisposableInternal,
  disposed as disposedInternal,
} from "./__internal__/util/__internal__Disposables";
import { Factory, Option, SideEffect1 } from "./functions";

/** @ignore */
export const DisposableLike_add: typeof DisposableLike_add_internal =
  DisposableLike_add_internal;

/** @ignore */
export const DisposableLike_dispose: typeof DisposableLike_dispose_internal =
  DisposableLike_dispose_internal;

/** @ignore */
export const DisposableLike_exception: typeof DisposableLike_error_internal =
  DisposableLike_error_internal;

/** @ignore */
export const DisposableLike_isDisposed: typeof DisposableLike_isDisposed_internal =
  DisposableLike_isDisposed_internal;

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

export const createDisposable: Factory<DisposableLike> = () =>
  createDisposableInternal();
export const disposed: DisposableLike = disposedInternal;

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

/** @ignore */
export const SinkLike_notify = Symbol("SinkLike_notify");
export interface SinkLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  [SinkLike_notify](next: T): void;
}

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

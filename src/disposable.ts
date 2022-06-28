import { Function1, SideEffect, SideEffect1, defer, pipe } from "./functions";
import { Option, isNone, isSome, none } from "./option";

/**
 * A wrapper around a caught error to handle corner cases such
 * as a function which throws undefined or string.
 */
export interface Error {
  /** The underlying cause of the error. */
  readonly cause: unknown;
}

export type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the `DisposableLike` was disposed with if disposed.
   */
  readonly error: Option<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly isDisposed: boolean;

  /**
   * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @returns `this`
   */
  add(
    this: this,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;

  /**
   * Dispose the resource. Must be idempotent.
   *
   * @param error An optional error that signals the resource is being disposed due to an error.
   */
  dispose(this: DisposableLike, error?: Error): void;
}

/**
 * Dispose `disposable` with an optional error.
 */
export const dispose =
  <T extends DisposableLike>(e?: Error): Function1<T, T> =>
  disposable => {
    disposable.dispose(e);
    return disposable;
  };

export const isDisposed = (disposable: DisposableLike): boolean =>
  disposable.isDisposed;

function addDisposableOrTeardown(
  parent: DisposableLike,
  child: DisposableLike | SideEffect1<Option<Error>>,
  ignoreChildErrors = false,
) {
  parent.add(child, ignoreChildErrors);
}

export const bindTo =
  <T extends DisposableLike>(child: DisposableLike): Function1<T, T> =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child, true);
    addDisposableOrTeardown(child, parent, true);
    return parent;
  };

export function add<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors: true,
): Function1<T, T>;
export function add<T extends DisposableLike>(
  child: DisposableLike,
): Function1<T, T>;
export function add<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (parent: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return parent;
  };
}

export function addTo<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors: true,
): Function1<T, T>;
export function addTo<T extends DisposableLike>(
  child: DisposableLike,
): Function1<T, T>;
export function addTo<T extends DisposableLike>(
  parent: DisposableLike,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (child: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return child;
  };
}

export const onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Option<Error>>,
  ): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export const onError =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export const onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown.call(disposable);
      }
    });
    return disposable;
  };

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

const doDispose = (self: DisposableLike, disposable: DisposableOrTeardown) => {
  const { error } = self;
  if (disposable instanceof Function) {
    try {
      disposable.call(self, error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    pipe(disposable, dispose(error));
  }
};

/**
 * Abstract base class for implementing the `DisposableLike` interface.
 *
 * @noInheritDoc
 */
export abstract class AbstractDisposable implements DisposableLike {
  /** @ignore */
  public isDisposed = false;

  private readonly disposables: Set<DisposableOrTeardown> = new Set();
  private _error: Option<Error> = none;

  /** @ignore */
  get error() {
    return this._error;
  }

  /** @ignore */
  add(
    this: this,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ) {
    const { disposables } = this;

    if (isDisposed(this)) {
      doDispose(this, disposable);
    } else if (!disposables.has(disposable)) {
      disposables.add(disposable);

      if (!(disposable instanceof Function)) {
        addDisposableOrTeardown(
          disposable,
          e => {
            disposables.delete(disposable);

            if (isSome(e) && !ignoreChildErrors) {
              pipe(this, dispose(e));
            }
          },
          true,
        );
      }
    }
  }

  /** @ignore */
  dispose(this: this, error?: Error) {
    if (!isDisposed(this)) {
      this.isDisposed = true;
      this._error = error;

      const { disposables } = this;
      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(this, disposable);
      }
    }
  }
}

class DisposableImpl extends AbstractDisposable {}

/**
 * Creates an empty `DisposableLike` instance.
 *
 * @param onDispose Optional teardown logic to attach to the newly created disposable.
 */
export const createDisposable = (
  onDispose?: (error?: Error) => void,
): DisposableLike => {
  const disposable = new DisposableImpl();
  if (isSome(onDispose)) {
    addDisposableOrTeardown(disposable, onDispose);
  }
  return disposable;
};

const _disposed: DisposableLike = {
  add(disposable: DisposableOrTeardown) {
    doDispose(_disposed, disposable);
  },
  error: none,
  isDisposed: true,
  dispose(_?: Error) {},
};

/**
 * A disposed `DisposableLike` instance.
 */
export const disposed: DisposableLike = _disposed;

/**
 * A `DisposableLike` container that allows replacing an inner `DisposableLike` with another,
 * disposing the previous inner `DisposableLike` in the process. Disposing the
 * container also disposes the inner `DisposableLike`. Disposing the inner `DisposableLike`
 * with an error, disposes the container with the error.
 *
 * @noInheritDoc
 */
export interface SerialDisposableLike extends DisposableLike {
  /**
   *  The inner `DisposableLike` that may be get or set. Setting the inner
   *  `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
   *  to the new one.
   */
  inner: DisposableLike;
}

class SerialDisposableImpl
  extends AbstractDisposable
  implements SerialDisposableLike
{
  private _inner: DisposableLike = disposed;

  /** @ignore */
  get inner() {
    return this._inner;
  }

  /** @ignore */
  set inner(newInner: DisposableLike) {
    const oldInner = this._inner;
    this._inner = newInner;

    if (oldInner !== newInner) {
      addDisposableOrTeardown(this, newInner);
      pipe(oldInner, dispose());
    }
  }
}

/**
 * Creates a new `SerialDisposableLike` instance containing a disposed instance.
 */
export const createSerialDisposable = (): SerialDisposableLike =>
  new SerialDisposableImpl();

/**
 * A `DisposableLike` that provides disposable semantics to an underlying resource.
 *
 * @noInheritDoc
 */
export interface DisposableValueLike<T> extends DisposableLike {
  /** The underlying resource */
  readonly value: T;
}

class DisposableValueImpl<T>
  extends AbstractDisposable
  implements DisposableValueLike<T>
{
  constructor(readonly value: T) {
    super();
  }
}

/**
 * Creates a new DisposableValueLike instance, which applies
 * the supplied `cleanup` side effect to `value` when disposed.
 */
export const createDisposableValue = <T>(
  value: T,
  cleanup: SideEffect1<T>,
): DisposableValueLike<T> =>
  pipe(new DisposableValueImpl(value), onDisposed(defer(value, cleanup)));

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = new AbortController();
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};

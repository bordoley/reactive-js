import { SideEffect, SideEffect1, defer, pipe } from "./functions";
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
  add(this: DisposableLike, disposable: DisposableOrTeardown): void;

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
  (e?: Error): SideEffect1<DisposableLike> =>
  disposable => {
    disposable.dispose(e);
  };

/**
 * Add `child` to `parent`, disposing the child when the parent is disposed.
 */
export const addDisposable = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  parent.add(child);
};

/**
 * Add `teardown` to `parent`, invoking `teardown` when `parent` is disposed.
 */
export const addTeardown = (
  parent: DisposableLike,
  teardown: SideEffect1<Option<Error>>,
) => {
  parent.add(teardown);
};

/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed with an error.
 */
export const addOnDisposedWithErrorTeardown = (
  parent: DisposableLike,
  teardown: SideEffect1<unknown>,
) => {
  addTeardown(parent, e => {
    if (isSome(e)) {
      teardown(e.cause);
    }
  });
};

/**
 * Add `teardown` to `parent` that is only invoked if `parent` is disposed without an error.
 */
export const addOnDisposedWithoutErrorTeardown = (
  parent: DisposableLike,
  teardown: SideEffect,
) => {
  addTeardown(parent, e => {
    if (isNone(e)) {
      teardown();
    }
  });
};

/**
 * Bind the provided disposables such that if either disposable is disposed,
 * it disposes the other.
 */
export const bindDisposables = (a: DisposableLike, b: DisposableLike) => {
  addDisposable(a, b);
  addDisposable(b, a);
};

const toDisposeOnErrorTeardown =
  (disposable: DisposableLike): SideEffect1<Option<Error>> =>
  (error?: Error) => {
    if (isSome(error)) {
      pipe(disposable, dispose(error));
    }
  };

/**
 * Add `child` to `parent`, only disposing child when `parent` is disposed with an error.
 */
export const addOnDisposedWithError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addTeardown(parent, toDisposeOnErrorTeardown(child));
};

/**
 * Add `child` to `parent`. If `child` is disposed with an error it disposed `parent`.
 */
export const addDisposableDisposeParentOnChildError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addDisposable(parent, child);
  addOnDisposedWithError(child, parent);
};

/**
 * Add `child` to `parent`, only disposing child when `parent` is disposed without an error.
 */
export const addOnDisposedWithoutError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addTeardown(parent, e => {
    if (isNone(e)) {
      pipe(child, dispose());
    }
  });
};

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

const doDispose = (
  self: DisposableLike,
  disposable: DisposableOrTeardown,
  error?: Error,
) => {
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
  add(this: AbstractDisposable, disposable: DisposableOrTeardown) {
    const disposables = this.disposables;

    if (this.isDisposed) {
      doDispose(this, disposable, this.error);
    } else if (!disposables.has(disposable)) {
      disposables.add(disposable);

      if (!(disposable instanceof Function)) {
        addTeardown(disposable, () => {
          disposables.delete(disposable);
        });
      }
    }
  }

  /** @ignore */
  dispose(this: AbstractDisposable, error?: Error) {
    if (!this.isDisposed) {
      this.isDisposed = true;
      this._error = error;

      const disposables = this.disposables;
      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(this, disposable, error);
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
    addTeardown(disposable, onDispose);
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

/**
 * Abstract base class for implementing the `SerialDisposableLike` interface.
 *
 * @noInheritDoc
 * */
export abstract class AbstractSerialDisposable
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
      addDisposableDisposeParentOnChildError(this, newInner);
      pipe(oldInner, dispose());
    }
  }
}

class SerialDisposableImpl extends AbstractSerialDisposable {}

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
): DisposableValueLike<T> => {
  const retval = new DisposableValueImpl(value);
  addTeardown(retval, defer(value, cleanup));
  return retval;
};

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = new AbortController();
  addTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};

import { SideEffect1, SideEffect, defer } from "./functions.ts";
import { isSome, none, Option, isNone } from "./option.ts";

/**
 * A wrapper around a caught error to handle corner cases such
 * as a function which throws undefined or string.
 */
export type Error = {
  /** The underlying cause of the error. */
  readonly cause: unknown;
};

export type DisposableOrTeardown =
  | DisposableLike
  | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the disposable was disposed with if disposed.
   */
  readonly error: Option<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly isDisposed: boolean;

  /**
   * Adds the given disposable to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @returns `this`
   */
  add(disposable: DisposableOrTeardown): void;

  /**
   * Dispose the resource. The operation is idempotent.
   *
   * @param error An optional error that to signal that the resource is being disposed due to an error.
   */
  dispose(error?: Error): void;
}

export const dispose = (disposable: DisposableLike, e?: Error) => {
  disposable.dispose(e);
};

export const addDisposable = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  parent.add(child);
};

export const addTeardown = (
  parent: DisposableLike,
  teardown: SideEffect1<Option<Error>>,
) => {
  parent.add(teardown);
};

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

export const bindDisposables = (a: DisposableLike, b: DisposableLike) => {
  addDisposable(a, b);
  addDisposable(b, a);
};

export const toDisposeOnErrorTeardown = (
  disposable: DisposableLike,
): SideEffect1<Option<Error>> => (error?: Error) => {
  if (isSome(error)) {
    dispose(disposable, error);
  }
};

export const addOnDisposedWithError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addTeardown(parent, toDisposeOnErrorTeardown(child));
};

export const addDisposableDisposeParentOnChildError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addDisposable(parent, child);
  addOnDisposedWithError(child, parent);
};

export const addOnDisposedWithoutError = (
  parent: DisposableLike,
  child: DisposableLike,
) => {
  addTeardown(parent, e => {
    if (isNone(e)) {
      dispose(child);
    }
  });
};

export const toErrorHandler = (
  disposable: DisposableLike,
): SideEffect1<unknown> => cause => dispose(disposable, { cause });

const doDispose = (disposable: DisposableOrTeardown, error?: Error) => {
  if (disposable instanceof Function) {
    try {
      disposable(error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    dispose(disposable, error);
  }
};

/**
 * Abstract base class for implementing the DisposableLike interface.
 *
 * @noInheritDoc
 * */
export abstract class AbstractDisposable implements DisposableLike {
  private _isDisposed = false;
  private readonly disposables: Set<DisposableOrTeardown> = new Set();
  private _error: Option<Error> = none;

  /** @ignore */
  get error() {
    return this._error;
  }

  /** @ignore */
  get isDisposed() {
    return this._isDisposed;
  }

  /** @ignore */
  add(disposable: DisposableOrTeardown) {
    const disposables = this.disposables;

    if (this.isDisposed) {
      doDispose(disposable, this.error);
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
  dispose(error?: Error) {
    if (!this.isDisposed) {
      this._isDisposed = true;
      this._error = error;

      const disposables = this.disposables;
      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(disposable, error);
      }
    }
  }
}

class DisposableImpl extends AbstractDisposable {}

/**
 * Creates an empty DisposableLike instance.
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
    doDispose(disposable);
  },
  error: none,
  isDisposed: true,
  dispose(_?: Error) {},
};

/**
 * A disposed DisposableLike instance.
 */
export const disposed: DisposableLike = _disposed;

/**
 * A Disposable container that allows replacing an inner Disposable with another,
 * disposing the previous inner disposable in the process. Disposing the
 * container also disposes the inner disposable.
 *
 * @noInheritDoc
 */
export interface SerialDisposableLike extends DisposableLike {
  /**
   *  The inner disposable that may be get or set. Setting the inner
   *  disposable disposes the old disposable unless it is reference equal
   *  to the new one.
   */
  inner: DisposableLike;
}

/**
 * Abstract base class for implementing the SerialDisposableLike interface.
 *
 * @noInheritDoc
 * */
export abstract class AbstractSerialDisposable extends AbstractDisposable
  implements SerialDisposableLike {
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
      dispose(oldInner);
    }
  }
}

class SerialDisposableImpl extends AbstractSerialDisposable {}

/**
 * Creates a new SerialDisposableLike instance containing a disposed instance.
 */
export const createSerialDisposable = (): SerialDisposableLike =>
  new SerialDisposableImpl();

/**
 * A Disposable that provides disposable semantics to an underlying resource.
 *
 * @noInheritDoc
 */
export interface DisposableValueLike<T> extends DisposableLike {
  readonly value: T;
}

class DisposableValueImpl<T> extends AbstractDisposable
  implements DisposableValueLike<T> {
  constructor(readonly value: T) {
    super();
  }
}

/**
 * Creates a new DisposableValueLike instance.
 */
export const createDisposableValue = <T>(
  value: T,
  cleanup: SideEffect1<T>,
): DisposableValueLike<T> => {
  const retval = new DisposableValueImpl(value);
  addTeardown(retval, defer(value, cleanup));
  return retval;
};

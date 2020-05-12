import { bind, SideEffect1, Operator } from "./functions.ts";
import { isSome, none, Option } from "./option.ts";

/**
 * A wrapper around a caught error to handle corner cases such
 * as a function which throws undefined or string.
 */
export type Exception = {
  /** The underlying cause of the error. */
  readonly cause: unknown;
};

export type DisposableOrTeardown =
  | DisposableLike
  | ((error?: Exception) => void);

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the disposable was disposed with if disposed.
   */
  readonly error: Option<Exception>;

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
  add(disposable: DisposableOrTeardown): this;

  /**
   * Dispose the resource. The operation is idempotent.
   *
   * @param error An optional error that to signal that the resource is being disposed due to an error.
   */
  dispose(error?: Exception): void;
}

export const dispose = (disposable: DisposableLike, e?: Exception) => {
  disposable.dispose(e);
};

export const disposeOnError = (disposable: DisposableLike) => (
  error?: Exception,
) => {
  if (isSome(error)) {
    dispose(disposable, error);
  }
};
export function add<T extends DisposableLike>(
  disposable: T,
  firstChild: DisposableOrTeardown,
  ...others: DisposableOrTeardown[]
): T;
export function add<T extends DisposableLike>(
  disposable: T,
  ...disposables: DisposableOrTeardown[]
): T {
  for (const d of disposables) {
    disposable.add(d);
  }
  return disposable;
}

export const addDisposableOrTeardown = <T extends DisposableLike>(
  d: DisposableOrTeardown,
): Operator<T, T> => disposable => add(disposable, d);

export const toErrorHandler = (
  disposable: DisposableLike,
): SideEffect1<unknown> => cause => dispose(disposable, { cause });

const doDispose = (disposable: DisposableOrTeardown, error?: Exception) => {
  if (disposable instanceof Function) {
    try {
      disposable(error);
    } catch (_) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
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
  private _error: Option<Exception> = none;

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
        add(disposable, () => {
          disposables.delete(disposable);
        });
      }
    }

    return this;
  }

  /** @ignore */
  dispose(error?: Exception) {
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
  onDispose?: (error?: Exception) => void,
): DisposableLike => {
  const disposable = new DisposableImpl();
  return isSome(onDispose) ? add(disposable, onDispose) : disposable;
};

const _disposed: DisposableLike = {
  add(disposable: DisposableOrTeardown) {
    doDispose(disposable);
    return _disposed;
  },
  error: none,
  isDisposed: true,
  dispose(_?: Exception) {},
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
      add(this, newInner);
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
): DisposableValueLike<T> =>
  add(new DisposableValueImpl(value), bind(cleanup, value));

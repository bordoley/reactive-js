/**
 * A wrapper around a caught exception to handle corner cases such
 * as a function which throws undefined or string.
 */
export interface ErrorLike {
  /** The underlying cause of the error. */
  readonly cause: unknown;
}

type DisposableOrTeardown = DisposableLike | ((error?: ErrorLike) => void);

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
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
  add(disposable: DisposableLike | ((error?: ErrorLike) => void)): this;

  /**
   * Dispose the resource. The operation is idempotent.
   *
   * @param error An optional error that to signal that the resource is being disposed due to an error.
   */
  dispose(error?: ErrorLike): void;
}

const doDispose = (disposable: DisposableOrTeardown, error?: ErrorLike) => {
  if (disposable instanceof Function) {
    try {
      disposable(error);
    } catch (_) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
       */
    }
  } else {
    disposable.dispose(error);
  }
};

class DisposableImpl implements DisposableLike {
  isDisposed = false;
  private readonly disposables: Set<DisposableOrTeardown> = new Set();
  private error?: ErrorLike = undefined;

  add(disposable: DisposableOrTeardown) {
    const disposables = this.disposables;

    if (this.isDisposed) {
      doDispose(disposable, this.error);
    } else if (!disposables.has(disposable)) {
      disposables.add(disposable);

      if (!(disposable instanceof Function)) {
        disposable.add(() => {
          disposables.delete(disposable);
        });
      }
    }

    return this;
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.isDisposed = true;
      this.error = error;

      const disposables = this.disposables;
      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(disposable, error);
      }
    }
  }
}

/**
 * Creates an empty DisposableLike instance.
 *
 * @param onDispose Optional teardown logic to attach to the newly created disposable.
 */
export const createDisposable = (
  onDispose?: (error?: ErrorLike) => void,
): DisposableLike => {
  const disposable = new DisposableImpl();
  if (onDispose !== undefined) {
    disposable.add(onDispose);
  }
  return disposable;
};

const _disposed: DisposableLike = {
  add(disposable: DisposableOrTeardown) {
    doDispose(disposable);
    return _disposed;
  },
  isDisposed: true,
  dispose(_?: ErrorLike) {},
};

/**
 * A disposed DisposableLike instance.
 */
export const disposed: DisposableLike = _disposed;

export function add<This extends DisposableLike>(
  this: { disposable: DisposableLike } & This,
  disposable: DisposableLike | ((error?: ErrorLike) => void),
): This {
  this.disposable.add(disposable);
  return this;
}

export function dispose(
  this: { disposable: DisposableLike },
  error?: ErrorLike,
) {
  this.disposable.dispose(error);
}

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

class SerialDisposableImpl implements SerialDisposableLike {
  _inner: DisposableLike = disposed;
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  get inner() {
    return this._inner;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  set inner(newInner: DisposableLike) {
    if (this.isDisposed) {
      newInner.dispose();
    } else {
      const oldInner = this._inner;
      this._inner = newInner;

      if (oldInner !== newInner) {
        this.add(newInner);
        oldInner.dispose();
      }
    }
  }
}

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
  value: T;
}

class DisposableValueImpl<T> implements DisposableValueLike<T> {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(readonly value: T) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }
}

/**
 * Creates a new DisposableValueLike instance.
 */
export const createDisposableValue = <T>(
  value: T,
  cleanup: (v: T) => void,
): DisposableValueLike<T> =>
  new DisposableValueImpl(value).add(() => cleanup(value));

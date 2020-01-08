/**
 * A wrapper around a caught error to handle wierd corner cases like
 * a function which throws undefined or a string.
 */
export interface ErrorLike {
  /** The underlying cause of the error. */
  readonly cause: unknown;
}

export type DisposableOrTeardown =
  | DisposableLike
  | ((error?: ErrorLike) => void);

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * Returns true if this resource has been disposed.
   */
  readonly isDisposed: boolean;

  /**
   * Adds the given disposable to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @param disposables
   */
  add(disposable: DisposableOrTeardown): this;

  /**
   * Dispose the resource, the operation should be idempotent.
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
  private readonly disposables: Array<DisposableOrTeardown> = [];
  private error?: ErrorLike = undefined;

  add(disposable: DisposableOrTeardown) {
    if (this.isDisposed) {
      doDispose(disposable, this.error);
    } else {
      if (!this.disposables.includes(disposable)) {
        this.disposables.push(disposable);

        if (!(disposable instanceof Function)) {
          disposable.add(() => {
            const disposables = this.disposables;
            const index = disposables.indexOf(disposable);
            if (index > -1) {
              disposables.splice(index, 1);
            }
          });
        }
      }
    }

    return this;
  }

  dispose(error?: ErrorLike) {
    if (!this.isDisposed) {
      this.isDisposed = true;
      this.error = error;

      let disposable = this.disposables.shift();
      while (disposable !== undefined) {
        doDispose(disposable, error);
        disposable = this.disposables.shift();
      }
    }
  }
}

/**
 * Creates an empty DisposableLike instance.
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
  add(...disposables: DisposableOrTeardown[]) {
    for (const d of disposables) {
      doDispose(d);
    }
    return _disposed;
  },
  isDisposed: true,
  dispose(_?: ErrorLike) {},
};

/**
 * A disposed DisposableLike instance.
 */
export const disposed: DisposableLike = _disposed;

export const disposableMixin = {
  add<This extends DisposableLike>(
    this: { disposable: DisposableLike } & This,
    disposable: DisposableOrTeardown,
  ): This {
    this.disposable.add(disposable);
    return this;
  },
  dispose(this: { disposable: DisposableLike }, error?: ErrorLike) {
    this.disposable.dispose(error);
  },
};

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
  readonly add = disposableMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = disposableMixin.dispose;

  get inner() {
    return this._inner;
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

  get isDisposed() {
    return this.disposable.isDisposed;
  }
}

/**
 * Creates a new SerialDisposableLike instance containing a disposed instance.
 */
export const createSerialDisposable = (): SerialDisposableLike =>
  new SerialDisposableImpl();

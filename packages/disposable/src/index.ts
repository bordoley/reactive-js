export type DisposableOrTeardown = DisposableLike | (() => void);

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * Returns true if this resource has been disposed.
   */
  readonly isDisposed: boolean;

  /**
   * Adds the given disposables to this container or disposes them if the container has been disposed.
   *
   * @param disposable
   * @param disposables
   */
  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): this;

  /**
   * Dispose the resource, the operation should be idempotent.
   */
  dispose(): void;

  /**
   * Removes and disposes the given disposables if they are part of this container.
   *
   * @param disposable
   * @param disposables
   */
  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): this;
}

const doDispose = (disposable: DisposableOrTeardown) => {
  if (disposable instanceof Function) {
    try {
      disposable();
    } catch (_) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
       */
    }
  } else {
    disposable.dispose();
  }
};

class DisposableImpl implements DisposableLike {
  isDisposed = false;
  private readonly disposables: Array<DisposableOrTeardown> = [];

  add(...disposables: DisposableOrTeardown[]) {
    if (this.isDisposed) {
      for (const d of disposables) {
        doDispose(d);
      }
    } else {
      for (const d of disposables) {
        if (!this.disposables.includes(d)) {
          this.disposables.push(d);

          if (!(d instanceof Function)) {
            d.add(() => { this.doRemove(d) })
          }
        }
      }
    }

    return this;
  }

  dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;

      let disposable = this.disposables.shift();
      while (disposable !== undefined) {
        doDispose(disposable);
        disposable = this.disposables.shift();
      }
    }
  }

  remove(...disposables: DisposableOrTeardown[]) {
    if (!this.isDisposed) {
      for (const d of disposables) {
        if (this.doRemove(d)) {
          doDispose(d);
        }
      }
    }
    return this;
  }

  private doRemove(d: DisposableOrTeardown): boolean {
    const index = this.disposables.indexOf(d);

    if (index > -1) {
      this.disposables.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Creates an empty DisposableLike instance.
 */
export const createDisposable = (onDispose?: () => void): DisposableLike => {
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
  dispose() {},
  remove(..._: DisposableOrTeardown[]) {
    return _disposed;
  },
};

/**
 * A disposed DisposableLike instance.
 */
export const disposed: DisposableLike = _disposed;

/**
 * Throws an exception if the given disposable is disposed.
 *
 * @param disposable
 */
export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

/**
 * A Disposable container that allows replacing a contained Disposable with another,
 * disposing the previously contained disposable in the process. Disposing the
 * container also disposes the contained disposable.
 *
 * @noInheritDoc
 */
export interface SerialDisposableLike extends DisposableLike {
  /** The inner disposable that may be get or set. */
  disposable: DisposableLike;
}

class SerialDisposableImpl extends DisposableImpl
  implements SerialDisposableLike {
  private _disposable: DisposableLike = disposed;

  get disposable(): DisposableLike {
    return this._disposable;
  }

  set disposable(newDisposable: DisposableLike) {
    if (this.isDisposed) {
      newDisposable.dispose();
    } else {
      const oldDisposable = this.disposable;
      this._disposable = newDisposable;

      if (oldDisposable !== newDisposable) {
        this.add(newDisposable).remove(oldDisposable);
      }
    }
  }
}

/**
 * Creates a new SerialDisposableLike instance containing a disposed instance.
 */
export const createSerialDisposable = (): SerialDisposableLike =>
  new SerialDisposableImpl();

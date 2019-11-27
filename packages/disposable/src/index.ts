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
   */
  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void;

  /**
   * Dispose the resource, the operation should be idempotent.
   */
  dispose(): void;

  /**
   * Removes and disposes the given disposables if they are part of this container.
   */
  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void;
}

const doDispose = (disposable: DisposableOrTeardown) => {
  if (disposable instanceof Function) {
    try {
      disposable();
    } catch (_error) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
       */
    }
  } else {
    disposable.dispose();
  }
};

class DisposableImpl implements DisposableLike {
  get isDisposed(): boolean {
    return this._isDisposed;
  }
  private _isDisposed = false;
  private readonly disposables: Array<DisposableOrTeardown> = [];

  add(...disposables: DisposableOrTeardown[]) {
    if (this.isDisposed) {
      for (let d of disposables) {
        doDispose(d);
      }
    } else {
      for (let d of disposables) {
        this.doAdd(d);
      }
    }
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;

      for (let disposable of this.disposables) {
        doDispose(disposable);
      }

      this.disposables.length = 0;
    }
  }

  remove(...disposables: DisposableOrTeardown[]) {
    if (!this.isDisposed) {
      for (let d of disposables) {
        this.doRemove(d);
      }
    }
  }

  private doAdd(disposable: DisposableOrTeardown) {
    if (this.disposables.indexOf(disposable) < 0) {
      this.disposables.push(disposable);
    }
  }

  private doRemove(disposable: DisposableOrTeardown) {
    const index = this.disposables.indexOf(disposable);
    if (index > -1) {
      const [old] = this.disposables.splice(index, 1);
      doDispose(old);
    }
  }
}

/**
 * Creates an empty DisposableLike instance.
 */
export const create = (): DisposableLike => new DisposableImpl();

/**
 * A disposed DisposableLike instance.
 */
export const disposed: DisposableLike = create();
disposed.dispose();

/**
 * Throws an exception if the given disposable is disposed.
 * @param disposable
 */
export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

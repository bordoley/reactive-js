export type DisposableOrTeardown = DisposableLike | (() => void);

export interface DisposableLike {
  readonly isDisposed: boolean;
  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void;
  dispose(): void;
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

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    if (this.isDisposed) {
      doDispose(disposable);
      for (let d of disposables) {
        doDispose(d);
      }
    } else {
      this.doAdd(disposable);
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

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    if (!this.isDisposed) {
      this.doRemove(disposable);
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

export const create = (): DisposableLike => new DisposableImpl();

export const disposed: DisposableLike = create();
disposed.dispose();

export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

export type DisposableOrTeardown = DisposableLike | (() => void);

export interface DisposableLike {
  add(disposable: DisposableOrTeardown): void;
  remove(disposable: DisposableOrTeardown): void;
  readonly isDisposed: boolean;
  dispose(): void;
}

const doDispose = (disposable: DisposableOrTeardown) => {
  if (disposable instanceof Function) {
    disposable();
  } else {
    disposable.dispose();
  }
};

class DisposableImpl implements DisposableLike {
  private readonly disposables: Array<DisposableOrTeardown> = [];
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
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

  add(disposable: DisposableOrTeardown) {
    if (this.isDisposed) {
      doDispose(disposable);
    } else if (this.disposables.indexOf(disposable) < 0) {
      this.disposables.push(disposable);
    }
  }

  remove(disposable: DisposableOrTeardown) {
    if (!this.isDisposed) {
      const index = this.disposables.indexOf(disposable);
      if (index > -1) {
        const [old] = this.disposables.splice(index, 1);
        doDispose(old);
      }
    }
  }
}

const create = (): DisposableLike => new DisposableImpl();

class DisposedDisposableImpl implements DisposableLike {
  readonly isDisposed = true;

  dispose() {}

  add(disposable: DisposableOrTeardown) {
    doDispose(disposable);
  }

  remove(disposable: DisposableOrTeardown) {}
}

const disposed: DisposableLike = new DisposedDisposableImpl();

export const Disposable = {
  create,
  disposed,
};

export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

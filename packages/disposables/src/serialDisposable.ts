import { DisposableLike, Disposable } from "./disposable";

export interface SerialDisposableLike extends DisposableLike {
  disposable: DisposableLike;
}

class SerialDisposableImpl implements SerialDisposableLike {
  private _disposable: DisposableLike;
  private _isDisposed = false;

  constructor(disposable: DisposableLike) {
    this._disposable = disposable;
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;
      this.disposable.dispose();
    }
  }

  get disposable(): DisposableLike {
    return this._disposable;
  }

  set disposable(newDisposable: DisposableLike) {
    const oldDisposable = this.disposable;
    this._disposable = newDisposable;

    if (oldDisposable !== newDisposable) {
      oldDisposable.dispose();
    }

    if (this.isDisposed) {
      newDisposable.dispose();
    }
  }
}

export const SerialDisposable = {
  create: () => new SerialDisposableImpl(Disposable.disposed),
};

import { DisposableLike, Disposable } from "./disposable";

export interface SerialDisposableLike extends DisposableLike {
  innerDisposable: DisposableLike;
}

class SerialDisposableImpl implements SerialDisposableLike {
  private _innerDisposable: DisposableLike;
  private _isDisposed = false;

  constructor(innerDisposable: DisposableLike) {
    this._innerDisposable = innerDisposable;
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;
      this.innerDisposable.dispose();
    }
  }

  get innerDisposable(): DisposableLike {
    return this._innerDisposable;
  }

  set innerDisposable(newDisposable: DisposableLike) {
    const oldDisposable = this.innerDisposable;
    this._innerDisposable = newDisposable;

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

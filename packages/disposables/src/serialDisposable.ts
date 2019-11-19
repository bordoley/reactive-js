import { DisposableLike, DisposableOrTeardown, Disposable } from "./disposable";

export interface SerialDisposableLike extends DisposableLike {
  disposable: DisposableLike;
}

class SerialDisposableImpl implements SerialDisposableLike {
  private _disposable: DisposableLike = Disposable.disposed;
  private readonly delegate = Disposable.create();

  get isDisposed(): boolean {
    return this.delegate.isDisposed;
  }

  dispose() {
    if (!this.isDisposed) {
      this.disposable.dispose();
      this.delegate.dispose()
    }
  }

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
        this.add(newDisposable);
        this.remove(oldDisposable);
      }
    }
  }

  add(disposable: DisposableOrTeardown) {
    this.delegate.add(disposable);
  }

  remove(disposable: DisposableOrTeardown) {
    this.delegate.remove(disposable);
  }
}

export const SerialDisposable = {
  create: () => new SerialDisposableImpl(),
};

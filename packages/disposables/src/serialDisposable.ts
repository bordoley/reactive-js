import { Disposable, DisposableLike, DisposableOrTeardown } from "./disposable";

export interface SerialDisposableLike extends DisposableLike {
  disposable: DisposableLike;
}

class SerialDisposableImpl implements SerialDisposableLike {
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

  get isDisposed(): boolean {
    return this.delegate.isDisposed;
  }

  private _disposable: DisposableLike = Disposable.disposed;

  private readonly delegate = Disposable.create();

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.delegate.add.apply(this.delegate, [disposable, ...disposables]);
  }

  dispose() {
    if (!this.isDisposed) {
      this.disposable.dispose();
      this.delegate.dispose();
    }
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.delegate.remove.apply(this.delegate, [disposable, ...disposables]);
  }
}

export const SerialDisposable = {
  create: (): SerialDisposableLike => new SerialDisposableImpl(),
};

import { DisposableLike } from "./disposable";

export interface CompositeDisposableLike extends DisposableLike {
  add(disposable: DisposableLike): CompositeDisposableLike;
  remove(disposable: DisposableLike): CompositeDisposableLike;
}

class CompositeDisposableImpl implements CompositeDisposableLike {
  private readonly disposables: Array<DisposableLike> = [];
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;

      for (let disposable of this.disposables) {
        disposable.dispose();
      }

      this.disposables.length = 0;
    }
  }

  add(disposable: DisposableLike) {
    if (this.isDisposed) {
      disposable.dispose();
    } else {
      this.disposables.push(disposable);
    }
    return this;
  }

  remove(disposable: DisposableLike) {
    if (!this.isDisposed) {
      const index = this.disposables.indexOf(disposable);
      if (index !== -1) {
        const [old] = this.disposables.splice(index, 1);
        old.dispose();
      }
    }
    return this;
  }
}

export const CompositeDisposable = {
  create: (): CompositeDisposableLike => new CompositeDisposableImpl(),
};

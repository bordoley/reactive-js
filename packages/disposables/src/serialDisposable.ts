import {
  AbstractDisposable,
  DisposableLike,
  Disposable,
} from './disposable';

export interface SerialDisposableLike extends DisposableLike {
  innerDisposable: DisposableLike;
}

class SerialDisposableImpl extends AbstractDisposable
  implements SerialDisposableLike {
  private _innerDisposable: DisposableLike;

  constructor(innerDisposable: DisposableLike) {
    super();
    this._innerDisposable = innerDisposable;
  }

  get innerDisposable(): DisposableLike {
    return this._innerDisposable;
  }

  protected onDispose() {
    this.innerDisposable.dispose();
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

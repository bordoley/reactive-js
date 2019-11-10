export interface DisposableLike {
  readonly isDisposed: boolean;
  dispose(): void;
}

abstract class AbstractDisposable implements DisposableLike {
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  protected abstract onDispose(): void;

  private tryOnDispose() {
    try {
      this.onDispose();
    } catch (e) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
       */
    }
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;
      this.tryOnDispose();
    }
  }
}

class TeardownDisposable extends AbstractDisposable {
  private teardown: () => void;

  constructor(teardown: () => void) {
    super();
    this.teardown = teardown;
  }

  onDispose() {
    this.teardown();
  }
}

const create = (teardown: () => void): DisposableLike =>
  new TeardownDisposable(teardown);

class EmptyDisposable implements DisposableLike {
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    this._isDisposed = true;
  }
}

const empty = (): DisposableLike =>
  new EmptyDisposable();

const disposed: DisposableLike = new EmptyDisposable();
disposed.dispose();

export const Disposable = {
  create,
  empty,
  disposed
};

export interface CompositeDisposableLike extends DisposableLike {
  add(disposable: DisposableLike): CompositeDisposableLike;
  remove(disposable: DisposableLike): CompositeDisposableLike;
}

class CompositeDisposableImpl extends AbstractDisposable
  implements CompositeDisposableLike {
  private disposables: Array<DisposableLike> = [];

  protected onDispose() {
    const disposables = this.disposables;
    this.disposables = [];

    for (let disposable of disposables) {
      disposable.dispose();
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
        this.disposables.splice(index, 1);
      }
    }
    return this;
  }
}

export const CompositeDisposable = {
  create: (): CompositeDisposableLike => new CompositeDisposableImpl(),
}

export interface SerialDisposableLike extends DisposableLike {
  innerDisposable: DisposableLike;
  setInnerDisposable(disposable: DisposableLike): void;
}

class SerialDisposableImpl extends AbstractDisposable implements SerialDisposableLike {
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

  setInnerDisposable(newDisposable: DisposableLike): void {
    const oldDisposable = this.innerDisposable;
    this._innerDisposable = newDisposable

    if (oldDisposable !== newDisposable) {
      oldDisposable.dispose();
    };

    if (this.isDisposed) {
      newDisposable.dispose();
    }
  }
}

export const SerialDisposable = {
  create: () => new SerialDisposableImpl(disposed),
};


export interface DisposableLike {
  readonly isDisposed: boolean;
  dispose(): void;
}

class TeardownDisposable implements DisposableLike {
  private readonly teardown: () => void;
  private _isDisposed = false;

  constructor(teardown: () => void) {
    this.teardown = teardown;
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  private tryTeardown() {
    try {
      this.teardown();
    } catch (e) {
      /* Proactively catch exceptions thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected exceptions.
       */
    }
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;
      this.tryTeardown();
    }
  }
}

class EmptyDisposable implements DisposableLike {
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    this._isDisposed = true;
  }
}

const create = (teardown?: () => void): DisposableLike =>
  teardown !== undefined
    ? new TeardownDisposable(teardown)
    : new EmptyDisposable();

class ComposedDisposable implements DisposableLike {
  private readonly disposables: DisposableLike[];
  private _isDisposed = false;

  constructor(disposables: DisposableLike[]) {
    this.disposables = disposables;
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = true;
      for (let disp of this.disposables) {
        disp.dispose();
      }
    }
  }
}
const compose = (
  disposable1: DisposableLike,
  disposable2: DisposableLike,
  ...disposables: DisposableLike[]
): DisposableLike =>
  new ComposedDisposable([disposable1, disposable2, ...disposables]);

const disposed: DisposableLike = {
  isDisposed: true,
  dispose: () => {},
};

export const Disposable = {
  compose,
  create,
  disposed,
};

export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

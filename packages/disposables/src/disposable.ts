export interface DisposableLike {
  readonly isDisposed: boolean;
  dispose(): void;
}

export abstract class AbstractDisposable implements DisposableLike {
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

const compose = (
  disposable: DisposableLike,
  ...disposables: DisposableLike[]
): DisposableLike =>
  create(() => {
    disposable.dispose();

    for (let disp of disposables) {
      disp.dispose();
    }
  });

class EmptyDisposable implements DisposableLike {
  private _isDisposed = false;

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  dispose() {
    this._isDisposed = true;
  }
}

const empty = (): DisposableLike => new EmptyDisposable();

const disposed: DisposableLike = new EmptyDisposable();
disposed.dispose();

export const Disposable = {
  compose,
  create,
  empty,
  disposed,
};

export const throwIfDisposed = (disposable: DisposableLike) => {
  if (disposable.isDisposed) {
    throw new Error("Disposed");
  }
};

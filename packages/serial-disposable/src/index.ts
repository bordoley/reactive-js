import {
  create as createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  disposed,
} from "@reactive-js/disposable";

/**
 * A Disposable container that allows replacing a contained Disposable with another,
 * disposing the previously contained disposable in the process. Disposing the
 * container also disposes the contained disposable.
 *
 * @noInheritDoc
 */
export interface SerialDisposableLike extends DisposableLike {
  /** The inner disposable that may be get or set. */
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

  private _disposable: DisposableLike = disposed;

  private readonly delegate = createDisposable();

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.delegate.add(disposable, ...disposables);
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
    this.delegate.remove(disposable, ...disposables);
  }
}

/**
 * Creates a new SerialDisposableLike instance containing a disposed instance.
 */
export const create = (): SerialDisposableLike => new SerialDisposableImpl();

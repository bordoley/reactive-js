import {
  createDisposable,
  DisposableOrTeardown,
  DisposableLike,
} from "@reactive-js/disposable";

/** @ignore */
export interface EnumeratorLike<T> extends DisposableLike {
  readonly isCompleted: boolean;
  readonly current: T;
  readonly hasNext: boolean;
  moveNext(): boolean;
}

/** @ignore */
export abstract class AbstractEnumerator<T> implements EnumeratorLike<T> {
  private readonly disposable = createDisposable();

  abstract get current(): T;

  abstract get hasNext(): boolean;

  abstract get isCompleted(): boolean;

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.disposable.dispose();
  }

  abstract moveNext(): boolean;

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
  }
}

/** @ignore */
export interface EnumerableLike<T> {
  getEnumerator(): EnumeratorLike<T>;
}

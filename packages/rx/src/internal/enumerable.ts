import {
  createDisposable,
  DisposableOrTeardown,
  DisposableLike,
} from "@reactive-js/disposable";
import { ObservableLike, ObserverLike, ErrorLike } from "./interfaces";
import { createVirtualTimeSchedulerResource } from "@reactive-js/schedulers";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { observe } from "./observe";

/** @ignore */
export interface EnumeratorLike<T> extends DisposableLike {
  readonly current: T;
  readonly hasCurrent: boolean;

  moveNext(): boolean;
}

/** @ignore */
export abstract class AbstractEnumerator<T> implements EnumeratorLike<T> {
  private readonly disposable = createDisposable();

  abstract get current(): T;

  abstract get hasCurrent(): boolean;

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

class ObservableEnumerator<T> extends AbstractEnumerator<T>
  implements ObserverLike<T> {
  private _current: T | undefined;
  hasCurrent = false;
  private error?: ErrorLike = undefined;
  private readonly scheduler = createVirtualTimeSchedulerResource(1);

  constructor(observable: ObservableLike<T>) {
    super();

    this.add(pipe(observable, observe(this), subscribe(this.scheduler)));
  }

  get current(): T {
    if (!this.hasCurrent) {
      throw new Error("no current value");
    }
    return this._current as T;
  }

  moveNext() {
    this.hasCurrent = false;
    this.scheduler.next();

    const error = this.error;
    if (error !== undefined) {
      const { cause } = error;
      throw cause;
    }

    const hasCurrent = this.hasCurrent;
    if (!hasCurrent) {
      this.dispose();
    }
    return hasCurrent;
  }

  onComplete(error?: ErrorLike) {
    this.error = error;
  }

  onNext(next: T) {
    this._current = next;
    this.hasCurrent = true;
  }
}

/** @ignore */
export const createObservableEnumerator = <T>(
  observable: ObservableLike<T>,
): EnumeratorLike<T> => new ObservableEnumerator(observable);

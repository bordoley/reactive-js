import {
  EnumerableLike,
  EnumeratorLike,
  SubscriberLike,
  ObservableLike,
} from "./interfaces";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import {
  DisposableLike,
  createDisposable,
  disposableMixin,
  ErrorLike,
} from "@reactive-js/disposable";

const done: IteratorResult<any> = { done: true, value: undefined };

class EnumeratorIterator<T> implements Iterator<T> {
  constructor(private readonly enumerator: EnumeratorLike<T>) {}

  next<T>(): IteratorResult<T> {
    return this.enumerator.moveNext()
      ? { done: false, value: this.enumerator.current }
      : done;
  }

  return<T>(value?: any): IteratorResult<T> {
    this.enumerator.dispose();
    return value !== undefined ? { done: true, value } : done;
  }

  throw<T>(error?: unknown): IteratorResult<T> {
    this.enumerator.dispose();
    if (error !== undefined) {
      throw error;
    }
    return done;
  }
}

const toIterator = <T>(enumerator: EnumeratorLike<T>): Iterator<T> =>
  new EnumeratorIterator(enumerator);

const alwaysTrue = () => true;

class EnumeratorSubscriber<T> implements EnumeratorLike<T>, SubscriberLike<T> {
  readonly add = disposableMixin.add;
  private continuation?: SchedulerContinuationLike;
  current: any;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
  private error: ErrorLike | undefined = undefined;
  hasCurrent = false;
  readonly now = 0;

  constructor() {
    this.add(error => {
      this.error = error;
    });
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  moveNext(): boolean {
    this.hasCurrent = false;
    this.current = undefined;
    this.error = undefined;

    while (!this.hasCurrent) {
      if (this.isDisposed || this.continuation === undefined) {
        break;
      }

      const result = this.continuation.run(alwaysTrue) || undefined;
      if (result !== undefined) {
        this.continuation = result.continuation;
      }

      const error = this.error;
      if (error !== undefined) {
        const { cause } = error;
        throw cause;
      }
    }

    return this.hasCurrent;
  }

  notify(next: T): void {
    this.current = next;
    this.hasCurrent = true;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    _?: number,
  ): DisposableLike {
    if (!this.isDisposed) {
      this.continuation = continuation;
    }
    return this;
  }
}

/** @ignore */
export const enumerableMixin = {
  [Symbol.iterator]: function<T>(this: EnumerableLike<T>) {
    const enumerator = this.enumerate();
    return toIterator(enumerator);
  },
  enumerate<T>(this: EnumerableLike<T>): EnumeratorLike<T> {
    const subscriber = new EnumeratorSubscriber<T>();
    this.subscribe(subscriber);
    return subscriber;
  },
};

/** @ignore */
export const isEnumerable = <T>(obs: ObservableLike<T>) =>
  (obs as any).enumerate !== undefined;

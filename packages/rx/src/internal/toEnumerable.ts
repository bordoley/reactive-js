import { disposableMixin, DisposableLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import {
  createVirtualTimeSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "@reactive-js/schedulers";
import {
  ObservableLike,
  ErrorLike,
  EnumerableLike,
  EnumeratorLike,
  SubscriberLike,
} from "./interfaces";
import { enumerableMixin, isEnumerable } from "./enumerable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";

class VirtualTimeObservableEnumerator<T>
  implements EnumeratorLike<T>, SubscriberLike<T> {
  add = disposableMixin.add;
  current: any = undefined;
  readonly disposable: VirtualTimeSchedulerResourceLike;
  dispose = disposableMixin.dispose;
  private error: ErrorLike | undefined = undefined;
  hasCurrent = false;

  constructor() {
    this.disposable = createVirtualTimeSchedulerResource(1);
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.disposable.now;
  }

  next(next: T) {
    this.current = next;
    this.hasCurrent = true;
  }

  complete(error?: ErrorLike) {
    this.dispose();
    this.error = error;
  }

  moveNext(): boolean {
    this.hasCurrent = false;
    this.current = undefined;

    let done = false;
    while (!this.hasCurrent) {
      if (this.isDisposed) {
        return false;
      }

      done = this.disposable.next().done || false;

      const error = this.error;
      if (error !== undefined) {
        const { cause } = error;
        throw cause;
      }

      if (done) {
        this.dispose();
        return false;
      }
    }

    return true;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    delay?: number,
  ): DisposableLike {
    const schedulerSubscription = this.disposable.schedule(continuation, delay);
    this.add(schedulerSubscription);
    return schedulerSubscription;
  }
}

class EnumerableObservable<T> implements EnumerableLike<T> {
  [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(private readonly observable: ObservableLike<T>) {}

  enumerate() {
    const subscriber = new VirtualTimeObservableEnumerator<T>();
    this.subscribe(subscriber);
    return subscriber;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const toEnumerable = <T>(): OperatorLike<
  ObservableLike<T>,
  EnumerableLike<T>
> => observable =>
  isEnumerable(observable)
    ? (observable as EnumerableLike<T>)
    : new EnumerableObservable(observable);

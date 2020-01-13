import { ErrorLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import {
  createVirtualTimeScheduler,
  VirtualTimeSchedulerLike,
} from "@reactive-js/schedulers";
import {
  ObservableLike,
  EnumerableObservableLike,
  EnumeratorLike,
  SubscriberLike,
} from "./interfaces";
import { enumerableMixin, isEnumerable } from "./enumerable";
import { AbstractSubscriber } from "./subscriber";

class VirtualTimeEnumeratorSubscriber<T> extends AbstractSubscriber<T>
  implements EnumeratorLike<void, T>, SubscriberLike<T> {
  current: any = undefined;
  private error: ErrorLike | undefined = undefined;
  hasCurrent = false;

  constructor(private readonly vts: VirtualTimeSchedulerLike) {
    super(vts);

    this.add(vts).add(error => {
      this.error = error;
    });
    vts.add(this);
  }

  notify(next: T) {
    this.current = next;
    this.hasCurrent = true;
  }

  move(): boolean {
    this.hasCurrent = false;
    this.current = undefined;

    while (!this.hasCurrent && !this.isDisposed) {
      this.vts.move();

      const error = this.error;
      if (error !== undefined) {
        const { cause } = error;
        throw cause;
      }
    }

    return this.hasCurrent;
  }
}

class VirtualTimeEnumerableObservable<T> implements EnumerableObservableLike<T> {
  [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(private readonly observable: ObservableLike<T>) {}

  enumerate() {
    const scheduler = createVirtualTimeScheduler(1);
    const subscriber = new VirtualTimeEnumeratorSubscriber<T>(scheduler);
    this.subscribe(subscriber);
    return subscriber;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

/**
 * Converts an `ObservableLike` source into an `EnumerableObservableLike` source. If the
 * source itself is `EnumerableObservableLike`, then this function returns the source. Otherwise,
 * a `VirtualTimeSchedulerLike` is used to enumerate the source. Hence, this function
 * should not be used with sources that perform I/O such as ones that wrap Promises
 * or DOM events.
 */
export const toEnumerable = <T>(): OperatorLike<
  ObservableLike<T>,
  EnumerableObservableLike<T>
> => observable =>
  isEnumerable(observable)
    ? (observable as EnumerableObservableLike<T>)
    : new VirtualTimeEnumerableObservable(observable);

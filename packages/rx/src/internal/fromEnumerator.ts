import {
  EnumerableObservableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerableObservable";
import { EnumeratorLike } from "@reactive-js/enumerable";

class FromEnumeratorProducer<T> implements SchedulerContinuationLike {
  run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<void, T>,
    readonly delay: number,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const enumerator = this.enumerator;
    const subscriber = this.subscriber;

    if (this.delay > 0 && !subscriber.isDisposed) {
      const hasCurrent = enumerator.move();
      if (hasCurrent) {
        subscriber.notify(enumerator.current);
        return this;
      }
    } else if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        const hasCurrent = enumerator.move();
        if (!hasCurrent) {
          break;
        }
        subscriber.notify(enumerator.current);

        if (shouldYield()) {
          return this;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        const hasCurrent = enumerator.move();
        if (!hasCurrent) {
          break;
        }
        subscriber.notify(enumerator.current);
      }
    }

    subscriber.dispose();
    return;
  }
}

class FromEnumeratorObservable<T> implements ObservableLike<T> {
  constructor(
    protected readonly enumerator: EnumeratorLike<void, T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromEnumeratorProducer(
      subscriber,
      this.enumerator,
      this.delay,
    );
    subscriber.schedule(producer);
  }
}

class FromEnumeratorEnumerable<T> extends FromEnumeratorObservable<T>
  implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(enumerator: EnumeratorLike<void, T>) {
    super(enumerator, 0);
  }

  enumerate() {
    return this.enumerator;
  }
}

/**
 * Creates an `EnumerableObservableLike` backed by the provided `EnumeratorLike`.
 *
 * @param enumerator The `EnumeratorLike`.
 */
export function fromEnumerator<T>(
  enumerator: EnumeratorLike<void, T>,
): EnumerableObservableLike<T>;

/**
 * Creates an `ObservableLike` backed by the provided `EnumeratorLike`
 * with a specified `delay` between emitted items.
 *
 * @param enumerator The `EnumeratorLike`.
 * @param delay The requested delay between emitted items by the observable.
 */
export function fromEnumerator<T>(
  enumerator: EnumeratorLike<void, T>,
  delay: number,
): ObservableLike<T>;

export function fromEnumerator<T>(
  enumerator: EnumeratorLike<void, T>,
  delay = 0,
): ObservableLike<T> {
  return delay > 0
    ? new FromEnumeratorObservable(enumerator, delay)
    : new FromEnumeratorEnumerable(enumerator);
}

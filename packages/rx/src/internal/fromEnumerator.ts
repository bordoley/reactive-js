import {
  EnumeratorLike,
  EnumerableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";

class FromEnumeratorProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<T>,
    private readonly delay: number,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const enumerator = this.enumerator;
    const subscriber = this.subscriber;

    if (this.delay > 0 && !subscriber.isDisposed) {
      const hasCurrent = enumerator.moveNext();
      if (!hasCurrent) {
        subscriber.notify(enumerator.current);
        return this.continuationResult;
      }
    } else if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        const hasCurrent = enumerator.moveNext();
        if (!hasCurrent) {
          break;
        }
        subscriber.notify(enumerator.current);

        if (shouldYield()) {
          return this.continuationResult;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        const hasCurrent = enumerator.moveNext();
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
    protected readonly enumerator: EnumeratorLike<T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromEnumeratorProducer(
      subscriber,
      this.enumerator,
      this.delay,
    );
    subscriber.schedule(producer, this.delay);
  }
}

class FromEnumeratorEnumerable<T> extends FromEnumeratorObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(enumerator: EnumeratorLike<T>) {
    super(enumerator, 0);
  }

  enumerate() {
    return this.enumerator;
  }
}

export function fromEnumerator<T>(
  enumerator: EnumeratorLike<T>,
): EnumerableLike<T>;
export function fromEnumerator<T>(
  enumerator: EnumeratorLike<T>,
  delay: number,
): ObservableLike<T>;
export function fromEnumerator<T>(
  enumerator: EnumeratorLike<T>,
  delay = 0,
): ObservableLike<T> {
  return delay > 0
    ? new FromEnumeratorObservable(enumerator, delay)
    : new FromEnumeratorEnumerable(enumerator);
}

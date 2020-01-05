import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { EnumerableLike, ObservableLike, SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";

class GenerateProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay: number,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const generator = this.generator;
    const subscriber = this.subscriber;

    let acc = this.acc;
    let result = undefined;
    if (this.delay > 0 && !subscriber.isDisposed) {
      subscriber.notify(acc);
      this.acc = this.generator(acc);
      result = this.continuationResult;
    } else if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        subscriber.notify(acc);
        acc = generator(acc);

        if (shouldYield()) {
          this.acc = acc;
          result = this.continuationResult;
          break;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        subscriber.notify(acc);
        acc = generator(acc);
      }
    }
    return result;
  }
}

class GenerateObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly acc: T,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new GenerateProducer(
      subscriber,
      this.generator,
      this.acc,
      this.delay,
    );
    subscriber.schedule(producer, this.delay);
  }
}

class GenerateEnumerable<T> extends GenerateObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(generator: (acc: T) => T, acc: T) {
    super(generator, acc, 0);
  }
}

export function generate<T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): EnumerableLike<T>;
export function generate<T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay: number,
): ObservableLike<T>;
export function generate<T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> {
  return delay > 0
    ? new GenerateObservable(generator, initialValue(), delay)
    : new GenerateEnumerable(generator, initialValue());
}

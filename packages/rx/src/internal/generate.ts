import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import {
  EnumerableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";

class GenerateWithDelayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  readonly run = producerMixin.run;
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay = 0,
  ) {}

  loop() {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const acc = this.acc;
    if (!subscriber.isDisposed) {
      subscriber.next(acc);
      this.acc = this.generator(acc);
      return this.continuationResult;
    } else {
      return;
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

class GenerateProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly generator: (acc: T) => T,
    private acc: T,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const generator = this.generator;
    const subscriber = this.subscriber;

    let acc = this.acc;
    if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        subscriber.next(acc);
        acc = generator(acc);

        if (shouldYield()) {
          this.acc = acc;
          return this.continuationResult;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        subscriber.next(acc);
        acc = generator(acc);
      }
    }
    subscriber.complete();
    return;
  }
}

class GenerateObservable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(
    private readonly generator: (acc: T) => T,
    private readonly acc: T,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new GenerateProducer(subscriber, this.generator, this.acc);
    subscriber.schedule(producer);
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> =>
  delay > 0
    ? defer(
        () => new GenerateWithDelayObservable(generator, initialValue(), delay),
      )
    : new GenerateObservable(generator, initialValue());

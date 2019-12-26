import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";

class GenerateObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay = 0,
  ) {}

  private loop(shouldYield: () => boolean) {
    const generator = this.generator;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let acc = this.acc;
    do {
      subscriber.next(acc);
      acc = generator(acc);
    } while (!(shouldYield() || subscriber.isDisposed));
    this.acc = acc;
  }

  private loopFast() {
    const generator = this.generator;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let acc = this.acc;
    do {
      subscriber.next(acc);
      acc = generator(acc);
    } while (!subscriber.isDisposed);
    this.acc = acc;
  }

  private emitDelayedValue() {
    let acc = this.acc;
    (this.subscriber as SubscriberLike<T>).next(acc);
    this.acc = this.generator(acc);
  }

  run(shouldYield?: () => boolean) {
    const subscriber = this.subscriber as SubscriberLike<T>;
    try {
      if (this.delay > 0) {
        this.emitDelayedValue();
      } else if (shouldYield !== undefined) {
        this.loop(shouldYield);
      } else {
        this.loopFast();
      }
    } catch (cause) {
      subscriber.complete({ cause });
    }

    return subscriber.isDisposed ? undefined : this.continuationResult;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> =>
  defer(() => new GenerateObservable(generator, initialValue(), delay));

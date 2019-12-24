import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class GenerateObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;

  private readonly continuation: SchedulerContinuationLike = (
    shouldYield: () => boolean,
  ) => {
    const subscriber = this.subscriber as SubscriberLike<T>;
    try {
      this.loop(shouldYield);
    } catch (cause) {
      subscriber.complete({ cause });
    }

    return subscriber.isDisposed ? undefined : this.continuationResult;
  };

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this.continuation,
    delay: this.delay,
  };

  constructor(
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay = 0,
  ) {}

  private loop(shouldYield: () => boolean) {
    const delay = this.delay;
    const generator = this.generator;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let acc = this.acc;
    do {
      subscriber.next(acc);
      acc = generator(acc);
    } while (!shouldYield() && !subscriber.isDisposed && delay === 0);
    this.acc = acc;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this.continuation, this.delay);
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> =>
  defer(() => new GenerateObservable(generator, initialValue(), delay));

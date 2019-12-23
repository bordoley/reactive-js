import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class GenerateObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly generator: (acc: T) => T,
    private acc: T,
    private readonly delay = 0,
  ) {
  }

  private continuation: SchedulerContinuationLike = (
    shouldYield: () => boolean,
  ) => {
    const delay = this.delay;
    const generator = this.generator;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let acc = this.acc;
    try {
      do {
        subscriber.next(acc);
        acc = generator(acc);
      } while (!shouldYield() && !subscriber.isDisposed && delay === 0);
    } catch (cause) {
      subscriber.complete({ cause });
    }
    this.acc = acc;

    return subscriber.isDisposed ? undefined : this.continuationResult;
  };

  private continuationResult: SchedulerContinuationResultLike = {
    continuation: this.continuation,
    delay: this.delay,
  };

  subscribe(subscriber: SubscriberLike<T>) {
   this.subscriber = subscriber;
    subscriber.schedule(this.continuation, this.delay);
  };
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  delay = 0,
): ObservableLike<T> => defer(
  () => new GenerateObservable(generator, initialValue(), delay)
);
  
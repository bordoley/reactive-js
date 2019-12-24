import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class FromIteratorObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;

  private readonly continuation: SchedulerContinuationLike = shouldYield => {
    let error = undefined;
    try {
      const result = this.loop(shouldYield);
      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  };

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this.continuation,
    delay: this.delay,
  };

  constructor(
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber as SubscriberLike<T>;
    const delay = this.delay;

    for (
      let next = iterator.next();
      !next.done && !subscriber.isDisposed;
      next = iterator.next()
    ) {
      subscriber.next(next.value);

      if (shouldYield() || delay !== 0) {
        return this.continuationResult;
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.add(() => {
      const iterator = this.iterator;
      if (iterator.return !== undefined) {
        iterator.return();
      }
    });

    subscriber.schedule(this.continuation, this.delay);
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> =>
  defer(() => new FromIteratorObservable(iterable[Symbol.iterator](), delay));

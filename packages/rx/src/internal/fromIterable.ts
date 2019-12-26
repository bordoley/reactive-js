import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

class FromIteratorObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
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

    for (
      let next = iterator.next();
      !next.done && !subscriber.isDisposed;
      next = iterator.next()
    ) {
      subscriber.next(next.value);

      if (shouldYield()) {
        return this.continuationResult;
      }
    }

    return;
  }

  private loopFast(): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber as SubscriberLike<T>;

    for (
      let next = iterator.next();
      !next.done && !subscriber.isDisposed;
      next = iterator.next()
    ) {
      subscriber.next(next.value);
    }

    return;
  }

  private emitDelayedValue() {
    const next = this.iterator.next();
    const subscriber = this.subscriber as SubscriberLike<T>;

    if (!next.done && !subscriber.isDisposed) {
      subscriber.next(next.value);
      return this.continuationResult;
    } else {
      return;
    }
  }

  run(shouldYield?: () => boolean) {
    let error = undefined;
    try {
      let result: SchedulerContinuationResultLike | void;
      if (this.delay > 0) {
        result = this.emitDelayedValue();
      } else if (shouldYield !== undefined) {
        result = this.loop(shouldYield);
      } else {
        result = this.loopFast();
      }

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.add(() => {
      const iterator = this.iterator;
      if (iterator.return !== undefined) {
        iterator.return();
      }
    });

    subscriber.schedule(this, this.delay);
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> =>
  defer(() => new FromIteratorObservable(iterable[Symbol.iterator](), delay));

import { defer } from "./defer";
import {
  ObservableLike,
  SubscriberLike,
  MulticastObservableLike,
} from "./interfaces";
import { pipe } from "@reactive-js/pipe";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { share } from "./share";

class FromIteratorObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;
  private count = 0;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  constructor(
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
    private readonly maxCount: number,
    private readonly doneError?: unknown,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber as SubscriberLike<T>;
    const maxCount = this.maxCount;
    const doneError = this.doneError;

    let count = this.count;
    while (count < maxCount && !subscriber.isDisposed) {
      const next = iterator.next();
      if (!next.done) {
        subscriber.next(next.value);
        count++;
      } else if (doneError !== undefined) {
        throw doneError;
      } else {
        break;
      }

      if (shouldYield()) {
        this.count = count;
        return this.continuationResult;
      }
    }

    return;
  }

  private loopFast(): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber as SubscriberLike<T>;
    const maxCount = this.maxCount;
    const doneError = this.doneError;

    let count = this.count;
    while (count < maxCount && !subscriber.isDisposed) {
      const next = iterator.next();
      if (!next.done) {
        subscriber.next(next.value);
        count++;
      } else if (doneError !== undefined) {
        throw doneError;
      } else {
        break;
      }
    }

    return;
  }

  private emitDelayedValue() {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const doneError = this.doneError;

    if (this.count >= this.maxCount || subscriber.isDisposed) {
      return;
    }

    const next = this.iterator.next();
    const done = next.done;
    if (done && doneError !== undefined) {
      throw doneError;
    } else if (done) {
      return;
    }

    subscriber.next(next.value);
    this.count++;
    return this.continuationResult;
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

export const fromIterator = <T>(
  iterator: Iterator<T>,
  scheduler: SchedulerLike,
  config: {
    delay?: number;
    count?: number;
    doneError?: unknown;
  } = {},
): MulticastObservableLike<T> => {
  const delay = Math.max(config.delay ?? 0, 0);
  const maxCount = Math.min(
    Math.max(config.count ?? Number.MAX_SAFE_INTEGER, 0),
    Number.MAX_SAFE_INTEGER,
  );
  return pipe(
    new FromIteratorObservable(iterator, delay, maxCount, config.doneError),
    share(scheduler),
  );
};

export const fromIterable = <T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> =>
  defer(
    () =>
      new FromIteratorObservable(
        iterable[Symbol.iterator](),
        delay,
        Number.MAX_SAFE_INTEGER,
      ),
  );

import {
  DelegatingSubscriber,
  ErrorLike,
  SubscriberLike,
} from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T>
  implements SchedulerContinuationLike {
  private readonly last: T[] = [];

  private readonly continuation: SchedulerContinuationResultLike = {
    continuation: this,
  };

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.dispose();
      this.delegate.schedule(this);
    }
  }

  loop(shouldYield: () => boolean) {
    const last = this.last;
    const delegate = this.delegate;

    while (last.length > 0 && !delegate.isDisposed) {
      const next = last.shift() as T;
      delegate.next(next);

      if (shouldYield() && last.length > 0) {
        return this.continuation;
      }
    }
    return;
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.last.push(data);
      if (this.last.length > this.maxCount) {
        this.last.shift();
      }
    }
  }

  run(shouldYield: () => boolean) {
    let error = undefined;

    try {
      const result = this.loop(shouldYield);
      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    this.delegate.complete(error);
    return;
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> =>
  lift(operator(count));

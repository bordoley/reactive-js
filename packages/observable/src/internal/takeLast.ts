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

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly last: T[] = [];
  private readonly drainQueue: SchedulerContinuationLike = shouldYield => {
    let error = undefined;

    try {
      while (this.last.length > 0 && !this.delegate.isDisposed) {
        const next = this.last.shift() as T;
        this.delegate.next(next);

        const yieldRequest = shouldYield();
        const hasMoreEvents = this.last.length > 0;

        if (yieldRequest && hasMoreEvents) {
          return this.continuation;
        }
      }
    } catch (cause) {
      error = { cause };
    }

    this.delegate.complete(error);
    return;
  };
  private readonly continuation: SchedulerContinuationResultLike = {
    continuation: this.drainQueue,
  };

  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.dispose();
      this.delegate.schedule(this.drainQueue);
    }
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.last.push(data);
      if (this.last.length > this.maxCount) {
        this.last.shift();
      }
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> =>
  lift(operator(count));

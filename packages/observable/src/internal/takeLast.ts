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
  private readonly maxCount: number;
  private readonly drainQueue: SchedulerContinuationLike = shouldYield => {
    while (this.last.length > 0) {
      const next = this.last.shift() as T;
      this.delegate.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.last.length > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    this.delegate.complete();
    return;
  };
  private readonly continuation: SchedulerContinuationResultLike = {
    continuation: this.drainQueue,
  };
  constructor(delegate: SubscriberLike<T>, maxCount: number) {
    super(delegate);
    this.maxCount = maxCount;
  }

  protected onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.schedule(this.drainQueue);
    }
  }

  protected onNext(data: T) {
    this.last.push(data);
    if (this.last.length > this.maxCount) {
      this.last.shift();
    }
  }
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count: number): ObservableOperatorLike<T, T> =>
  lift(operator(count));

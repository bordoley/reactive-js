import {
  DelegatingSubscriber,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

import { lift, ObservableOperator } from "@reactive-js/rx-observable";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly continuation: SchedulerContinuationResult;
  private last: T[] = [];
  private readonly maxCount: number;
  private readonly priority?: number;

  constructor(
    delegate: SubscriberLike<T>,
    maxCount: number,
    priority?: number,
  ) {
    super(delegate);
    this.maxCount = maxCount;
    this.priority = priority;

    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };
  }

  protected onComplete(error?: Error) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.schedule(this.drainQueue, this.priority);
    }
  }

  protected onNext(data: T) {
    this.last.push(data);
    if (this.last.length > this.maxCount) {
      this.last.shift();
    }
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
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
}

const operator = <T>(
  count: number,
  priority?: number,
): SubscriberOperator<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count, priority);

export const takeLast = <T>(
  count: number,
  priority?: number,
): ObservableOperator<T, T> =>
  lift(operator(count, priority));

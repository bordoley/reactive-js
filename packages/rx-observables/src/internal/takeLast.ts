import {
  DelegatingSubscriber,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
  SchedulerOptions,
} from "@reactive-js/scheduler";

import { lift, ObservableOperator } from "@reactive-js/rx-observable";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly continuation: SchedulerContinuationResult;
  private readonly last: T[] = [];
  private readonly maxCount: number;
  private readonly options?: SchedulerOptions;

  constructor(
    delegate: SubscriberLike<T>,
    maxCount: number,
    options?: SchedulerOptions,
  ) {
    super(delegate);
    this.maxCount = maxCount;
    this.options = options || {};

    this.continuation = {
      continuation: this.drainQueue,
      ...this.options,
    };
  }

  protected onComplete(error?: Error) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.schedule(this.drainQueue, this.options);
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
  options?: SchedulerOptions,
): SubscriberOperator<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count, options);

export const takeLast = <T>(
  count: number,
  options?: SchedulerOptions,
): ObservableOperator<T, T> => lift(operator(count, options));

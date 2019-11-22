import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
} from "@reactive-js/scheduler";

class TakeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly maxCount: number;
  private count = 0;

  constructor(delegate: SubscriberLike<T>, maxCount: number) {
    super(delegate);
    this.maxCount = maxCount;
  }

  protected onNext(data: T) {
    this.count++;
    this.delegate.next(data);

    if (this.count >= this.maxCount) {
      this.delegate.complete();
    }
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }
}

export const take = <T>(count: number): Operator<T, T> => subscriber =>
  new TakeSubscriber(subscriber, count);

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly continuation: SchedulerContinuationResult;
  private readonly maxCount: number;
  private readonly priority?: number;
  private last: T[] = [];

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

  protected onNext(data: T) {
    this.last.push(data);
    if (this.last.length >= this.maxCount) {
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

  protected onComplete(error?: Error) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.schedule(this.drainQueue, this.priority);
    }
  }
}

export const takeLast = <T>(
  count: number,
  priority?: number,
): Operator<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count, priority);

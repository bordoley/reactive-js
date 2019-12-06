import { ErrorLike, SubscriberLike } from "@reactive-js/rx";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { ObservableOperator } from "./pipe";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly last: T[] = [];
  private readonly maxCount: number;

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

  private readonly drainQueue: SchedulerContinuationLike = shouldYield => {
    while (this.last.length > 0) {
      const next = this.last.shift() as T;
      this.delegate.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.last.length > 0;

      if (yieldRequest && hasMoreEvents) {
        this.schedule(this.drainQueue);
        return;
      }
    }

    this.delegate.complete();
    return;
  };
}

const operator = <T>(count: number): SubscriberOperator<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count: number): ObservableOperator<T, T> =>
  lift(operator(count));

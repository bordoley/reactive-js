import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import {
  ErrorLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { DelegatingSubscriber } from "./subscriber";
import { producerMixin } from "./producer";

class TakeLastSubscriber<T> extends DelegatingSubscriber<T, T>
  implements SchedulerContinuationLike {
  private readonly continuation: SchedulerContinuationResultLike = {
    continuation: this,
  };
  private index = 0;
  private readonly last: T[] = [];
  subscriber = this.delegate;

  run = producerMixin.run;
  constructor(delegate: SubscriberLike<T>, private readonly maxCount: number) {
    super(delegate);
    this.delegate.add(() => {
      this.last.length = 0;
    });
  }

  complete(error?: ErrorLike) {
    if (this.dispose()) {
      if (error !== undefined) {
        this.delegate.complete(error);
      } else {
        this.delegate.schedule(this);
      }
    }
  }

  loop(shouldYield?: () => boolean) {
    const last = this.last;
    const length = last.length;
    const delegate = this.delegate;

    let index = this.index;
    if (shouldYield !== undefined) {
      while (index < length && !delegate.isDisposed) {
        const next = last[index];
        delegate.next(next);
        index++;

        if (shouldYield() && index < length) {
          this.index = index;
          return this.continuation;
        }
      }
    } else {
      while (index < length && !delegate.isDisposed) {
        const next = last[index];
        delegate.next(next);
        index++;
      }
    }

    last.length = 0;
    delegate.complete();
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
}

const operator = <T>(
  count: number,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TakeLastSubscriber(subscriber, count);

export const takeLast = <T>(count = 1): ObservableOperatorLike<T, T> =>
  lift(operator(count));

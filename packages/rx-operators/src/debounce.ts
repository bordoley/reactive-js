import {
  MonoTypeDelegatingSubscriber,
  Notifications,
  Operator,
  SchedulerLike,
  SchedulerContinuation,
  SubscriberLike,
} from "@rx-min/rx-core";

import { Disposable, SerialDisposable } from "@rx-min/rx-disposables";

class DebounceTimeSubscriber<T> extends MonoTypeDelegatingSubscriber<T> {
  private readonly dueTime: number;
  private readonly innerSubscription = SerialDisposable.create();
  private value: T | undefined;

  constructor(delegate: SubscriberLike<T>, dueTime: number) {
    super(delegate);
    this.dueTime = dueTime;
  }

  private debounceNext() {
    this.clearDebounce();
    if (this.value != undefined) {
      const value = this.value;
      this.value = undefined;
      this.delegate.notify(Notifications.next, value);
    }
  }

  private clearDebounce() {
    this.innerSubscription.setInnerDisposable(Disposable.disposed);
  }

  protected onComplete(data: Error | undefined) {
    if (data !== undefined) {
      this.clearDebounce();
    } else {
      this.debounceNext();
    }

    this.delegate.notify(Notifications.complete, data);
  }

  private schedulerContinuation: SchedulerContinuation = _shouldYield => {
    this.debounceNext();
  };

  protected onNext(data: T) {
    this.clearDebounce();
    this.value = data;

    this.innerSubscription.setInnerDisposable(
      this.scheduler.schedule(this.schedulerContinuation, this.dueTime),
    );
  }
}

export const debounceTime = <T>(dueTime: number): Operator<T, T> => {
  // FIXME: bounds check the duetime
  return (subscriber: SubscriberLike<T>) =>
    new DebounceTimeSubscriber(subscriber, dueTime);
};

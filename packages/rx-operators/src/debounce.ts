import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

import { Disposable, SerialDisposable } from "@reactive-js/disposables";

class DebounceTimeSubscriber<T> extends DelegatingSubscriber<T, T> {
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
    this.innerSubscription.innerDisposable = Disposable.disposed;
  }

  protected onComplete(data: Error | void) {
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

    this.innerSubscription.innerDisposable = this.scheduler.schedule(
      this.schedulerContinuation,
      this.dueTime,
    );
  }
}

export const debounceTime = <T>(dueTime: number): Operator<T, T> => {
  if (dueTime <= 0) {
    throw new Error("dueTime must be greater than 0");
  }
  return subscriber => new DebounceTimeSubscriber(subscriber, dueTime);
};

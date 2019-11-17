import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

import { Disposable, SerialDisposable } from "@reactive-js/disposables";

class DebounceTimeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly dueTime: number;
  private readonly innerSubscription = SerialDisposable.create();
  private readonly priority: number | undefined;
  private value: [T] | undefined;

  constructor(
    delegate: SubscriberLike<T>,
    dueTime: number,
    priority: number | undefined,
  ) {
    super(delegate);
    this.dueTime = dueTime;
    this.priority = priority;
    this.subscription.add(this.innerSubscription);
  }

  private debounceNext() {
    this.clearDebounce();
    if (this.value != undefined) {
      const [value] = this.value;
      this.value = undefined;
      this.delegate.next(value);
    }
  }

  private clearDebounce() {
    this.innerSubscription.innerDisposable = Disposable.disposed;
  }

  protected onComplete(error?: Error) {
    if (error !== undefined) {
      this.clearDebounce();
    } else {
      this.debounceNext();
    }

    this.delegate.complete(error);
    this.subscription.remove(this.innerSubscription);
  }

  private schedulerContinuation: SchedulerContinuation = _shouldYield => {
    this.debounceNext();
  };

  protected onNext(data: T) {
    this.clearDebounce();
    if (this.value !== undefined) {
      this.value[0] = data;
    } else {
      this.value = [data];
    }

    this.innerSubscription.innerDisposable = this.scheduler.schedule(
      this.schedulerContinuation,
      this.dueTime,
      this.priority,
    );
  }
}

export const debounceTime = <T>(
  dueTime: number,
  priority?: number,
): Operator<T, T> => {
  if (dueTime <= 0) {
    throw new Error("dueTime must be greater than 0");
  }
  return subscriber =>
    new DebounceTimeSubscriber(subscriber, dueTime, priority);
};

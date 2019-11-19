import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerContinuation } from "@reactive-js/scheduler";

import { Disposable, SerialDisposable } from "@reactive-js/disposables";

class DebounceTimeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly dueTime: number;
  private readonly priority: number | undefined;

  private value: [T] | undefined;
  private innerSubscription = Disposable.disposed;

  constructor(
    delegate: SubscriberLike<T>,
    dueTime: number,
    priority: number | undefined,
  ) {
    super(delegate);
    this.dueTime = dueTime;
    this.priority = priority;
  }

  private notifyNext() {
    if (this.value != undefined) {
      const [value] = this.value;
      this.value = undefined;
      this.delegate.next(value);
    }
  }

  private clearDebounce() {
    this.innerSubscription.dispose();
    this.innerSubscription = Disposable.disposed;
  }

  protected onComplete(error?: Error) {
    this.clearDebounce();
    if (error === undefined) {
      this.notifyNext();
    }

    this.delegate.complete(error);
  }

  private schedulerContinuation: SchedulerContinuation = _shouldYield => {
    this.notifyNext();
  };

  protected onNext(data: T) {
    this.clearDebounce();
    if (this.value !== undefined) {
      this.value[0] = data;
    } else {
      this.value = [data];
    }

    this.innerSubscription = this.schedule(
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

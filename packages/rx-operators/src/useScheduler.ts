import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

import {
  SchedulerLike,
} from "@reactive-js/scheduler"


class UseSchedulerSubscriber<T> extends DelegatingSubscriber<T, T> {
  readonly scheduler: SchedulerLike;

  constructor(delegate: SubscriberLike<T>, scheduler: SchedulerLike) {
    super(delegate);
    this.scheduler = scheduler;
  }

  protected onNext(data: T) {
    this.delegate.notify(Notifications.next, data);
  }

  protected onComplete(error: Error | void) {
    this.delegate.notify(Notifications.complete, error);
  }
}

export const useScheduler = <T>(
  scheduler: SchedulerLike,
): Operator<T, T> => subscriber =>
  new UseSchedulerSubscriber(subscriber, scheduler);

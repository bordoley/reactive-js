import {
  MonoTypeDelegatingSubscriber,
  Notifications,
  Operator,
  SchedulerLike,
  SubscriberLike,
} from "@rx-min/rx-core";

class UseSchedulerSubscriber<T> extends MonoTypeDelegatingSubscriber<T> {
  public readonly scheduler: SchedulerLike;

  constructor(delegate: SubscriberLike<T>, scheduler: SchedulerLike) {
    super(delegate);
    this.scheduler = scheduler;
  }

  protected onNext(data: T) {
    this.delegate.notify(Notifications.next, data);
  }

  protected onComplete(error: Error | undefined) {
    this.delegate.notify(Notifications.complete, error);
  }
}

export const useScheduler = <T>(
  scheduler: SchedulerLike,
): Operator<T, T> => subscriber =>
  new UseSchedulerSubscriber(subscriber, scheduler);

import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@rx-min/rx-core";

class KeepSubscriber<T> extends DelegatingSubscriber<T, T> {
  private predicate: (data: T) => boolean;

  constructor(delegate: SubscriberLike<T>, predicate: (data: T) => boolean) {
    super(delegate);
    this.predicate = predicate;
  }

  protected onNext(data: T) {
    const shouldKeep = this.predicate(data);
    if (shouldKeep) {
      this.delegate.notify(Notifications.next, data);
    }
  }

  protected onComplete(data: Error | void) {
    this.delegate.notify(Notifications.complete, data);
  }
}

export const keep = <T>(
  predicate: (data: T) => boolean,
): Operator<T, T> => subscriber => new KeepSubscriber(subscriber, predicate);

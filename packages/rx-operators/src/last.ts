import {
  DelegatingSubscriber,
  Notifications,
  SubscriberLike,
} from "@reactive-js/rx-core";

class LastSubscriber<T> extends DelegatingSubscriber<T, T> {
  // FIXME: This won't work with Bucklescript optional values
  private last: T | void = undefined;

  constructor(delegate: SubscriberLike<T>) {
    super(delegate);
  }

  protected onNext(data: T) {
    this.last = data;
  }

  protected onComplete(data: Error | void) {
    if (this.last !== undefined) {
      this.delegate.notify(Notifications.next, this.last);
    }
    this.delegate.notify(Notifications.complete, data);
  }
}

export const last = <T>(subscriber: SubscriberLike<T>): SubscriberLike<T> =>
  new LastSubscriber(subscriber);

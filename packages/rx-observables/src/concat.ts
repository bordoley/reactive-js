import { Disposable } from "@reactive-js/disposables";

import {
  connect,
  observe,
  Notification,
  Notifications,
  Observable,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

class ConcatObserver<T> implements ObserverLike<T> {
  private readonly delegate: ObserverLike<T>;
  private readonly continuation: () => boolean;

  constructor(delegate: ObserverLike<T>, continuation: () => boolean) {
    this.delegate = delegate;
    this.continuation = continuation;
  }

  notify(notif: Notification, data: T | Error | void) {
    switch (notif) {
      case Notifications.next:
        this.delegate.notify(notif, data);
        break;
      case Notifications.complete:
        if (data !== undefined) {
          this.delegate.notify(notif, data);
        } else if (!this.continuation()) {
          this.delegate.notify(Notifications.complete);
        }
    }
  }
}

export const concat = <T>(
  head: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T> => {
  const observables = [head, ...tail];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    const queue = [...observables];

    const subscribeNext = () => {
      const head = queue.shift();
      if (head !== undefined) {
        let innerSubscription = Disposable.disposed;

        const continuation = () => {
          subscriber.subscription.remove(innerSubscription);
          return subscribeNext();
        };
        const observer = new ConcatObserver(subscriber, continuation);

        innerSubscription = connect(
          Observable.lift(head, observe(observer)),
          subscriber.scheduler,
        );
        subscriber.subscription.add(innerSubscription);
      }

      return head !== undefined;
    };

    subscribeNext();
  };

  return { subscribe };
};

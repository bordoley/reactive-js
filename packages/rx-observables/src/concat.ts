import { Disposable } from "@rx-min/rx-disposables";

import {
  connect,
  lift,
  observe,
  Notification,
  Notifications,
  Observable,
  ObservableLike,
  ObserverLike,
} from "@rx-min/rx-core";

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
          this.delegate.notify(Notifications.complete, undefined);
        }
    }
  }
}

export const concat = <T>(
  head: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T> =>
  Observable.create(subscriber => {
    const queue = [head, ...tail];
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
          lift(head, observe(observer)),
          subscriber.scheduler,
        );
        subscriber.subscription.add(innerSubscription);
      }

      return head !== undefined;
    };

    subscribeNext();
  });

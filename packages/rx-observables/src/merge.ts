import {
  observe,
  Notification,
  Notifications,
  Observable,
  ObservableLike,
  ObserverLike
} from "@rx-min/rx-core";

import { create } from "./create";

class MergeObserver<T> implements ObserverLike<T> {
  private readonly delegate: ObserverLike<T>;
  private readonly count: number;
  private completedCount = 0;

  constructor(delegate: ObserverLike<T>, count: number) {
    this.delegate = delegate;
    this.count = count;
  }

  notify(notif: Notification, data: T | Error | undefined) {
    switch (notif) {
      case Notifications.next:
        this.delegate.notify(notif, data);
        break;
      case Notifications.complete:
        if (data !== undefined) {
          this.delegate.notify(notif, data);
        } else {
          this.completedCount++;
          if (this.completedCount == this.count) {
            this.delegate.notify(Notifications.complete, undefined);
          }
        }
    }
  }
}

export const merge = <T>(
  head: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T> => {
  return create(subscriber => {
    const observer = new MergeObserver(subscriber, tail.length + 1);

    subscriber.add(
      Observable.connect(Observable.lift(head, observe(observer)))
    );

    for (let observable of tail) {
      subscriber.add(
        Observable.connect(Observable.lift(observable, observe(observer)))
      );
    }
  });
};

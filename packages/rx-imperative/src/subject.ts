import { Disposable } from "@reactive-js/disposables";

import {
  ObservableResourceLike,
  ObserverLike,
  SubscriberLike,
  observeOn,
} from "@reactive-js/rx-core";

export interface SubjectLike<T>
  extends ObserverLike<T>,
    ObservableResourceLike<T> {}

class SubjectImpl<T> implements SubjectLike<T> {
  readonly disposable = Disposable.create(() => {
    this.subscribers = [];
  });
  private readonly priority?: number;

  private subscribers: Array<SubscriberLike<T>> = [];

  constructor(priority?: number) {
    this.priority = priority;
  }

  next(data: T) {
    if (this.disposable.isDisposed) {
      return;
    }

    const subscribers = this.subscribers.slice();
    for (let subscriber of subscribers) {
      subscriber.next(data);
    }
  }

  complete(error?: Error) {
    if (this.disposable.isDisposed) {
      return;
    }

    const subscribers = this.subscribers.slice();
    for (let subscriber of subscribers) {
      subscriber.complete(error);
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      const scheduledSubscriber = observeOn()(subscriber);
      this.subscribers.push(scheduledSubscriber);

      const disposable = Disposable.create(() => {
        const index = this.subscribers.indexOf(scheduledSubscriber);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
      });

      subscriber.subscription.add(disposable);
    }
  }
}

const create = <T>(priority?: number): SubjectLike<T> =>
  new SubjectImpl(priority);

export const Subject = {
  create,
};

import { Disposable } from "@reactive-js/disposables";

import {
  ObservableResourceLike,
  ObserverLike,
  Subscriber,
  SubscriberLike,
} from "@reactive-js/rx-core";

export interface SubjectLike<T>
  extends ObserverLike<T>,
    ObservableResourceLike<T> {}

class SubjectImpl<T> implements SubjectLike<T> {
  readonly disposable = Disposable.create(() => {
    this.observers = [];
  });
  private readonly priority?: number;

  private observers: Array<ObserverLike<T>> = [];

  constructor(priority?: number) {
    this.priority = priority;
  }

  next(data: T) {
    if (this.disposable.isDisposed) {
      return;
    }

    const subscribers = this.observers.slice();
    for (let subscriber of subscribers) {
      subscriber.next(data);
    }
  }

  complete(error?: Error) {
    if (this.disposable.isDisposed) {
      return;
    }

    const subscribers = this.observers.slice();
    for (let subscriber of subscribers) {
      subscriber.complete(error);
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.disposable.isDisposed) {
      const observer = Subscriber.toSafeObserver(subscriber);
      this.observers.push(observer);

      const disposable = Disposable.create(() => {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
          this.observers.splice(index, 1);
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

import { Disposable } from "@rx-min/rx-disposables";

import {
  ObservableResourceLike,
  ObserverLike,
  Notification,
  SubscriberLike,
} from "@rx-min/rx-core";

export interface SubjectLike<T>
  extends ObserverLike<T>,
    ObservableResourceLike<T> {}

class SubjectImpl<T> implements SubjectLike<T> {
  private _isDisposed = false;
  private subscribers: Array<SubscriberLike<T>> = [];

  dispose() {
    this._isDisposed = true;
    this.subscribers = [];
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  notify(notification: Notification, data: T | Error | undefined): void {
    if (!this.isDisposed) {
      const subscribers = this.subscribers.slice();
      for (let subscriber of subscribers) {
        subscriber.notify(notification, data);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      this.subscribers.push(subscriber);

      const disposable = Disposable.create(() => {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
      });

      subscriber.subscription.add(disposable);
    }
  }
}

const create = <T>(): SubjectLike<T> => new SubjectImpl();

export const Subject = {
  create,
};

import { Disposable } from "@reactive-js/disposables";

import {
  ObservableResourceLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

export interface SubjectLike<T>
  extends ObserverLike<T>,
    ObservableResourceLike<T> {}

class SubjectImpl<T> implements SubjectLike<T> {
  private _isDisposed = false;
  private subscribers: Array<ObserverLike<T>> = [];

  dispose() {
    this._isDisposed = true;
    this.subscribers = [];
  }

  get isDisposed(): boolean {
    return this._isDisposed;
  }

  next(data: T) {
    if (!this.isDisposed) {
      const subscribers = this.subscribers.slice();
      for (let subscriber of subscribers) {
        subscriber.next(data);
      }
    }
  }

  complete(error: Error | void) {
    if (!this.isDisposed) {
      const subscribers = this.subscribers.slice();
      for (let subscriber of subscribers) {
        subscriber.complete(error);
      }
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    if (!this.isDisposed) {
      // FIXME: Wrap the subscriber in an observeOn observer to ensure 
      // we're on the right scheduler.
      this.subscribers.push(subscriber);

      const disposable = Disposable.create(() => {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
        // FIXME: Remove the disposable from the subscriber after dispose
      });

      subscriber.subscription.add(disposable);
    }
  }
}

const create = <T>(): SubjectLike<T> => new SubjectImpl();

export const Subject = {
  create,
};

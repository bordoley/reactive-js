import { Disposable } from "@reactive-js/disposables";

import {
  observe,
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

  next(data: T) {
    this.delegate.next(data);
  }

  complete(error?: Error) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else if (!this.continuation()) {
      this.delegate.complete();
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
          subscriber.remove(innerSubscription);
          return subscribeNext();
        };
        const observer = new ConcatObserver(subscriber, continuation);

        innerSubscription = Observable.connect(
          Observable.lift(head, observe(observer)),
          subscriber,
        );
        subscriber.add(innerSubscription);
      }

      return head !== undefined;
    };

    subscribeNext();
  };

  return { subscribe };
};

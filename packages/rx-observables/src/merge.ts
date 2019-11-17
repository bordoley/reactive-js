import {
  connect,
  observe,
  Observable,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { Disposable, DisposableLike } from "@reactive-js/disposables";

class MergeObserver<T> implements ObserverLike<T> {
  private readonly delegate: ObserverLike<T>;
  private readonly totalCount: number;
  private readonly countRef: [number];
  private readonly onComplete: () => void;

  constructor(
    delegate: ObserverLike<T>,
    totalCount: number,
    countRef: [number],
    onComplete: () => void,
  ) {
    this.delegate = delegate;
    this.totalCount = totalCount;
    this.countRef = countRef;
    this.onComplete = onComplete;
  }

  next(data: T) {
    this.delegate.next(data);
  }

  complete(error?: Error) {
    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.countRef[0] = this.countRef[0]++;
      if (this.countRef[0] === this.totalCount) {
        this.delegate.complete();
      }
    }

    this.onComplete();
  }
}

export const merge = <T>(
  head: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T> => {
  const observables = [head, ...tail];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    const countRef: [number] = [0];

    for (let observable of observables) {
      let innerSubscription = Disposable.disposed;
      const onComplete = () => {
        subscriber.subscription.remove(innerSubscription);
      };

      const observer = new MergeObserver(
        subscriber,
        observables.length,
        countRef,
        onComplete,
      );

      innerSubscription = connect(
        Observable.lift(observable, observe(observer)),
        subscriber.scheduler,
      );

      subscriber.subscription.add(innerSubscription);
    }
  };

  return { subscribe };
};

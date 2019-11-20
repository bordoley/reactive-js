import {
  observe,
  Observable,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { Disposable, DisposableLike } from "@reactive-js/disposables";

class MergeObserver<T> implements ObserverLike<T> {
  private readonly delegate: SubscriberLike<T>;
  private readonly totalCount: number;
  private readonly countRef: [number];

  innerSubscription: DisposableLike = Disposable.disposed;

  constructor(
    delegate: SubscriberLike<T>,
    totalCount: number,
    countRef: [number],
  ) {
    this.delegate = delegate;
    this.totalCount = totalCount;
    this.countRef = countRef;
  }

  next(data: T) {
    this.delegate.next(data);
  }

  complete(error?: Error) {
    this.delegate.remove(this.innerSubscription);

    if (error !== undefined) {
      this.delegate.complete(error);
    } else {
      this.countRef[0] = this.countRef[0]++;
      if (this.countRef[0] === this.totalCount) {
        this.delegate.complete();
      }
    }
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
      const observer = new MergeObserver(
        subscriber,
        observables.length,
        countRef,
      );

      observer.innerSubscription = Observable.connect(
        Observable.lift(observable, observe(observer)),
        subscriber,
      );

      subscriber.add(observer.innerSubscription);
    }
  };

  return { subscribe };
};

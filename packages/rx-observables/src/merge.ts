import { Disposable, DisposableLike } from "@reactive-js/disposables";
import {
  Observable,
  ObservableLike,
  observe,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

class MergeObserver<T> implements ObserverLike<T> {
  innerSubscription: DisposableLike = Disposable.disposed;
  private readonly allSubscriptions: DisposableLike;
  private readonly completedCountRef: [number];
  private readonly delegate: SubscriberLike<T>;
  private readonly totalCount: number;

  constructor(
    delegate: SubscriberLike<T>,
    totalCount: number,
    completedCountRef: [number],
    allSubscriptions: DisposableLike,
  ) {
    this.delegate = delegate;
    this.totalCount = totalCount;
    this.completedCountRef = completedCountRef;
    this.allSubscriptions = allSubscriptions;
  }

  complete(error?: Error) {
    this.completedCountRef[0]++;

    if (error !== undefined || this.completedCountRef[0] === this.totalCount) {
      this.delegate.remove(this.allSubscriptions);
      this.delegate.complete(error);
    } else {
      this.allSubscriptions.remove(this.innerSubscription);
    }
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

export const merge = <T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T> => {
  const observables = [fst, snd, ...tail];

  const subscribe = (subscriber: SubscriberLike<T>) => {
    const completedCountRef: [number] = [0];

    const allSubscriptions: DisposableLike = Disposable.create();
    subscriber.add(allSubscriptions);

    for (let observable of observables) {
      const observer = new MergeObserver(
        subscriber,
        observables.length,
        completedCountRef,
        allSubscriptions,
      );

      observer.innerSubscription = Observable.connect(
        Observable.lift(observable, observe(observer)),
        subscriber,
      );

      allSubscriptions.add(observer.innerSubscription);
    }
  };

  return { subscribe };
};

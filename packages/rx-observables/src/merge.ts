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
  private readonly completedCountRef: [number];
  private readonly allSubscriptions: DisposableLike;

  innerSubscription: DisposableLike = Disposable.disposed;

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

  next(data: T) {
    this.delegate.next(data);
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

import {
  create as createDisposable,
  DisposableLike,
  disposed,
} from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { SubscriberLike } from "./subscriber";
import { connect } from "./connect";
import { ObservableLike, pipe } from "./observable";
import { observe } from "./observe";

class MergeObserver<T> implements ObserverLike<T> {
  innerSubscription: DisposableLike = disposed;
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

export function merge<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;
export function merge<T>(
  ...observables: Array<ObservableLike<T>>
): ObservableLike<T> {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const completedCountRef: [number] = [0];

    const allSubscriptions: DisposableLike = createDisposable();
    subscriber.add(allSubscriptions);

    for (let observable of observables) {
      const observer = new MergeObserver(
        subscriber,
        observables.length,
        completedCountRef,
        allSubscriptions,
      );

      observer.innerSubscription = connect(
        pipe(observable, observe(observer)),
        subscriber,
      );

      allSubscriptions.add(observer.innerSubscription);
    }
  };

  return { subscribe };
}

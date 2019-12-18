import {
  createDisposable,
  DisposableLike,
  disposed,
} from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
  subscribe,
} from "@reactive-js/rx";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

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

  onComplete(error?: ErrorLike) {
    this.completedCountRef[0]++;

    if (error !== undefined || this.completedCountRef[0] === this.totalCount) {
      // Dispose the allSubscriptions disposable by removing it from the subscriber;
      this.delegate.remove(this.allSubscriptions);
      this.delegate.complete(error);
    } else {
      this.allSubscriptions.remove(this.innerSubscription);
    }
  }

  onNext(data: T) {
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
  const subscribeImpl = (subscriber: SubscriberLike<T>) => {
    const completedCountRef: [number] = [0];

    const allSubscriptions: DisposableLike = createDisposable();
    subscriber.add(allSubscriptions);

    for (const observable of observables) {
      const observer = new MergeObserver(
        subscriber,
        observables.length,
        completedCountRef,
        allSubscriptions,
      );

      observer.innerSubscription = pipe(
        observable,
        observe(observer),
        subscribe(subscriber),
      );

      allSubscriptions.add(observer.innerSubscription);
    }
  };

  return { subscribe: subscribeImpl };
}

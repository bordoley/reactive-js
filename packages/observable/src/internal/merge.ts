import { DisposableLike, disposed } from "@reactive-js/disposable";
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

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly totalCount: number,
    private readonly completedCountRef: [number],
  ) {}

  onComplete(error?: ErrorLike) {
    this.completedCountRef[0]++;

    if (error !== undefined || this.completedCountRef[0] === this.totalCount) {
      this.subscriber.complete(error);
    } else {
      this.subscriber.remove(this.innerSubscription);
    }
  }

  onNext(data: T) {
    this.subscriber.next(data);
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

    for (const observable of observables) {
      const observer = new MergeObserver(
        subscriber,
        observables.length,
        completedCountRef,
      );

      observer.innerSubscription = pipe(
        observable,
        observe(observer),
        subscribe(subscriber),
      );

      subscriber.add(observer.innerSubscription);
    }
  };

  return { subscribe: subscribeImpl };
}

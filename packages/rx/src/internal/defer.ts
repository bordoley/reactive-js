import { ObservableLike, SubscriberLike } from "./interfaces";

class DeferObservable<T> implements ObservableLike<T> {
  constructor(private readonly factory: () => ObservableLike<T>) {}

  subscribe(subscriber: SubscriberLike<T>) {
    this.factory().subscribe(subscriber);
  }
}

/**
 * Creates an observable that when subscribed to calls the `factory` function
 * to make a new observable for each new `SubscriberLike`.
 *
 * @param factory Factory function to invoke for each `SubscriberLike` that subscribes to the observable.
 */
export const defer = <T>(factory: () => ObservableLike<T>): ObservableLike<T> =>
  new DeferObservable(factory);

import { ObservableLike, SubscriberLike } from "@reactive-js/rx";

class DeferObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly factory: () => ObservableLike<T>
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    this.factory().subscribe(subscriber);
  }
}

export const defer = <T>(factory: () => ObservableLike<T>): ObservableLike<T> =>
  new DeferObservable(factory);
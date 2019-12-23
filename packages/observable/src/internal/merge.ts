import {
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  DelegatingSubscriber,
} from "@reactive-js/rx";

class MergeSubscriber<T> extends DelegatingSubscriber<T, T> {
  private completedCount = 0;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly totalCount: number,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    this.completedCount++;

    if (error !== undefined || this.completedCount === this.totalCount) {
      this.delegate.complete(error);
    }
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

class MergeObservable<T> implements ObservableLike<T> {
  constructor(private readonly observables: readonly ObservableLike<T>[]) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const mergeSubscriber = new MergeSubscriber(
      subscriber,
      this.observables.length,
    );
    const observables = this.observables;

    for (const observable of observables) {
      observable.subscribe(mergeSubscriber);
    }
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
  return new MergeObservable(observables);
}

import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";

class MergeSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: MergeObservable<T>,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if(this.dispose()) {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (error !== undefined || ctx.completedCount >= ctx.observables.length) {
        this.delegate.complete(error);
      }
    }
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

class MergeObservable<T> implements ObservableLike<T> {
  completedCount = 0;

  constructor(readonly observables: readonly ObservableLike<T>[]) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;

    for (const observable of observables) {
      const mergeSubscriber = new MergeSubscriber(subscriber, this);

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

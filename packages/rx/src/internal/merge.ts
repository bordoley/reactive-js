import { ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: MergeObservable<T>,
  ) {
    super(delegate);
    this.add(error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (error !== undefined || ctx.completedCount >= ctx.observables.length) {
        this.delegate.dispose(error);
      }
    });
  }

  notifyNext(data: T) {
    this.delegate.notifyNext(data);
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

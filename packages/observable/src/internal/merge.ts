import { isSome } from "@reactive-js/option";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractDelegatingSubscriber } from "./subscriber";

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: {
      readonly count: number;
      completedCount: number;
    },
  ) {
    super(delegate);
    this.add(error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (isSome(error) || ctx.completedCount >= ctx.count) {
        delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

class MergeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(readonly observables: readonly ObservableLike<T>[]) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const observables = this.observables;

    const ctx = { count: observables.length, completedCount: 0 };

    for (const observable of observables) {
      const mergeSubscriber = new MergeSubscriber(subscriber, ctx);

      observable.subscribe(mergeSubscriber);
    }
  }
}

/**
 *  Creates an `ObservableLike` which concurrently emits values from the sources.
 */
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

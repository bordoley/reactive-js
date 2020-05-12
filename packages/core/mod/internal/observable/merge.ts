import { add, dispose } from "../../disposable.ts";
import { isSome } from "../../option.ts";
import {
  ObservableLike,
  SubscriberLike,
  ObservableOperator,
} from "./interfaces.ts";
import { AbstractDelegatingSubscriber } from "./subscriber.ts";

class MergeSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: {
      readonly count: number;
      completedCount: number;
    },
  ) {
    super(delegate);
    add(this, error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (isSome(error) || ctx.completedCount >= ctx.count) {
        dispose(delegate, error);
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

export const mergeWith = <T>(
  snd: ObservableLike<T>,
): ObservableOperator<T, T> => fst => merge(fst, snd);

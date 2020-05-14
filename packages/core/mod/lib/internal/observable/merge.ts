import { add, dispose } from "../../disposable.ts";
import { isSome } from "../../option.ts";
import { ObservableLike, ObserverLike, ObservableFunction } from "./interfaces.ts";
import { AbstractDelegatingObserver } from "./observer.ts";

class MergeObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
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

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;

    const ctx = { count: observables.length, completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = new MergeObserver(observer, ctx);

      observable.observe(mergeObserver);
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
): ObservableFunction<T, T> => fst => merge(fst, snd);

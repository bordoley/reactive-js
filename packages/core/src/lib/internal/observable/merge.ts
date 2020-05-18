import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown } from "../../disposable";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";
import { createDelegatingObserver } from "./observer";
import { observe } from "./observable";

const createMergeObserver = <T>(
  delegate: ObserverLike<T>,
  count: number,
  ctx: {
    completedCount: number;
  },
) => {
  const observer = createDelegatingObserver(delegate);
  
  addOnDisposedWithError(observer, delegate);
  addOnDisposedWithoutErrorTeardown(observer, () => {
    ctx.completedCount++;
    if (ctx.completedCount >= count) {
      dispose(delegate);
    }
  })
  return observer;
};

class MergeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(readonly observables: readonly ObservableLike<T>[]) {}

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = createMergeObserver(observer, count, ctx);

      observe(observable, mergeObserver);
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

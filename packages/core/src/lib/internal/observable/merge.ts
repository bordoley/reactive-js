import { dispose, addDisposableOrTeardown } from "../../disposable";
import { pipe } from "../../functions";
import { isSome } from "../../option";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";
import { createDelegatingObserver } from "./observer";

const createMergeObserver = <T>(
  delegate: ObserverLike<T>,
  count: number,
  ctx: {
    completedCount: number;
  },
) =>
  pipe(
    delegate,
    createDelegatingObserver,
    addDisposableOrTeardown(error => {
      ctx.completedCount++;

      if (isSome(error) || ctx.completedCount >= count) {
        dispose(delegate, error);
      }
    }),
  );

class MergeObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(readonly observables: readonly ObservableLike<T>[]) {}

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;

    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = createMergeObserver(observer, count, ctx);

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
): ObservableOperator<T, T> => fst => merge(fst, snd);

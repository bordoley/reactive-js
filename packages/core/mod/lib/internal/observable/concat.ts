import { dispose, addDisposableOrTeardown } from "../../disposable.ts";
import { isSome } from "../../option.ts";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces.ts";
import { createDelegatingObserver } from "./observer.ts";
import { pipe } from "../../functions.ts";

const createConcatObserver = <T>(
  delegate: ObserverLike<T>,
  observables: ObservableLike<T>[],
  next: number,
) =>
  pipe(
    delegate,
    createDelegatingObserver,
    addDisposableOrTeardown(error => {
      if (isSome(error)) {
        dispose(delegate, error);
      } else if (next < observables.length) {
        const concatObserver = createConcatObserver(
          delegate,
          observables,
          next + 1,
        );
        observables[next].observe(concatObserver);
      } else {
        dispose(delegate);
      }
    }),
  );

class ConcatObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: ObservableLike<T>[]) {
    this.isSynchronous = observables.every(obs => obs.isSynchronous);
  }

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;

    if (observables.length > 0) {
      const concatObserver = createConcatObserver(observer, observables, 1);
      observables[0].observe(concatObserver);
    } else {
      dispose(observer);
    }
  }
}

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: Array<ObservableLike<T>>
): ObservableLike<T>;

export function concat<T>(
  ...observables: ObservableLike<T>[]
): ObservableLike<T> {
  return new ConcatObservable(observables);
}

export const concatWith = <T>(
  snd: ObservableLike<T>,
): ObservableOperator<T, T> => first => concat(first, snd);

import {
  dispose,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../../disposable";
import { pipe } from "../../functions";
import { everySatisfy } from "../../readonlyArray";
import { ObservableLike, ObserverLike, ObservableOperator } from "./interfaces";
import { observe } from "./observable";
import { createDelegatingObserver } from "./observer";

const createConcatObserver = <T>(
  delegate: ObserverLike<T>,
  observables: readonly ObservableLike<T>[],
  next: number,
) => {
  const observer = createDelegatingObserver(delegate);
  addOnDisposedWithError(observer, delegate);
  addOnDisposedWithoutErrorTeardown(observer, () => {
    if (next < observables.length) {
      const concatObserver = createConcatObserver(
        delegate,
        observables,
        next + 1,
      );
      pipe(observables[next], observe(concatObserver));
    } else {
      pipe(delegate, dispose());
    }
  });
  return observer;
};

class ConcatObservable<T> implements ObservableLike<T> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: readonly ObservableLike<T>[]) {
    this.isSynchronous = pipe(
      observables,
      everySatisfy(obs => obs.isSynchronous),
    );
  }

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;

    if (observables.length > 0) {
      const concatObserver = createConcatObserver(observer, observables, 1);
      pipe(observables[0], observe(concatObserver));
    } else {
      pipe(observer, dispose());
    }
  }
}

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: readonly ObservableLike<T>[]
): ObservableLike<T>;

export function concat<T>(
  ...observables: readonly ObservableLike<T>[]
): ObservableLike<T> {
  return new ConcatObservable(observables);
}

export const concatWith = <T>(
  snd: ObservableLike<T>,
): ObservableOperator<T, T> => first => concat(first, snd);

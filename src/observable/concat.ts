import { Concat } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy } from "../readonlyArray";
import { sinkInto } from "../source";
import { AbstractObservable } from "./observable";
import { Observer, createDelegatingObserver } from "./observer";

const createConcatObserver = <T>(
  delegate: Observer<T>,
  observables: readonly ObservableLike<T>[],
  next: number,
) => {
  const observer = createDelegatingObserver(delegate);
  addDisposable(delegate, observer);
  addOnDisposedWithError(observer, delegate);
  addOnDisposedWithoutErrorTeardown(observer, () => {
    if (next < observables.length) {
      const concatObserver = createConcatObserver(
        delegate,
        observables,
        next + 1,
      );
      pipe(observables[next], sinkInto(concatObserver));
    } else {
      pipe(delegate, dispose());
    }
  });
  return observer;
};

class ConcatObservable<T> extends AbstractObservable<T> {
  readonly isSynchronous: boolean;

  constructor(private readonly observables: readonly ObservableLike<T>[]) {
    super();
    this.isSynchronous = pipe(
      observables,
      everySatisfy(obs => obs.isSynchronous ?? false),
    );
  }

  sink(observer: Observer<T>) {
    const { observables } = this;

    if (observables.length > 0) {
      const concatObserver = createConcatObserver(observer, observables, 1);
      pipe(observables[0], sinkInto(concatObserver));
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

export const concatT: Concat<ObservableLike<unknown>> = {
  concat,
};

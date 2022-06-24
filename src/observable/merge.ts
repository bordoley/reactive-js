import {
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { sinkInto } from "../source";
import { AbstractObservable } from "./observable";
import { Observer, createDelegatingObserver } from "./observer";

const createMergeObserver = <T>(
  delegate: Observer<T>,
  count: number,
  ctx: {
    completedCount: number;
  },
) => {
  const observer = createDelegatingObserver(delegate);
  addDisposableDisposeParentOnChildError(delegate, observer);
  addOnDisposedWithoutErrorTeardown(observer, () => {
    ctx.completedCount++;
    if (ctx.completedCount >= count) {
      pipe(delegate, dispose());
    }
  });
  return observer;
};

class MergeObservable<T> extends AbstractObservable<T> {
  constructor(readonly observables: readonly ObservableLike<T>[]) {
    super();
  }

  sink(observer: Observer<T>) {
    const { observables } = this;
    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = createMergeObserver(observer, count, ctx);

      pipe(observable, sinkInto(mergeObserver));
    }
  }
}

/**
 *  Creates an `ObservableLike` which concurrently emits values from the sources.
 */
export function merge<T>(
  fst: ObservableLike<T>,
  snd: ObservableLike<T>,
  ...tail: readonly ObservableLike<T>[]
): ObservableLike<T>;
export function merge<T>(
  ...observables: readonly ObservableLike<T>[]
): ObservableLike<T> {
  return new MergeObservable(observables);
}

export const mergeWith =
  <T>(snd: ObservableLike<T>): ObservableOperator<T, T> =>
  fst =>
    merge(fst, snd);

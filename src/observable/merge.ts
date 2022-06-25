import { Concat } from "../container";
import {
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { sinkInto } from "../source";
import { createObservable } from "./createObservable";
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
  return createObservable(observer => {
    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = createMergeObserver(observer, count, ctx);

      pipe(observable, sinkInto(mergeObserver));
    }
  });
}

export const mergeT: Concat<ObservableLike<unknown>> = {
  concat: merge,
};

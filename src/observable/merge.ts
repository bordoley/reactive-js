import { AbstractContainer } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { createDelegatingObserver, sink } from "./observer";

const createMergeObserver = <T>(
  delegate: ObserverLike<T>,
  count: number,
  ctx: {
    completedCount: number;
  },
) => {
  const observer = createDelegatingObserver(delegate);
  addDisposable(delegate, observer);
  addOnDisposedWithError(observer, delegate);
  addOnDisposedWithoutErrorTeardown(observer, () => {
    ctx.completedCount++;
    if (ctx.completedCount >= count) {
      pipe(delegate, dispose());
    }
  });
  return observer;
};

class MergeObservable<T>
  extends AbstractContainer
  implements ObservableLike<T>
{
  readonly isSynchronous = false;

  constructor(readonly observables: readonly ObservableLike<T>[]) {
    super();
  }

  observe(observer: ObserverLike<T>) {
    const observables = this.observables;
    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      const mergeObserver = createMergeObserver(observer, count, ctx);

      pipe(observable, sink(mergeObserver));
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

import { AbstractContainer, Concat } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy } from "../readonlyArray";
import { Observer, createDelegatingObserver, sink } from "./observer";

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
      pipe(observables[next], sink(concatObserver));
    } else {
      pipe(delegate, dispose());
    }
  });
  return observer;
};

class ConcatObservable<T>
  extends AbstractContainer
  implements ObservableLike<T>
{
  readonly isSynchronous: boolean;

  constructor(private readonly observables: readonly ObservableLike<T>[]) {
    super();
    this.isSynchronous = pipe(
      observables,
      everySatisfy(obs => obs.isSynchronous),
    );
  }

  get sinkType(): Observer<T> {
    return undefined as any;
  }

  observe(observer: Observer<T>) {
    const observables = this.observables;

    if (observables.length > 0) {
      const concatObserver = createConcatObserver(observer, observables, 1);
      pipe(observables[0], sink(concatObserver));
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

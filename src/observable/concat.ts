import { Concat } from "../container";
import { addToDisposeOnChildError, dispose, onComplete } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy } from "../readonlyArray";
import { sinkInto } from "../source";
import { createObservable } from "./createObservable";
import { Observer, createDelegatingObserver } from "./observer";

const createConcatObserver = <T>(
  delegate: Observer<T>,
  observables: readonly ObservableLike<T>[],
  next: number,
) =>
  pipe(
    createDelegatingObserver(delegate),
    addToDisposeOnChildError(delegate),
    onComplete(() => {
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
    }),
  );

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
  const observable = createObservable(observer => {
    if (observables.length > 0) {
      const concatObserver = createConcatObserver(observer, observables, 1);
      pipe(observables[0], sinkInto(concatObserver));
    } else {
      pipe(observer, dispose());
    }
  });

  (observable as any).isEnumerable = pipe(
    observables,
    everySatisfy(obs => obs.isEnumerable ?? false),
  );

  return observable;
}

export const concatT: Concat<ObservableLike<unknown>> = {
  concat,
};

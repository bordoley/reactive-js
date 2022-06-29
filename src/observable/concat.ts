import { Concat } from "../container";
import { addTo, dispose, onComplete } from "../disposable";
import { isEmpty, length, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer, createDelegatingObserver } from "../observer";
import { everySatisfy } from "../readonlyArray";
import { sourceFrom } from "../source";
import { createObservable } from "./createObservable";
import { isEnumerable } from "./observable";

const createConcatObserver = <T>(
  delegate: Observer<T>,
  observables: readonly ObservableLike<T>[],
  next: number,
) =>
  pipe(
    createDelegatingObserver(delegate),
    addTo(delegate),
    onComplete(() => {
      if (next < length(observables)) {
        pipe(
          createConcatObserver(delegate, observables, next + 1),
          sourceFrom(observables[next]),
        );
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
    if (!isEmpty(observables)) {
      pipe(
        createConcatObserver(observer, observables, 1),
        sourceFrom(observables[0]),
      );
    } else {
      pipe(observer, dispose());
    }
  });

  (observable as any).isEnumerable = pipe(
    observables,
    everySatisfy(isEnumerable),
  );

  return observable;
}

export const concatT: Concat<ObservableLike<unknown>> = {
  concat,
};

import { Concat } from "../container";
import { addTo, dispose, onComplete } from "../disposable";
import { getLength, isEmpty, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { ObserverLike } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { createObservable } from "./createObservable";
import { computeMinTag, tagObservableType } from "./observable";
import { createDelegatingObserver } from "./observer";

const createConcatObserver = <T>(
  delegate: ObserverLike<T>,
  observables: readonly ObservableLike<T>[],
  next: number,
) =>
  pipe(
    createDelegatingObserver(delegate),
    addTo(delegate),
    onComplete(() => {
      if (next < getLength(observables)) {
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
  return pipe(
    createObservable(observer => {
      if (!isEmpty(observables)) {
        pipe(
          createConcatObserver(observer, observables, 1),
          sourceFrom(observables[0]),
        );
      } else {
        pipe(observer, dispose());
      }
    }),
    tagObservableType(computeMinTag(observables)),
  );
}

export const concatT: Concat<ObservableLike<unknown>> = {
  concat,
};

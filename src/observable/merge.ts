import { Concat } from "../container";
import { addTo, dispose, onComplete } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer, createDelegatingObserver } from "../observer";
import { map } from "../readonlyArray";
import { sourceFrom } from "../source";
import { createObservable } from "./createObservable";

const createMergeObserver = <T>(
  delegate: Observer<T>,
  count: number,
  ctx: {
    completedCount: number;
  },
) =>
  pipe(
    createDelegatingObserver(delegate),
    addTo(delegate),
    onComplete(() => {
      ctx.completedCount++;
      if (ctx.completedCount >= count) {
        pipe(delegate, dispose());
      }
    }),
  );

function _merge<T>(
  observables: readonly ObservableLike<T>[],
): ObservableLike<T> {
  return createObservable(observer => {
    const count = observables.length;
    const ctx = { completedCount: 0 };

    for (const observable of observables) {
      pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
    }
  });
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
  return _merge(observables);
}

export const mergeT: Concat<ObservableLike<unknown>> = {
  concat: merge,
};

export function forkMerge<TIn, TOut>(
  fst: ObservableOperator<TIn, TOut>,
  snd: ObservableOperator<TIn, TOut>,
  ...tail: readonly ObservableOperator<TIn, TOut>[]
): ObservableOperator<TIn, TOut>;
export function forkMerge<TIn, TOut>(
  ...ops: readonly ObservableOperator<TIn, TOut>[]
): ObservableOperator<TIn, TOut> {
  return (obs: ObservableLike<TIn>) =>
    _merge(
      pipe(
        ops,
        map(op => pipe(obs, op)),
      ),
    );
}

import { map } from "../__internal__.readonlyArray";
import { Concat } from "../container";
import { addTo, dispose, onComplete } from "../disposable";
import { getLength, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { ObserverLike } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { createObservable } from "./createObservable";
import { createDelegatingObserver } from "./observer";

const createMergeObserver = <T>(
  delegate: ObserverLike<T>,
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
    const count = getLength(observables);
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

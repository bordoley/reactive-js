import { pipe } from "../../pipe.ts";
import {
  distinctUntilChanged,
  merge,
  onNotify,
  scan,
  using,
  map,
  ObservableLike,
} from "../../observable.ts";
import {
  StateUpdater,
  AsyncEnumerableOperator,
  AsyncEnumeratorLike,
} from "./interfaces.ts";
import { createAsyncEnumerable } from "./createAsyncEnumerable.ts";

const reducer = <T>(acc: T, next: StateUpdater<T>) => next(acc);

const createFactory = <T>(
  observable: ObservableLike<StateUpdater<T>>,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
) => (enumerator: AsyncEnumeratorLike<T, T>) => {
  const src = merge(
    observable,
    pipe(
      enumerator,
      map(v => _ => v),
    ),
  );

  return pipe(
    src,
    scan(reducer, initialState),
    distinctUntilChanged(equals),
    onNotify((next: T) => enumerator.dispatch(next)),
  );
};

/**
 * Converts an `AsyncEnumerableLike<T, T>` to an `AsyncEnumerableLike<StateUpdater<T>, T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableOperator<T, T, StateUpdater<T>, T> => enumerable => {
  const operator = (observable: ObservableLike<StateUpdater<T>>) =>
    using(
      scheduler => enumerable.enumerateAsync(scheduler),
      createFactory(observable, initialState, equals),
    );

  return createAsyncEnumerable(operator);
};

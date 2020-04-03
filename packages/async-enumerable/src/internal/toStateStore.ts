import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  merge,
  onNotify,
  scan,
  using,
  map,
  ObservableLike,
} from "@reactive-js/observable";
import {
  StateUpdaterLike,
  AsyncEnumerableOperatorLike,
  AsyncEnumeratorLike,
} from "./interfaces";
import { createAsyncEnumerable } from "./createAsyncEnumerable";

const reducer = <T>(acc: T, next: StateUpdaterLike<T>) => next(acc);

const createFactory = <T>(
  observable: ObservableLike<StateUpdaterLike<T>>,
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
 * Converts an `AsyncEnumerableLike<T, T>` to an `AsyncEnumerableLike<StateUpdaterLike<T>, T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableOperatorLike<T, T, StateUpdaterLike<T>, T> => enumerable => {
  const operator = (observable: ObservableLike<StateUpdaterLike<T>>) =>
    using(
      scheduler => enumerable.enumerateAsync(scheduler),
      createFactory(observable, initialState, equals),
    );

  return createAsyncEnumerable(operator);
};

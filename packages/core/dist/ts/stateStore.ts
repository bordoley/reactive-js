import {
  StreamableLike,
  createActionReducer,
  StreamLike,
  StreamableOperator,
  createStreamable,
} from "./streamable.ts";
import {
  ObservableLike,
  merge,
  map,
  scan,
  distinctUntilChanged,
  onNotify,
  using,
} from "./observable.ts";
import { pipe } from "./pipe.ts";

export type StateUpdater<T> = {
  (oldState: T): T;
};

export interface StateStoreLike<T> extends StreamableLike<StateUpdater<T>, T> {}

const stateStoreReducer = <T>(state: T, action: StateUpdater<T>) =>
  action(state);

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): StateStoreLike<T> =>
  createActionReducer(stateStoreReducer, initialState, equals);

const reducer = <T>(acc: T, next: StateUpdater<T>) => next(acc);

const createFactory = <T>(
  observable: ObservableLike<StateUpdater<T>>,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
) => (stream: StreamLike<T, T>) => {
  const src = merge(
    observable,
    pipe(
      stream,
      map(v => _ => v),
    ),
  );

  return pipe(
    src,
    scan(reducer, initialState),
    distinctUntilChanged(equals),
    onNotify((next: T) => stream.dispatch(next)),
  );
};

/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): StreamableOperator<T, T, StateUpdater<T>, T> => enumerable => {
  const operator = (observable: ObservableLike<StateUpdater<T>>) =>
    using(
      scheduler => enumerable.stream(scheduler),
      createFactory(observable, initialState, equals),
    );

  return createStreamable(operator);
};

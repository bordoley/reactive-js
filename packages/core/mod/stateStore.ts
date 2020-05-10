import { pipe } from "./functions.ts";
import {
  ObservableLike,
  onNotify,
  ignoreElements,
  merge,
  onSubscribe,
  using,
  StreamLike,
  zipWithLatestFrom,
} from "./observable.ts";
import {
  StreamableLike,
  createActionReducer,
  StreamableOperator,
  createStreamable,
} from "./streamable.ts";

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

/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(): StreamableOperator<
  T,
  T,
  StateUpdater<T>,
  T
> => {
  const createObservable = (updates: ObservableLike<StateUpdater<T>>) => (
    stream: StreamLike<T, T>,
  ) =>
    merge(
      pipe(
        updates,
        zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)),
        onNotify(next => stream.dispatch(next)),
        ignoreElements(),
        onSubscribe(() => stream),
      ),
      stream,
    );

  return streamable =>
    createStreamable(updates =>
      using(
        scheduler => streamable.stream(scheduler),
        createObservable(updates),
      ),
    );
};

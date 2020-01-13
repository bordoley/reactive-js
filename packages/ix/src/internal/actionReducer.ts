import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  scan,
  startWith,
  ObservableLike,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createAsyncEnumerator } from "./createAsyncEnumerator";
import { StateUpdaterLike, AsyncEnumerableLike } from "./interfaces";

class ReducerStoreAsyncEnumerable<TAction, T>
  implements AsyncEnumerableLike<TAction, T> {
  constructor(private readonly operator: ObservableOperatorLike<TAction, T>) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    return createAsyncEnumerator(this.operator, scheduler, replayCount);
  }
}

/**
 * Returns a new `AsyncEnumerableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 * 
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer = <TAction, T>(
  reducer: (state: T, action: TAction) => T,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableLike<TAction, T> => {
  const operator = (src: ObservableLike<TAction>) => {
    const acc = initialState();

    return pipe(
      src,
      scan(reducer, () => acc),
      startWith(acc),
      distinctUntilChanged(equals),
    );
  };

  return new ReducerStoreAsyncEnumerable(operator);
};

const stateStoreReducer = <T>(state: T, action: StateUpdaterLike<T>) =>
  action(state);

/**
 * Returns a new `AsyncEnumerableLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdaterLike` that computes a 
 * new state based upon the previous state.
 * 
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableLike<StateUpdaterLike<T>, T> =>
  createActionReducer(stateStoreReducer, initialState, equals);

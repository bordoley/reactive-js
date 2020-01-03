import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  scan,
  startWith,
  ObservableLike,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createAsyncEnumeratorResource } from "./createAsyncEnumerator";
import { StateUpdaterLike, AsyncEnumerableLike } from "./interfaces";

class ReducerStoreAsyncEnumerable<TAction, T>
  implements AsyncEnumerableLike<TAction, T> {
  constructor(private readonly operator: ObservableOperatorLike<TAction, T>) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    return createAsyncEnumeratorResource(this.operator, scheduler, replayCount);
  }
}

export const createActionReducerAsyncEnumerable = <TAction, T>(
  reducer: (state: T, action: TAction) => T,
  initialStateFactory: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableLike<TAction, T> => {
  const operator = (src: ObservableLike<TAction>) => {
    const initialState = initialStateFactory();

    return pipe(
      src,
      scan(reducer, () => initialState),
      startWith(initialState),
      distinctUntilChanged(equals),
    );
  };

  return new ReducerStoreAsyncEnumerable(operator);
};

const stateStoreReducer = <T>(state: T, action: StateUpdaterLike<T>) =>
  action(state);
export const createStateUpdaterAsyncEnumerable = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableLike<StateUpdaterLike<T>, T> =>
  createActionReducerAsyncEnumerable(stateStoreReducer, initialState, equals);

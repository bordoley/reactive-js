import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  scan,
  startWith,
  ObservableLike,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createAsyncIteratorResource } from "./createAsyncIterator";
import { StateUpdaterLike, AsyncIterableLike } from "./interfaces";

class ReducerStoreAsyncIterable<TAction, T>
  implements AsyncIterableLike<TAction, T> {
  constructor(private readonly operator: ObservableOperatorLike<TAction, T>) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    return createAsyncIteratorResource(this.operator, scheduler, replayCount);
  }
}

export const createActionReducerAsyncIterable = <TAction, T>(
  initialStateFactory: () => T,
  reducer: (state: T, action: TAction) => T,
  equals?: (a: T, b: T) => boolean,
): AsyncIterableLike<TAction, T> => {
  const operator = (src: ObservableLike<TAction>) => {
    const initialState = initialStateFactory();

    return pipe(
      src,
      scan(reducer, () => initialState),
      startWith(initialState),
      distinctUntilChanged(equals),
    );
  };

  return new ReducerStoreAsyncIterable(operator);
};

const stateStoreReducer = <T>(state: T, action: StateUpdaterLike<T>) =>
  action(state);
export const createStateAsyncIterable = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncIterableLike<StateUpdaterLike<T>, T> =>
  createActionReducerAsyncIterable(initialState, stateStoreReducer, equals);

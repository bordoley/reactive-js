import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  ignoreElements,
  merge,
  onNext,
  scan,
  ObservableLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  StateUpdaterLike,
  AsyncEnumerableLike,
  AsyncEnumerableOperatorLike,
} from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

class DelegatingStateUpdaterAsyncEnumerable<T>
  implements AsyncEnumerableLike<StateUpdaterLike<T>, T> {
  constructor(
    private readonly iterable: AsyncEnumerableLike<T, T>,
    private readonly initialState: () => T,
    private readonly equals?: (a: T, b: T) => boolean,
  ) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const iterator = this.iterable.enumerateAsync(scheduler);

    const operator = (
      obs: ObservableLike<StateUpdaterLike<T>>,
    ): ObservableLike<T> => {
      const onIteratorNextChangedObs = pipe(
        iterator,
        onNext((v: T) => retval.dispatch((_: T): T => v)),
        ignoreElements(),
      );

      const stateObs = pipe(
        obs,
        scan(
          (acc: T, next: StateUpdaterLike<T>) => next(acc),
          this.initialState,
        ),
        distinctUntilChanged(this.equals),
        onNext((next: T) => iterator.dispatch(next)),
      );

      return merge<T>(onIteratorNextChangedObs, stateObs);
    };

    const retval = createAsyncEnumerator(
      operator,
      scheduler,
      replayCount,
    ).add(iterator);
    return retval;
  }
}

export const toStateStore = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncEnumerableOperatorLike<T, T, StateUpdaterLike<T>, T> => iterable =>
  new DelegatingStateUpdaterAsyncEnumerable(iterable, initialState, equals);

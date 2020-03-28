import { pipe } from "@reactive-js/pipe";
import {
  distinctUntilChanged,
  ignoreElements,
  merge,
  onNotify,
  scan,
  ObservableLike,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  StateUpdaterLike,
  AsyncEnumerableLike,
  AsyncEnumerableOperatorLike,
} from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

class DelegatingStateStoreAsyncEnumerable<T>
  implements AsyncEnumerableLike<StateUpdaterLike<T>, T> {
  constructor(
    private readonly enumerable: AsyncEnumerableLike<T, T>,
    private readonly initialState: () => T,
    private readonly equals?: (a: T, b: T) => boolean,
  ) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const enumerator = this.enumerable.enumerateAsync(scheduler);

    const operator = (
      obs: ObservableLike<StateUpdaterLike<T>>,
    ): ObservableLike<T> => {
      const onIteratorNextChangedObs: ObservableLike<T> = pipe(
        enumerator,
        onNotify(v => retval.dispatch(_ => v)),
        ignoreElements(),
      );

      const stateObs = pipe(
        obs,
        scan(
          (acc: T, next: StateUpdaterLike<T>) => next(acc),
          this.initialState,
        ),
        distinctUntilChanged(this.equals),
        onNotify((next: T) => enumerator.dispatch(next)),
      );

      return merge<T>(onIteratorNextChangedObs, stateObs);
    };

    const retval = createAsyncEnumerator(operator, scheduler, replayCount).add(
      enumerator,
    );
    return retval;
  }
}

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
): AsyncEnumerableOperatorLike<T, T, StateUpdaterLike<T>, T> => enumerable =>
  new DelegatingStateStoreAsyncEnumerable(enumerable, initialState, equals);

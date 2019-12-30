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
import { StateUpdaterLike, AsyncIterableLike, AsyncIterableOperatorLike } from "./interfaces";
import { createAsyncIteratorResource } from "./createAsyncIterator";

class DelegatingStateUpdaterAsyncIterable<T>
  implements AsyncIterableLike<StateUpdaterLike<T>, T> {
  constructor(
    private readonly iterable: AsyncIterableLike<T, T>,
    private readonly initialState: () => T,
    private readonly equals?: (a: T, b: T) => boolean,
  ) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    const iterator = this.iterable.getIXAsyncIterator(scheduler);

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

    const retval = createAsyncIteratorResource(operator, scheduler, replayCount).add(iterator);
    return retval;
  }
}

export const toStateUpdaterAsyncIterable = <T>(
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncIterableOperatorLike<T, T, StateUpdaterLike<T>, T> => iterable =>
  new DelegatingStateUpdaterAsyncIterable(
    iterable,
    initialState,
    equals,
  );

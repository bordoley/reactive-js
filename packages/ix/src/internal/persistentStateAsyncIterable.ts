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
import { StateUpdaterLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

class PersistentStateAsyncIterable<T>
  implements AsyncIterableLike<StateUpdaterLike<T>, T> {
  constructor(
    private readonly persistentStoreIterable: AsyncIterableLike<T, T>,
    private readonly initialState: () => T,
    private readonly equals?: (a: T, b: T) => boolean,
  ) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    const persistentStore = this.persistentStoreIterable.getIXAsyncIterator(
      scheduler,
    );

    const operator = (
      obs: ObservableLike<StateUpdaterLike<T>>,
    ): ObservableLike<T> => {
      const onPersistentStoreChangedStream = pipe(
        persistentStore,
        onNext((v: T) => iter.dispatch((_: T): T => v)),
        ignoreElements(),
      );

      const stateObs = pipe(
        obs,
        scan(
          (acc: T, next: StateUpdaterLike<T>) => next(acc),
          this.initialState,
        ),
        distinctUntilChanged(this.equals),
        onNext((next: T) => persistentStore.dispatch(next)),
      );

      return merge<T>(onPersistentStoreChangedStream, stateObs);
    };

    const iter = createAsyncIteratorResource(operator, scheduler, replayCount);
    iter.add(persistentStore);
    return iter;
  }
}

export const createPersistentStateAsyncIterable = <T>(
  persistentStoreIterable: AsyncIterableLike<T, T>,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): AsyncIterableLike<StateUpdaterLike<T>, T> =>
  new PersistentStateAsyncIterable(
    persistentStoreIterable,
    initialState,
    equals,
  );

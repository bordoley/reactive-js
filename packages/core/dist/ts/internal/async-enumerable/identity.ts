import { AsyncEnumerableLike } from "./interfaces.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { AsyncEnumeratorImpl } from "./createAsyncEnumerable.ts";
import { createSubject, toSafeSubscriber } from "../../observable.ts";

const instance = {
  enumerateAsync: (scheduler: SchedulerLike, replayCount = 0) => {
    const subject = createSubject(scheduler, replayCount);
    const safeSubscriber = toSafeSubscriber(subject);

    return new AsyncEnumeratorImpl(safeSubscriber, subject);
  },
};

/**
 * Returns an `AsyncEnumerableLike` that publishes it's notifications.
 */
export const identity = <T>(): AsyncEnumerableLike<T, T> =>
  instance as AsyncEnumerableLike<T, T>;

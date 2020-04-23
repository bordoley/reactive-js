import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "../../scheduler";
import { AsyncEnumeratorImpl } from "./createAsyncEnumerable";
import { createSubject, toSafeSubscriber } from "../../observable";

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

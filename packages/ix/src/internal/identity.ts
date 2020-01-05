import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceImpl } from "./createAsyncEnumerator";
import { createSubject } from "@reactive-js/rx";

const instance = {
  enumerateAsync: (scheduler: SchedulerLike, replayCount = 0) => {
    // FIXME: subject is a subscriber not an observer, going to be problematic.
    const dispatcher = createSubject(scheduler, replayCount);
    return new AsyncEnumeratorResourceImpl(dispatcher, dispatcher);
  },
};

export const identity = <T>(): AsyncEnumerableLike<T, T> => instance;

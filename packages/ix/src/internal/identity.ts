import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceImpl } from "./createAsyncEnumerator";
import { createSubject } from "@reactive-js/rx";

const instance = {
  enumerateAsync: (scheduler: SchedulerLike, replayCount = 0) => {
    const subject = createSubject(scheduler, replayCount);
    return new AsyncEnumeratorResourceImpl(subject, subject);
  },
};

export const identity = <T>(): AsyncEnumerableLike<T, T> => instance;

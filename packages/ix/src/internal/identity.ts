import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceImpl } from "./createAsyncEnumerator";
import { createSubject } from "@reactive-js/rx";

const instance = {
  getIXAsyncEnumerator: (_: SchedulerLike, replayCount = 0) => {
    const dispatcher = createSubject(replayCount);
    return new AsyncEnumeratorResourceImpl(dispatcher, dispatcher);
  }
};

export const identity = <T>(): AsyncEnumerableLike<T, T> => instance;

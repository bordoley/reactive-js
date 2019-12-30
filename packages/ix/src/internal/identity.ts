import { AsyncIterableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncIteratorResourceImpl } from "./createAsyncIterator";
import { createSubject } from "@reactive-js/rx";

const instance = {
  getIXAsyncIterator: (_: SchedulerLike, replayCount = 0) => {
    const dispatcher = createSubject(replayCount);
    return new AsyncIteratorResourceImpl(dispatcher, dispatcher);
  }
};

export const identity = <T>(): AsyncIterableLike<T, T> => instance;

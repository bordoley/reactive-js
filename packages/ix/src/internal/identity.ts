import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createSubject } from "@reactive-js/rx";

const instance = {
  enumerateAsync: (scheduler: SchedulerLike, replayCount = 0) => {
    return createSubject(scheduler, replayCount);
  },
};

export const identity = <T>(): AsyncEnumerableLike<T, T> => instance;

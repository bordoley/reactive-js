import { AsyncIterableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createEventEmitter } from "./create";

const instance = {
  getIXAsyncIterator: (scheduler: SchedulerLike, replayCount = 0) =>
    replayCount > 0
      ? createEventEmitter({ scheduler, replayCount })
      : createEventEmitter(),
};

export const identity = <T>(): AsyncIterableLike<T, T> => instance;

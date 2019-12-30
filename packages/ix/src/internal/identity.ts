import { AsyncIterableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createEventEmitter } from "./createAsyncIterator";

const instance = {
  getIXAsyncIterator: (_: SchedulerLike, replayCount = 0) =>
    createEventEmitter(replayCount),
};

export const identity = <T>(): AsyncIterableLike<T, T> => instance;

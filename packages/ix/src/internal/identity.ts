import { AsyncEnumerableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const f = <T>(x: T): T => x;

const instance = {
  enumerateAsync: (scheduler: SchedulerLike, replayCount = 0) => {
    return createAsyncEnumerator(f, scheduler, replayCount);
  },
};

export const identity = <T>(): AsyncEnumerableLike<T, T> => instance;

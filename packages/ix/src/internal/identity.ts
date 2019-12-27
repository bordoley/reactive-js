import { AsyncIterableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createEventEmitter } from "./create";

class IdentityAsyncIterable<T> implements AsyncIterableLike<T, T> {
  getIXAsyncIterator(scheduler: SchedulerLike, replayCount = 0) {
    return replayCount > 0
      ? createEventEmitter({ scheduler, replayCount })
      : createEventEmitter();
  }
}

const instance = new IdentityAsyncIterable();

export const identity = <T>(): AsyncIterableLike<T, T> =>
  instance;

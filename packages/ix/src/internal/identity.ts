import { AsyncIterableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createEventEmitter } from "./create";

class IdentityAsyncIterable<T> implements AsyncIterableLike<number | void, T> {
  getIXAsyncIterator(scheduler: SchedulerLike, replayCount = 0) {
    return replayCount > 0
      ? createEventEmitter({scheduler, replayCount})
      : createEventEmitter();
  }
}

export const identity = <T>(): AsyncIterableLike<T, T> =>
  new IdentityAsyncIterable();

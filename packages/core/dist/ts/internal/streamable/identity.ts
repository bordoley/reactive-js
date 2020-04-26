import { SchedulerLike } from "../../scheduler.ts";
import { createSubject } from "../../observable.ts";
import { StreamableLike } from "./interfaces.ts";

const _identity = {
  stream: (_: SchedulerLike, replayCount = 0) => {
    return createSubject(replayCount);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T> =>
  _identity as StreamableLike<T, T>;
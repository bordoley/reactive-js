import { createSubject } from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { StreamableLike } from "./interfaces";

const _identity = {
  stream(_: SchedulerLike, replayCount = 0) {
    return createSubject(replayCount);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T> =>
  _identity as StreamableLike<T, T>;

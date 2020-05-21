import { createSubject } from "../../observable.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { StreamableLike } from "./interfaces.ts";

const _identity = {
  stream(_: SchedulerLike, options?: { replay: number}) {
    return createSubject(options);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T> =>
  _identity as StreamableLike<T, T>;

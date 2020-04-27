import { SchedulerLike } from "../../scheduler.ts";
import { pipe } from "../../functions.ts";
import { createObservable } from "./createObservable.ts";
import { ObservableOperator } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  createObservable(subscriber => {
    subscriber.add(
      pipe(
        observable,
        onNotify(next => subscriber.dispatch(next)),
        subscribe(scheduler),
      ).add(e => subscriber.dispose(e)),
    );
  });

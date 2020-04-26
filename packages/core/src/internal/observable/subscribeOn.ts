import { SchedulerLike } from "../../scheduler";
import { pipe } from "../../pipe";
import { createObservable } from "./createObservable";
import { ObservableOperator } from "./interfaces";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

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

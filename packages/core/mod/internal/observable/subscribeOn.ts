import { pipe } from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";
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
  createObservable(dispatcher => {
    dispatcher.add(
      pipe(
        observable,
        onNotify(next => dispatcher.dispatch(next)),
        subscribe(scheduler),
      ).add(dispatcher),
    );
  });

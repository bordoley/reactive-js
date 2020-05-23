import { bindDisposables } from "../../disposable";
import { pipe } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { createObservable } from "./createObservable";
import { dispatchTo } from "./dispatcher";
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
  createObservable(dispatcher => {
    const subscription = pipe(
      observable,
      onNotify(dispatchTo(dispatcher)),
      subscribe(scheduler),
    );

    bindDisposables(subscription, dispatcher);
  });

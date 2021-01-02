import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator } from "../observable";

import { SchedulerLike } from "../scheduler";
import { createObservable } from "./createObservable";
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
      subscribe(scheduler, dispatcher.dispatch, dispatcher),
    );

    bindDisposables(subscription, dispatcher);
  });

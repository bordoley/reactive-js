import { addDisposableOrTeardown, add } from "../../disposable";
import { pipe } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { createObservable } from "./createObservable";
import { dispatchTo } from "./dispatcher";
import { ObservableFunction } from "./interfaces";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableFunction<T, T> => observable =>
  createObservable(dispatcher => {
    add(
      dispatcher,
      pipe(
        observable,
        onNotify(dispatchTo(dispatcher)),
        subscribe(scheduler),
        addDisposableOrTeardown(dispatcher),
      ),
    );
  });
